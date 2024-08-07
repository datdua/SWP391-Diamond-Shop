package com.example.diamondstore.service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.diamondstore.model.Jewelry;
import com.example.diamondstore.repository.CartRepository;
import com.example.diamondstore.repository.GoldPriceRepository;
import com.example.diamondstore.repository.JewelryRepository;
import com.example.diamondstore.repository.OrderDetailRepository;
import com.example.diamondstore.repository.WarrantyHistoryRepository;
import com.example.diamondstore.repository.WarrantyRepository;
import com.example.diamondstore.request.putRequest.JewelryPutRequest;
import com.example.diamondstore.specification.JewelrySpecification;

@Service
public class JewelryService {

    @Autowired
    private JewelryRepository jewelryRepository;

    @Autowired
    private WarrantyRepository warrantyRepository;

    @Autowired
    private GoldPriceRepository goldPriceRepository;

    @Autowired
    private WarrantyService warrantyService;

    @Autowired
    private OrderDetailRepository orderDetailRepository;

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private WarrantyHistoryRepository warrantyHistoryRepository;

    public List<Jewelry> getAllJewelry() {
        return jewelryRepository.findAll();
    }

    public Jewelry getJewelryById(String jewelryID) {
        return jewelryRepository.findByJewelryID(jewelryID);
    }

    public Page<Jewelry> getAllJewelryPaged(int page, int size) {
        Pageable pageable = PageRequest.of(page - 1, size);
        return jewelryRepository.findAll(pageable);
    }

    @PostConstruct
    public void updateJewelryStatusesOnStartup() {
        updateJewelryStatusesAuto();
    }

    @Scheduled(cron = "*/5 * * * * *")
    public void updateJewelryStatusesAuto() {
        List<Jewelry> jewelries = jewelryRepository.findAll();
        LocalDateTime now = LocalDateTime.now();

        for (Jewelry jewelry : jewelries) {
            if (jewelry.getWarrantyID() == null || jewelry.getJewelryEntryPrice().compareTo(BigDecimal.ZERO) == 0) {
                jewelry.setStatus("Tạm ngưng bán");
            } else if (jewelry.getQuantity() == 0) {
                jewelry.setStatus("Hết hàng");
            } else {
                jewelry.setStatus("Còn hàng");
            }
            jewelryRepository.save(jewelry);
        }
    }

    public ResponseEntity<Map<String, String>> createJewelry(Jewelry jewelry) {
        if (!validateJewelryID(jewelry.getJewelryID())) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Mã trang sức không hợp lệ"));
        }

        Jewelry existingJewelry = jewelryRepository.findByJewelryID(jewelry.getJewelryID());
        if (existingJewelry != null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Trang sức đã tồn tại"));
        }

        if (jewelry.getJewelryEntryPrice() == null) {
            jewelry.setJewelryEntryPrice(BigDecimal.ZERO);
        }

        if (jewelry.getWarrantyID() != null && !jewelry.getWarrantyID().isEmpty()) {
            if (!warrantyService.validateWarrantyID(jewelry.getWarrantyID())) {
                return ResponseEntity.badRequest()
                        .body(Collections.singletonMap("message", "Mã bảo hành không hợp lệ"));
            }

            if (jewelryRepository.existsByWarrantyID(jewelry.getWarrantyID())) {
                return ResponseEntity.badRequest()
                        .body(Collections.singletonMap("message", "Bảo hành đã được gán cho một trang sức khác"));
            }
        }

        if (jewelry.getQuantity() < 0) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Số lượng không hợp lệ"));
        }

        if (jewelry.getWarrantyID() == null || jewelry.getJewelryEntryPrice().compareTo(BigDecimal.ZERO) == 0) {
            jewelry.setStatus("Tạm ngưng bán");
        } else if (jewelry.getQuantity() == 0) {
            jewelry.setStatus("Hết hàng");
        } else {
            jewelry.setStatus("Còn hàng");
        }

        // Calculate gross jewelry price = jewelry price * 1.2 (tax: 10%, wage: 10%)
        BigDecimal grossJewelryPrice = jewelry.getJewelryEntryPrice().multiply(new BigDecimal(1.2));
        jewelry.setGrossJewelryPrice(grossJewelryPrice);

        jewelryRepository.save(jewelry);

        if (jewelry.getJewelryEntryPrice().compareTo(BigDecimal.ZERO) == 0) {
            return ResponseEntity.ok().body(Collections.singletonMap("message",
                    "Tạo trang sức thành công, vui lòng tạo giá cho trang sức này"));
        } else {
            return ResponseEntity.ok().body(Collections.singletonMap("message", "Tạo trang sức thành công"));
        }
    }

    public ResponseEntity<Map<String, String>> updateJewelry(String jewelryID, JewelryPutRequest jewelryPutRequest) {
        if (!validateJewelryID(jewelryID)) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Mã trang sức không hợp lệ"));
        }

        Jewelry existingJewelry = jewelryRepository.findByJewelryID(jewelryID);
        if (existingJewelry == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Collections.singletonMap("message", "Không tìm thấy trang sức"));
        }

        if (jewelryPutRequest.getQuantity() < 0) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Số lượng không hợp lệ"));
        }

        existingJewelry.setJewelryName(jewelryPutRequest.getJewelryName());
        existingJewelry.setGender(jewelryPutRequest.getGender());
        existingJewelry.setjewelryImage(jewelryPutRequest.getJewelryImage());
        existingJewelry.setJewelryEntryPrice(jewelryPutRequest.getJewelryEntryPrice());
        existingJewelry.setWarrantyID(jewelryPutRequest.getWarrantyID());
        existingJewelry.setQuantity(jewelryPutRequest.getQuantity());

        if (jewelryPutRequest.getWarrantyID() == null || jewelryPutRequest.getJewelryEntryPrice().compareTo(BigDecimal.ZERO) == 0) {
            existingJewelry.setStatus("Tạm ngưng bán");
        } else if (jewelryPutRequest.getQuantity() == 0) {
            existingJewelry.setStatus("Hết hàng");
        } else {
            existingJewelry.setStatus("Còn hàng");
        }

        // update gross jewelry price : grossJewelryPrice = jewelryEntryPrice * 1.2
        if (jewelryPutRequest.getJewelryEntryPrice() != null) {
            BigDecimal grossJewelryPrice = jewelryPutRequest.getJewelryEntryPrice().multiply(new BigDecimal(1.2));
            existingJewelry.setGrossJewelryPrice(grossJewelryPrice);
        }

        jewelryRepository.save(existingJewelry);
        return ResponseEntity.ok().body(Collections.singletonMap("message", "Cập nhật trang sức thành công"));
    }

    @Transactional
    public ResponseEntity<Map<String, String>> deleteJewelry(@RequestBody List<String> jewelryIDs) {
        // validate diamondIDs
        if (jewelryIDs.isEmpty()) {
            return ResponseEntity.badRequest()
                    .body(Collections.singletonMap("message", "Không có mã kim cương để xóa"));
        }

        // case diamondIDs have a diamondID that is not valid
        if (jewelryIDs.stream().anyMatch(jewelryID -> !validateJewelryID(jewelryID))) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Mã kim cương không hợp lệ"));
        }

        List<String> existingJewelryIDs = jewelryIDs.stream()
                .filter(jewelryID -> jewelryRepository.existsById(jewelryID))
                .collect(Collectors.toList());

        if (!existingJewelryIDs.isEmpty()) {
            for (String jewelryID : existingJewelryIDs) {
                List<String> warrantyIDs = warrantyRepository.findAllByJewelryID(jewelryID)
                        .stream()
                        .map(warranty -> warranty.getWarrantyID())
                        .collect(Collectors.toList());

                // delete order detail
                orderDetailRepository.deleteByWarranty_WarrantyIDIn(warrantyIDs);

                // delete warranty history
                warrantyHistoryRepository.deleteByWarranty_WarrantyIDIn(warrantyIDs);

                // delete warranty
                warrantyRepository.deleteByJewelryID(jewelryID);

                // delete cart
                cartRepository.deleteByJewelry_JewelryID(jewelryID);

                // delete gold price
                goldPriceRepository.deleteByJewelryID(jewelryID);

            }

            jewelryRepository.deleteAllById(existingJewelryIDs);
            return ResponseEntity.ok().body(Collections.singletonMap("message", "Xóa các giá vàng thành công"));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Collections.singletonMap("message", "Không tìm thấy giá vàng để xóa"));
        }
    }

    public List<Jewelry> searchJewelry(String jewelryName, Float minjewelryEntryPrice, Float maxjewelryEntryPrice,
            String gender) {
        Specification<Jewelry> spec = Specification.where(null);

        if (jewelryName != null) {
            spec = spec.and(JewelrySpecification.hasNameLike(jewelryName));
        }
        if (minjewelryEntryPrice != null) {
            spec = spec.and(JewelrySpecification.hasMinJewelryEntryPrice(minjewelryEntryPrice));
        }
        if (maxjewelryEntryPrice != null) {
            spec = spec.and(JewelrySpecification.hasMaxJewelryEntryPrice(maxjewelryEntryPrice));
        }
        if (gender != null) {
            spec = spec.and(JewelrySpecification.hasGender(gender));
        }

        return jewelryRepository.findAll(spec);
    }

    public List<Jewelry> searchJewelryByName(String name) {
        Specification<Jewelry> spec = JewelrySpecification.hasNameLike(name);
        return jewelryRepository.findAll(spec);
    }

    public Page<Jewelry> searchJewelryWithFilters(
            String jewelryName,
            Float minjewelryEntryPrice,
            Float maxjewelryEntryPrice,
            String gender,
            int page,
            int size) {

        Specification<Jewelry> spec = Specification.where(null);

        if (jewelryName != null) {
            spec = spec.and(JewelrySpecification.hasJewelryNameIgnoreCase(jewelryName));
        }
        if (minjewelryEntryPrice != null) {
            spec = spec.and(JewelrySpecification.hasMinJewelryEntryPrice(minjewelryEntryPrice));
        }
        if (maxjewelryEntryPrice != null) {
            spec = spec.and(JewelrySpecification.hasMaxJewelryEntryPrice(maxjewelryEntryPrice));
        }
        if (gender != null) {
            spec = spec.and(JewelrySpecification.hasGender(gender));
        }

        Pageable pageable = PageRequest.of(page - 1, size);
        return jewelryRepository.findAll(spec, pageable);
    }

    // validate jewelryID
    public boolean validateJewelryID(String jewelryID) {
        // jewelry has form: JID-
        if (!jewelryID.startsWith("JID-")) {
            return false;
        }
        return true;
    }
}
