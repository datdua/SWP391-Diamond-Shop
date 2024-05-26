package com.example.diamondstore.controller;

import java.util.Collections;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.model.Cart;
import com.example.diamondstore.repository.CartRepository;
import com.example.diamondstore.request.putRequest.CartPutRequest;

/**
 *
 * @author DELL
 */
@RestController
@RequestMapping("/api/cart")
public class CartController {
    
    private final CartRepository cartRepository;

    public CartController(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    @GetMapping
    public ResponseEntity<Iterable<Cart>> getCarts() {
        return ResponseEntity.ok(cartRepository.findAll());
    }

    @GetMapping("/{cartID}")
    public ResponseEntity<Cart> getCart(Integer cartID) {
        Cart cart = cartRepository.findByCartID(cartID);
        if (cart == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(cart);
    }

    @PutMapping(value = "/{cartID}/update", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> updateCart(@PathVariable Integer cartID, @RequestBody CartPutRequest cartPutRequest) {
        Cart existingCart = cartRepository.findByCartID(cartID);
        if (existingCart == null) {
            return ResponseEntity.notFound().build();
        }
        existingCart.setAccountID(cartPutRequest.getAccountID());
        existingCart.setDiamondID(cartPutRequest.getDiamondID());
        existingCart.setJewelryID(cartPutRequest.getJewelryID());
        existingCart.setQuantity(cartPutRequest.getQuantity());
        existingCart.setTotalPrice(cartPutRequest.getTotalPrice());
        cartRepository.save(existingCart);
        return ResponseEntity.ok(Collections.singletonMap("message", "Cập nhật thành công"));
    }

    @DeleteMapping(value = "/{cartID}/delete", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> deleteCart(@PathVariable Integer cartID) {
        Cart existingCart = cartRepository.findByCartID(cartID);
        if (existingCart == null) {
            return ResponseEntity.notFound().build();
        }
        cartRepository.delete(existingCart);
        return ResponseEntity.ok(Collections.singletonMap("message", "Xóa thành công"));
    }

    @PostMapping(value = "/create", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> createCart(@RequestBody Cart cart) {
        Cart existingCart = cartRepository.findByCartID(cart.getCartID());
        if (existingCart != null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Giỏ hàng đã tồn tại"));
        }
        cart.setCartID(null);  // Set cartID to null
        cartRepository.save(cart);
        return ResponseEntity.ok(Collections.singletonMap("message", "Tạo thành công"));
    }

}

