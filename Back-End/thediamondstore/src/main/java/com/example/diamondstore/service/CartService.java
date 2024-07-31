package com.example.diamondstore.service;

import java.math.BigDecimal;
import java.util.Collections;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.diamondstore.model.Account;
import com.example.diamondstore.model.Cart;
import com.example.diamondstore.model.Diamond;
import com.example.diamondstore.model.Jewelry;
import com.example.diamondstore.repository.AccountRepository;
import com.example.diamondstore.repository.CartRepository;
import com.example.diamondstore.repository.DiamondRepository;
import com.example.diamondstore.repository.JewelryRepository;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private DiamondRepository diamondRepository;

    @Autowired
    private JewelryRepository jewelryRepository;

    @Autowired
    private AccountRepository accountRepository;

    public List<Cart> getCartItems(Integer accountID) {
        return cartRepository.findByAccount_AccountID(accountID);
    }

    @Transactional
    public ResponseEntity<?> addItemToCart(Integer accountID, String diamondID, String jewelryID, Integer sizeJewelry,
            Integer quantity) {
        if (quantity <= 0) {
            return ResponseEntity.badRequest().body("Số lượng phải lớn hơn 0");
        }

        Account account = accountRepository.findById(accountID).orElse(null);
        if (account == null) {
            return ResponseEntity.badRequest().body("Tài khoản không tồn tại");
        }

        Cart existingCart = null;
        Integer existingQuantity = 0;

        if (diamondID != null) {
            Diamond diamond = diamondRepository.findById(diamondID).orElse(null);

            if (diamond != null && diamond.getStatus().equals("Tạm ngưng bán")) {
                return ResponseEntity.badRequest()
                        .body(Collections.singletonMap("message", "Sản phẩm đã tạm ngưng bán"));
            }

            if (diamond != null) {
                existingCart = cartRepository.findByAccountAndDiamond(account, diamond);
                if (existingCart != null) {
                    existingQuantity = existingCart.getQuantity();
                }
                if (quantity + existingQuantity > diamond.getQuantity()) {
                    return ResponseEntity.badRequest()
                            .body(Collections.singletonMap("message", "Số lượng kim cương không đủ"));
                }
            }
        }

        if (jewelryID != null) {
            Jewelry jewelry = jewelryRepository.findById(jewelryID).orElse(null);
            if (jewelry != null && jewelry.getStatus().equals("Tạm ngưng bán")) {
                return ResponseEntity.badRequest()
                        .body(Collections.singletonMap("message", "Sản phẩm đã tạm ngưng bán"));
            }
            if (jewelry != null) {
                existingCart = cartRepository.findByAccountAndJewelryAndSizeJewelry(account, jewelry, sizeJewelry);
                if (existingCart != null) {
                    existingQuantity = existingCart.getQuantity();
                }
                // Calculate total quantity in cart for the given jewelry ID
                List<Cart> cartsWithJewelry = cartRepository.findByAccountAndJewelry(account, jewelry);
                int totalQuantityInCart = cartsWithJewelry.stream()
                        .mapToInt(Cart::getQuantity)
                        .sum();

                // Check if the total quantity in cart plus new quantity exceeds the system's
                // available quantity
                if (totalQuantityInCart + quantity > jewelry.getQuantity()) {
                    return ResponseEntity.badRequest()
                            .body(Collections.singletonMap("message", "Số lượng trang sức không đủ"));
                }
                if (sizeJewelry == null) {
                    return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Vui lòng nhập size"));
                }
            }
        }

        if (existingCart != null) {
            existingCart.setQuantity(existingCart.getQuantity() + quantity);
            calculateAndSetTotalPrice(existingCart);
            cartRepository.save(existingCart);
            return ResponseEntity.ok(Collections.singletonMap("message", "Cập nhật giỏ hàng thành công"));
        } else {
            Cart cart = new Cart();
            cart.setAccount(account);
            cart.setQuantity(quantity);
            cart.setDiamond(diamondID != null ? diamondRepository.findById(diamondID).orElse(null) : null);
            cart.setJewelry(jewelryID != null ? jewelryRepository.findById(jewelryID).orElse(null) : null);
            cart.setSizeJewelry(sizeJewelry);
            calculateAndSetTotalPrice(cart);
            cartRepository.save(cart);
            return ResponseEntity.ok(Collections.singletonMap("message", "Thêm vào giỏ hàng thành công"));
        }
    }

    @Transactional
    public ResponseEntity<?> updateCartItem(Integer cartID, Integer accountID, String diamondID, String jewelryID,
            Integer sizeJewelry, Integer quantity) {
        Cart cartItem = cartRepository.findById(cartID).orElse(null);
        if (cartItem == null) {
            return ResponseEntity.badRequest().body("Giỏ hàng không tồn tại");
        }

        if (quantity <= 0) {
            return ResponseEntity.badRequest().body("Số lượng phải lớn hơn 0");
        }

        // Lấy thông tin tài khoản
        Account account = accountRepository.findById(accountID).orElse(null);
        if (account == null) {
            return ResponseEntity.badRequest().body("Tài khoản không tồn tại");
        }
        cartItem.setAccount(account);

        if (diamondID != null) {
            Diamond diamond = diamondRepository.findById(diamondID).orElse(null);
            if (diamond != null) {
                if (quantity > diamond.getQuantity()) {
                    return ResponseEntity.badRequest().body("Số lượng kim cương không đủ");
                }
                cartItem.setDiamond(diamond);
                cartItem.setJewelry(null);
                cartItem.setSizeJewelry(null);
            } else {
                return ResponseEntity.badRequest().body("Kim cương không tồn tại");
            }
        }

        if (jewelryID != null) {
            Jewelry jewelry = jewelryRepository.findById(jewelryID).orElse(null);
            if (jewelry != null) {
                // Tính tổng số lượng trang sức trong giỏ hàng
                int totalQuantityInCart = cartRepository.findByAccountAndJewelry(account, jewelry)
                        .stream()
                        .mapToInt(Cart::getQuantity)
                        .sum();

                // Kiểm tra tổng số lượng trong giỏ hàng cộng với số lượng mới
                if (totalQuantityInCart + quantity > jewelry.getQuantity()) {
                    return ResponseEntity.badRequest().body("Số lượng trang sức không đủ");
                }

                cartItem.setJewelry(jewelry);
                cartItem.setSizeJewelry(sizeJewelry);
                cartItem.setDiamond(null);
            } else {
                return ResponseEntity.badRequest().body("Trang sức không tồn tại");
            }
        }

        cartItem.setQuantity(quantity);
        calculateAndSetTotalPrice(cartItem);
        cartRepository.save(cartItem);
        return ResponseEntity.ok(cartItem);
    }

    @Transactional
    public void removeCartItem(Integer cartID) {
        Cart cart = cartRepository.findById(cartID).orElse(null);
        if (cart != null) {
            cartRepository.delete(cart);
        } else {
            throw new IllegalArgumentException("Không tìm thấy sản phẩm trong giỏ hàng.");
        }
    }

    private void calculateAndSetTotalPrice(Cart cart) {
        BigDecimal totalPrice = BigDecimal.ZERO;
        BigDecimal diamondPrice = BigDecimal.ZERO;
        BigDecimal jewelryPrice = BigDecimal.ZERO;

        if (cart.getDiamond() != null) {
            diamondPrice = diamondPrice.add(cart.getDiamond().getDiamondEntryPrice());
        }

        if (cart.getJewelry() != null) {
            jewelryPrice = jewelryPrice.add(cart.getJewelry().getJewelryEntryPrice());
        }

        BigDecimal price = diamondPrice.add(jewelryPrice);
        cart.setPrice(price);

        totalPrice = price.multiply(BigDecimal.valueOf(cart.getQuantity()));

        BigDecimal grossCartPrice;
        if (cart.getDiamond() != null || cart.getJewelry() != null) {
            grossCartPrice = totalPrice.multiply(BigDecimal.valueOf(1.2));
        } else {
            grossCartPrice = totalPrice.multiply(BigDecimal.valueOf(1.1));
        }
        cart.setGrossCartPrice(grossCartPrice);
    }

    public Cart getCartByCartID(Integer cartID) {
        return cartRepository.findById(cartID).orElse(null);
    }

    @Transactional
    public void saveCart(Cart cart) {
        calculateAndSetTotalPrice(cart);
        cartRepository.save(cart);
    }

    public BigDecimal getTotalCart(Integer accountID) {
        List<Cart> cartItems = cartRepository.findByAccount_AccountID(accountID);
        BigDecimal totalCart = BigDecimal.ZERO;
        for (Cart cart : cartItems) {
            totalCart = totalCart.add(cart.getGrossCartPrice());
        }
        return totalCart;
    }

    public String updateCartQuantity(Integer cartID, Integer quantity) {
        Cart cart = cartRepository.findById(cartID).orElse(null);
        if (cart != null) {
            cart.setQuantity(quantity);
            calculateAndSetTotalPrice(cart);
            cartRepository.save(cart);
            return "Số lượng sản phẩm đã được cập nhật.";
        } else {
            return "Không tìm thấy sản phẩm trong giỏ hàng.";
        }
    }
}
