package com.example.diamondstore.service;

import java.math.BigDecimal;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.diamondstore.model.GoldPrice;
import com.example.diamondstore.model.Jewelry;
import com.example.diamondstore.repository.GoldPriceRepository;
import com.example.diamondstore.repository.JewelryRepository;
import com.example.diamondstore.request.GoldPriceRequest;

@Service
public class GoldPriceService {
    
    @Autowired
    private final GoldPriceRepository goldPriceRepository;

    @Autowired
    private final JewelryRepository jewelryRepository;

    public GoldPriceService(GoldPriceRepository goldPriceRepository, JewelryRepository jewelryRepository) {
        this.goldPriceRepository = goldPriceRepository;
        this.jewelryRepository = jewelryRepository;
    }

    public List<GoldPrice> getAll() {
        return goldPriceRepository.findAll();
    }

    public GoldPrice getGoldPriceById(Integer goldPriceID) {
        return goldPriceRepository.findById(goldPriceID).orElse(null);
    }

    public ResponseEntity<?> deleteGoldPrice(Integer goldPriceID) {
        GoldPrice existingGoldPrice = goldPriceRepository.findById(goldPriceID).orElse(null);
        if (existingGoldPrice == null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Không tìm thấy giá vàng"));
        }
        goldPriceRepository.deleteById(goldPriceID);
        return ResponseEntity.ok(Collections.singletonMap("message", "Xóa thành công"));
    }

    public ResponseEntity<?> addGoldPrice(GoldPriceRequest goldPriceRequest) {
        Jewelry jewelry = jewelryRepository.findById(goldPriceRequest.getJewelryID()).orElse(null);
        if (jewelry == null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Không tìm thấy trang sức với ID này"));
        }

        GoldPrice existingGoldPrice = goldPriceRepository.findByJewelryID(goldPriceRequest.getJewelryID());
        if (existingGoldPrice != null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Giá vàng cho trang sức này đã tồn tại"));
        }
        GoldPrice goldPrice = new GoldPrice();
        goldPrice.setGoldPrice(goldPriceRequest.getGoldPrice());
        goldPrice.setJewelryID(goldPriceRequest.getJewelryID());
        goldPrice.setGoldAge(goldPriceRequest.getGoldAge());
        
        goldPriceRepository.save(goldPrice);

        updateJewelryPrices(goldPrice, jewelry);

        return ResponseEntity.ok(Collections.singletonMap("message", "Tạo thành công"));
    }

    public ResponseEntity<?> updateGoldPrice(Integer goldPriceID, GoldPriceRequest goldPriceRequest) {
        GoldPrice existingGoldPrice = goldPriceRepository.findById(goldPriceID).orElse(null);
        if (existingGoldPrice == null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Không tìm thấy giá vàng"));
        }

        GoldPrice goldPriceWithNewJewelryID = goldPriceRepository.findByJewelryID(goldPriceRequest.getJewelryID());
        if (goldPriceWithNewJewelryID != null && !goldPriceWithNewJewelryID.getGoldpriceID().equals(goldPriceID)) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Giá vàng này đã tồn tại"));
        }
        existingGoldPrice.setGoldPrice(goldPriceRequest.getGoldPrice());
        existingGoldPrice.setGoldAge(goldPriceRequest.getGoldAge());
        existingGoldPrice.setJewelryID(goldPriceRequest.getJewelryID());
        
        goldPriceRepository.save(existingGoldPrice);

        Jewelry jewelry = jewelryRepository.findById(goldPriceRequest.getJewelryID()).orElse(null);
        if (jewelry != null) {
            updateJewelryPrices(existingGoldPrice, jewelry);
        }

        return ResponseEntity.ok(Collections.singletonMap("message", "Cập nhật thành công"));
    }

    private void updateJewelryPrices(GoldPrice goldPrice, Jewelry jewelry) {
        jewelry.setJewelryEntryPrice(goldPrice.getGoldPrice());

        // Assume grossJewelryPrice is calculated based on some logic involving goldPrice
        BigDecimal grossJewelryPrice = goldPrice.getGoldPrice().multiply(new BigDecimal("1.2")); // Example logic
        jewelry.setGrossJewelryPrice(grossJewelryPrice);

        jewelryRepository.save(jewelry);
    }
}
