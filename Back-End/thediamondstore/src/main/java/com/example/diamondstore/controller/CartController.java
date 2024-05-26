package com.example.diamondstore.controller;

import com.example.diamondstore.model.Cart;
import com.example.diamondstore.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping("/{accountID}")
    public ResponseEntity<List<Cart>> getCartItems(@PathVariable Integer accountID) {
        List<Cart> cartItems = cartService.getCartItems(accountID);
        return ResponseEntity.ok(cartItems);
    }

    @PostMapping(value = "/add", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> addItemToCart(
            @RequestParam Integer accountID,
            @RequestParam(required = false) String diamondID,
            @RequestParam(required = false) String jewelryID,
            @RequestParam Integer quantity) {
        cartService.addItemToCart(accountID, diamondID, jewelryID, quantity);
        return ResponseEntity.ok(Collections.singletonMap("message", "Thêm vào giỏ hàng thành công"));
    }

    @PutMapping(value = "/update/{cartID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> updateCartItem(
            @PathVariable Integer cartID,
            @RequestParam Integer accountID,
            @RequestParam(required = false) String diamondID,
            @RequestParam(required = false) String jewelryID,
            @RequestParam Integer quantity) {
        cartService.updateCartItem(cartID, accountID, diamondID, jewelryID, quantity);
        return ResponseEntity.ok(Collections.singletonMap("message", "Cập nhật giỏ hàng thành công"));
    }

    @DeleteMapping(value = "/remove/{cartID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> removeCartItem(@PathVariable Integer cartID) {
        cartService.removeCartItem(cartID);
        return ResponseEntity.ok(Collections.singletonMap("message", "Xóa khỏi giỏ hàng thành công"));
    }

    @PostMapping(value = "/create", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> createCart(@RequestBody Cart cart) {
        Cart existingCart = cartService.getCartByCartID(cart.getCartID());
        if (existingCart != null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Giỏ hàng đã tồn tại"));
        }
        cart.setCartID(null);  // Set cartID to null
        cartService.saveCart(cart);
        return ResponseEntity.ok(Collections.singletonMap("message", "Tạo giỏ hàng thành công"));
    }
}
