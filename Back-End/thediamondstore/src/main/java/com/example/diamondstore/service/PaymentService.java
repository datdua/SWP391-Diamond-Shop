package com.example.diamondstore.service;

import java.io.UnsupportedEncodingException;
import java.math.BigDecimal;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.TimeZone;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.diamondstore.DTO.PaymentResDTO;
import com.example.diamondstore.DTO.TransactionStatusDTO;
import com.example.diamondstore.config.PaymentConfig;
import com.example.diamondstore.model.AccumulatePoints;
import com.example.diamondstore.model.Cart;
import com.example.diamondstore.model.Certificate;
import com.example.diamondstore.model.Order;
import com.example.diamondstore.model.OrderDetail;
import com.example.diamondstore.model.Payment;
import com.example.diamondstore.model.Promotion;
import com.example.diamondstore.model.Warranty;
import com.example.diamondstore.model.WarrantyHistory;
import com.example.diamondstore.repository.AccumulatePointsRepository;
import com.example.diamondstore.repository.CartRepository;
import com.example.diamondstore.repository.CertificateRepository;
import com.example.diamondstore.repository.OrderDetailRepository;
import com.example.diamondstore.repository.OrderRepository;
import com.example.diamondstore.repository.PaymentRepository;
import com.example.diamondstore.repository.PromotionRepository;
import com.example.diamondstore.repository.WarrantyHistoryRepository;
import com.example.diamondstore.repository.WarrantyRepository;

@Service
public class PaymentService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderDetailRepository orderDetailRepository;

    @Autowired
    private AccumulatePointsRepository accumulatePointsRepository;

    @Autowired
    private WarrantyRepository warrantyRepository;

    @Autowired
    private WarrantyHistoryRepository warrantyHistoryRepository;

    @Autowired
    private PromotionRepository promotionRepository;

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private CertificateRepository certificateRepository;

    public ResponseEntity<?> createPayment(Integer orderID) throws UnsupportedEncodingException {
        String vnp_Version = "2.1.0";
        String vnp_Command = "pay";
        String orderType = "other";
        Order order = orderRepository.findByOrderID(orderID);
        BigDecimal totalAmount = order.getTotalOrder();
        long amount = totalAmount.longValue() * 100;
        String bankCode = "NCB";
        String vnp_IpAddr = "127.0.0.1";
        String vnp_TmnCode = PaymentConfig.vnp_TmnCode;

        Map<String, String> vnp_Params = new HashMap<>();
        vnp_Params.put("vnp_Version", vnp_Version);
        vnp_Params.put("vnp_Command", vnp_Command);
        vnp_Params.put("vnp_TmnCode", vnp_TmnCode);
        vnp_Params.put("vnp_Amount", String.valueOf(amount));
        vnp_Params.put("vnp_CurrCode", "VND");
        vnp_Params.put("vnp_BankCode", bankCode);
        vnp_Params.put("vnp_TxnRef", String.valueOf(orderID)); // Convert orderID to String
        vnp_Params.put("vnp_OrderInfo", "Thanh toan don hang:" + orderID);
        vnp_Params.put("vnp_OrderType", orderType);
        vnp_Params.put("vnp_Locale", "vn");
        vnp_Params.put("vnp_ReturnUrl", PaymentConfig.vnp_ReturnUrl);
        vnp_Params.put("vnp_IpAddr", vnp_IpAddr);

        Calendar cld = Calendar.getInstance(TimeZone.getTimeZone("Etc/GMT+7"));
        SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
        String vnp_CreateDate = formatter.format(cld.getTime());
        vnp_Params.put("vnp_CreateDate", vnp_CreateDate);

        cld.add(Calendar.HOUR, 10);
        String vnp_ExpireDate = formatter.format(cld.getTime());
        vnp_Params.put("vnp_ExpireDate", vnp_ExpireDate);

        List<String> fieldNames = new ArrayList<>(vnp_Params.keySet());
        Collections.sort(fieldNames);
        StringBuilder hashData = new StringBuilder();
        StringBuilder query = new StringBuilder();
        Iterator<String> itr = fieldNames.iterator();
        while (itr.hasNext()) {
            String fieldName = itr.next();
            String fieldValue = vnp_Params.get(fieldName);
            if ((fieldValue != null) && (fieldValue.length() > 0)) {
                // Build hash data
                hashData.append(fieldName);
                hashData.append('=');
                hashData.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII.toString()));
                // Build query
                query.append(URLEncoder.encode(fieldName, StandardCharsets.US_ASCII.toString()));
                query.append('=');
                query.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII.toString()));
                if (itr.hasNext()) {
                    query.append('&');
                    hashData.append('&');
                }
            }
        }
        String queryUrl = query.toString();
        String vnp_SecureHash = PaymentConfig.hmacSHA512(PaymentConfig.secretKey, hashData.toString());
        queryUrl += "&vnp_SecureHash=" + vnp_SecureHash;
        String paymentUrl = PaymentConfig.vnp_PayUrl + "?" + queryUrl;

        // Save payment
        Payment payment = new Payment();
        payment.setOrderID(orderID);
        payment.setPaymentMethod("VNPay");
        payment.setPaymentStatus("Chờ thanh toán");
        payment.setTransDate(vnp_CreateDate);
        payment.setBankCode(bankCode);
        payment.setAmount(totalAmount);
        paymentRepository.save(payment);

        PaymentResDTO paymentResDTO = new PaymentResDTO();
        paymentResDTO.setStatus("Ok");
        paymentResDTO.setMessage("Success");
        paymentResDTO.setURL(paymentUrl);

        return ResponseEntity.status(HttpStatus.OK).body(paymentResDTO);
    }

    public ResponseEntity<TransactionStatusDTO> handlePaymentReturn(String bankCode, Integer orderID,
            String responseCode, Integer transactionNo) {
        Order order = orderRepository.findByOrderID(orderID);
        TransactionStatusDTO transactionStatusDTO = new TransactionStatusDTO();

        if (responseCode.equals("00")) {
            // payment success
            transactionStatusDTO.setStatus("Ok");
            transactionStatusDTO.setMessage("Thanh toán thành công");
            transactionStatusDTO.setData("");

            // Save payment
            Payment payment = paymentRepository.findByOrderID(orderID);
            payment.setPaymentStatus("Đã thanh toán");
            payment.setBankCode(bankCode);
            payment.setTransactionNo(transactionNo);
            payment.setResponseCode(responseCode);
            paymentRepository.save(payment);

            // Update order status
            order.setOrderStatus("Đã thanh toán");
            order.setTransactionNo(transactionNo);
            orderRepository.save(order);

            // Save accumulate points
            Integer accountID = order.getAccount().getAccountID();
            AccumulatePoints accumulatePoints = accumulatePointsRepository.findById(accountID)
                    .orElseThrow(() -> new IllegalArgumentException("Khách hàng không tồn tại"));
            accumulatePoints.setPoint(accumulatePoints.getPoint() + 100);
            accumulatePointsRepository.save(accumulatePoints);

            LocalDateTime effectiveDate = LocalDateTime.now();
            LocalDateTime expirationDate = effectiveDate.plus(1, ChronoUnit.YEARS);

            Promotion promotion = promotionRepository.findByPromotionCode(order.getPromotionCode());

            // save order detail
            List<Cart> cartItems = cartRepository.findByOrder(order);
            for (Cart cart : cartItems) {
                OrderDetail orderDetail = new OrderDetail();
                orderDetail.setOrder(order);
                orderDetail.setAccount(cart.getAccount());
                orderDetail.setDiamond(cart.getDiamond());
                orderDetail.setJewelry(cart.getJewelry());
                orderDetail.setQuantity(cart.getQuantity());
                orderDetail.setSizeJewelry(cart.getSizeJewelry());
                orderDetail.setPrice(cart.getPrice());
                orderDetail.setGrossCartPrice(cart.getGrossCartPrice());
                orderDetail.setTotalPrice(cart.getPrice().multiply(BigDecimal.valueOf(cart.getQuantity())));
                orderDetail.setPromotion(promotion);
                orderDetailRepository.save(orderDetail);

                // handle warranty of diamond
                if (cart.getDiamond() != null) {
                    Warranty diamondWarranty = warrantyRepository.findByDiamondID(cart.getDiamond().getDiamondID());
                    Certificate diamondCertificate = certificateRepository
                            .findByDiamondID(cart.getDiamond().getDiamondID());
                    if (diamondCertificate != null) {
                        orderDetail.setDiamondCertificateImage(
                                diamondCertificate != null ? diamondCertificate.getcertificateImage() : null);
                    }
                    if (diamondWarranty != null) {
                        orderDetail.setWarranty(diamondWarranty);
                        WarrantyHistory warrantyHistory = new WarrantyHistory();
                        warrantyHistory.setWarranty(diamondWarranty);
                        warrantyHistory.setOrderDetail(orderDetail);
                        warrantyHistory.setEffectiveDate(effectiveDate);
                        warrantyHistory.setExpirationDate(expirationDate);
                        warrantyHistory.setWarrantyStatus("Đã kích hoạt");
                        warrantyHistoryRepository.save(warrantyHistory);
                    }
                }

                // handle warranty of jewelry
                if (cart.getJewelry() != null) {
                    Warranty jewelryWarranty = warrantyRepository.findByJewelryID(cart.getJewelry().getJewelryID());
                    if (jewelryWarranty != null) {
                        orderDetail.setWarranty(jewelryWarranty);
                        WarrantyHistory warrantyHistory = new WarrantyHistory();
                        warrantyHistory.setWarranty(jewelryWarranty);
                        warrantyHistory.setOrderDetail(orderDetail);
                        warrantyHistory.setEffectiveDate(effectiveDate);
                        warrantyHistory.setExpirationDate(expirationDate);
                        warrantyHistory.setWarrantyStatus("Đã kích hoạt");
                        warrantyHistoryRepository.save(warrantyHistory);
                    }
                }

                orderDetailRepository.save(orderDetail);

                // delete cart
                cartRepository.delete(cart);
            }
        } else {
            // payment fail
            transactionStatusDTO.setStatus("No");
            transactionStatusDTO.setMessage("Thanh toán thất bại");
            transactionStatusDTO.setData("");

            // Save payment
            Payment payment = paymentRepository.findByOrderID(orderID);
            if (payment == null) {
                transactionStatusDTO.setStatus("No");
                transactionStatusDTO.setMessage("Chưa có thông tin thanh toán");
                transactionStatusDTO.setData("");
                return ResponseEntity.status(HttpStatus.OK).body(transactionStatusDTO);
            } else {
                payment.setPaymentStatus("Thanh toán thất bại");
                payment.setBankCode(bankCode);
                payment.setTransactionNo(transactionNo);
                payment.setResponseCode(responseCode);
                paymentRepository.save(payment);
            }

            order.setOrderStatus("Thanh toán thất bại");
            orderRepository.save(order);
        }

        return ResponseEntity.status(HttpStatus.OK).body(transactionStatusDTO);
    }
}
