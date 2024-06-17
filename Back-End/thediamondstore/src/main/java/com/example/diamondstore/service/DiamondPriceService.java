package com.example.diamondstore.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import com.example.diamondstore.model.Diamond;
import com.example.diamondstore.model.DiamondPrice;
import com.example.diamondstore.repository.DiamondPriceRepository;

@Service
public class DiamondPriceService {

    @Autowired
    private final DiamondPriceRepository diamondPriceRepository;

    public DiamondPriceService(DiamondPriceRepository diamondPriceRepository) {
        this.diamondPriceRepository = diamondPriceRepository;
    }

    public List<DiamondPrice> getAll() {
        return diamondPriceRepository.findAll();
    }

    public DiamondPrice update(Integer diamondpriceID, BigDecimal diamondEntryPrice, String color, Float carat_size, String clarity) {
        DiamondPrice diamondPrice = diamondPriceRepository.findById(diamondpriceID).orElseThrow(() -> new RuntimeException("DiamondPrice not found"));
        diamondPrice.setDiamondEntryPrice(diamondEntryPrice);
        diamondPrice.setColor(color);
        diamondPrice.setCarat_size(carat_size);
        diamondPrice.setClarity(clarity);
        return diamondPriceRepository.save(diamondPrice);
    }

    public ResponseEntity<Map<String, String>> createDiamondPrice(DiamondPrice diamondPrice) {
        DiamondPrice existingDiamondPrice = diamondPriceRepository.findByDiamondID(diamondPrice.getDiamondID());
        if (existingDiamondPrice != null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Giá kim cương đã tồn tại"));
        }

        diamondPriceRepository.save(diamondPrice);
        return ResponseEntity.ok(Collections.singletonMap("message", "Tạo thành công"));
    }
        
    public DiamondPrice getDiamondPriceById(Integer diamondpriceID) {
        return diamondPriceRepository.findById(diamondpriceID).orElseThrow(() -> new RuntimeException("DiamondPrice not found"));
    }

    public void deleteDiamondPrice(Integer diamondpriceID) {
        diamondPriceRepository.deleteById(diamondpriceID);
    }
}