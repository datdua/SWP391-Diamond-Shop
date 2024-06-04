package com.example.diamondstore.service;

import java.math.BigDecimal;
import java.util.List;

import javax.transaction.Transactional;

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
        return cartRepository.findByAccountIDAndOrderIsNull(accountID);
    }

    //thêm sản phẩm vào giỏ hàng
    @Transactional
    public void addItemToCart(Integer accountID, String diamondID, String jewelryID, Integer sizeJewelry, Integer quantity) {
        Cart cart = new Cart();
        cart.setAccountID(accountID);
        cart.setDiamondID(diamondID);
        cart.setJewelryID(jewelryID);
        cart.setQuantity(quantity);

        // lấy diamondName và diamondImage thông qua diamondID
        if (diamondID != null) {
            Diamond diamond = diamondRepository.findById(diamondID).orElse(null);
            if (diamond != null) {
                cart.setDiamondName(diamond.getDiamondName());
                cart.setDiamondImage(diamond.getDiamondImage());
            }
        }

        // lấy jewelryName và jewelryImage thông qua jewelryID
        if (jewelryID != null) {
            Jewelry jewelry = jewelryRepository.findById(jewelryID).orElse(null);
            if (jewelry != null) {
                cart.setJewelryName(jewelry.getJewelryName());
                cart.setJewelryImage(jewelry.getjewelryImage());
            }
        }

        // Fetch the jewelry item to get the size
        if (jewelryID != null) {
            Jewelry jewelry = jewelryRepository.findById(jewelryID).orElse(null);
            if (jewelry != null) {
                cart.setSizeJewelry(sizeJewelry);
            }
        }

        calculateAndSetTotalPrice(cart);
        cartRepository.save(cart);
    }

    //cập nhật sản phẩm trong giỏ hàng
    @Transactional
    public void updateCartItem(Integer cartID, Integer accountID, String diamondID, String jewelryID, Integer sizeJewelry, Integer quantity) {
        Cart cartItem = cartRepository.findById(cartID).orElse(null);
        if (cartItem != null) {
            cartItem.setAccountID(accountID);
            cartItem.setDiamondID(diamondID);
            cartItem.setJewelryID(jewelryID);
            cartItem.setQuantity(quantity);
            cartItem.setSizeJewelry(sizeJewelry);
            calculateAndSetTotalPrice(cartItem);
            cartRepository.save(cartItem);
        } else {
            throw new IllegalArgumentException("Không tìm thấy sản phẩm trong giỏ hàng.");
        }
    }

    @Transactional
    public void removeCartItem(Integer cartID) {
        cartRepository.deleteById(cartID);
    }

    //tính tổng giá tiền
    private void calculateAndSetTotalPrice(Cart cart) {
        BigDecimal totalPrice = BigDecimal.ZERO;
        BigDecimal totalCart = BigDecimal.ZERO;
        BigDecimal diamondPrice = BigDecimal.ZERO;
        BigDecimal jewelryPrice = BigDecimal.ZERO;
        BigDecimal price = BigDecimal.ZERO;

        if (cart.getDiamondID() != null) {
            Diamond diamond = diamondRepository.findById(cart.getDiamondID()).orElse(null);
            if (diamond != null) {
                diamondPrice = diamondPrice.add(diamond.getDiamondPrice());
            }
        }

        if (cart.getJewelryID() != null) {
            Jewelry jewelry = jewelryRepository.findById(cart.getJewelryID()).orElse(null);
            if (jewelry != null) {
                jewelryPrice = jewelryPrice.add(jewelry.getJewelryPrice());
            }
        }

        //totalPrice = totalPrice.multiply(BigDecimal.valueOf(cart.getQuantity())); // Multiply by quantity
        // tính totalPrice bằng tổng diamondPrice và jewelryPrice
        // tính price bằng tổng diamondPrice và jewelryPrice
        price = price.add(diamondPrice).add(jewelryPrice);
        totalPrice = price.multiply(BigDecimal.valueOf(cart.getQuantity()));

        // totalCart bằng tổng tất cả totalPrice có trong Cart
        cart.setTotalPrice(totalPrice);
        cart.setPrice(price);
    }

    public Cart getCartByCartID(Integer cartID) {
        return cartRepository.findById(cartID).orElse(null);
    }

    @Transactional
    public void saveCart(Cart cart) {
        calculateAndSetTotalPrice(cart);
        cartRepository.save(cart);
    }

    // Lấy totalCart từ CartService và trả về api
    public BigDecimal getTotalCart(Integer accountID) {
        List<Cart> cartItems = cartRepository.findByAccountIDAndOrderIsNull(accountID);
        BigDecimal totalCart = BigDecimal.ZERO;
        for (Cart cart : cartItems) {
            totalCart = totalCart.add(cart.getTotalPrice());
        }
        return totalCart;

    }
}
