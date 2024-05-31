package com.example.diamondstore.controller;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.model.Cart;
import com.example.diamondstore.service.CartService;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    //lấy câc sản phẩm trong giỏ hàng
    @GetMapping()
    public ResponseEntity<?> getCartItems(@RequestParam Integer accountID) {
        List<Cart> cartItems = cartService.getCartItems(accountID);
        if (cartItems.isEmpty()) {
            return ResponseEntity.ok(Collections.singletonMap("message", "Giỏ hàng đang rỗng."));
        }
        return ResponseEntity.ok(cartItems);
    }

    //thêm sản phầm vào giỏ hàng
    @PostMapping(value = "/add", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> addItemToCart(
            @RequestParam(required = false) Integer accountID,
            @RequestParam(required = false) String diamondID,
            @RequestParam(required = false) String jewelryID,
            @RequestParam(required = false) Integer sizeJewelry,
            @RequestParam Integer quantity) {
        cartService.addItemToCart(accountID, diamondID, jewelryID, sizeJewelry, quantity);
        return ResponseEntity.ok(Collections.singletonMap("message", "Thêm vào giỏ hàng thành công"));
    }

    //cập nhật sản phẩm trong giỏ hàng
    @PutMapping(value = "/update/{cartID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> updateCartItem(
            @PathVariable Integer cartID,
            @RequestParam Integer accountID,
            @RequestParam(required = false) String diamondID,
            @RequestParam(required = false) String jewelryID,
            @RequestParam(required = false) Integer sizeJewelry,
            @RequestParam Integer quantity) {
        cartService.updateCartItem(cartID, accountID, diamondID, jewelryID, sizeJewelry, quantity);
        return ResponseEntity.ok(Collections.singletonMap("message", "Cập nhật giỏ hàng thành công"));
    }

    //xóa sản phẩm trong giỏ hàng
    @DeleteMapping(value = "/remove/{cartID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> removeCartItem(@PathVariable Integer cartID) {
        cartService.removeCartItem(cartID);
        return ResponseEntity.ok(Collections.singletonMap("message", "Xóa khỏi giỏ hàng thành công"));
    }

    //tạo giỏ hàng
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
