package com.example.diamondstore.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.diamondstore.model.Cart;
import com.example.diamondstore.model.Diamond;
import com.example.diamondstore.model.Jewelry;
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

    public List<Cart> getCartItems(Integer accountID) {
        return cartRepository.findByAccountID(accountID);
    }

    public void addItemToCart(Integer accountID, String diamondID, String jewelryID, Integer quantity) {
        Cart cart = new Cart();
        cart.setAccountID(accountID);
        cart.setDiamondID(diamondID);
        cart.setJewelryID(jewelryID);
        cart.setQuantity(quantity);
        calculateAndSetTotalPrice(cart);
        cartRepository.save(cart);
    }

    public void updateCartItem(Integer cartID, Integer accountID, String diamondID, String jewelryID, Integer quantity) {
        Cart cartItem = cartRepository.findById(cartID).orElse(null);
        if (cartItem != null) {
            cartItem.setAccountID(accountID);
            cartItem.setDiamondID(diamondID);
            cartItem.setJewelryID(jewelryID);
            cartItem.setQuantity(quantity);
            calculateAndSetTotalPrice(cartItem);
            cartRepository.save(cartItem);
        }
    }

    public void removeCartItem(Integer cartID) {
        cartRepository.deleteById(cartID);
    }

    private void calculateAndSetTotalPrice(Cart cart) {
        float totalPrice = 0;
        if (cart.getDiamondID() != null) {
            Diamond diamond = diamondRepository.findById(cart.getDiamondID()).orElse(null);
            if (diamond != null) {
                totalPrice += diamond.getDiamondPrice();
            }
        }
        if (cart.getJewelryID() != null) {
            Jewelry jewelry = jewelryRepository.findById(cart.getJewelryID()).orElse(null);
            if (jewelry != null) {
                totalPrice += jewelry.getJewelryPrice();
            }
        }
        totalPrice *= cart.getQuantity(); // Multiply by quantity
        cart.setTotalPrice(totalPrice);
    }

    public Cart getCartByCartID(Integer cartID) {
        return cartRepository.findById(cartID).orElse(null);
    }

    public void saveCart(Cart cart) {
        calculateAndSetTotalPrice(cart);
        cartRepository.save(cart);
    }
}
