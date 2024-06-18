package com.example.diamondstore.service;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.diamondstore.model.DiamondPrice;
import com.example.diamondstore.repository.DiamondPriceRepository;
import com.example.diamondstore.request.putRequest.DiamondPricePutRequest;

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

    public ResponseEntity<Map<String, String>> update(Integer diamondpriceID, DiamondPricePutRequest diamondPricePutRequest) {
        DiamondPrice existingDiamondPrice = diamondPriceRepository.findById(diamondpriceID).orElse(null);
        if (existingDiamondPrice == null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Không tìm thấy giá kim cương"));
        }

        existingDiamondPrice.setDiamondID(diamondPricePutRequest.getDiamondID());
        existingDiamondPrice.setClarity(diamondPricePutRequest.getClarity());
        existingDiamondPrice.setColor(diamondPricePutRequest.getColor());
        existingDiamondPrice.setCarat_size(diamondPricePutRequest.getCarat_size());
        existingDiamondPrice.setDiamondEntryPrice(diamondPricePutRequest.getDiamondEntryPrice());

        diamondPriceRepository.save(existingDiamondPrice);
        return ResponseEntity.ok(Collections.singletonMap("message", "Cập nhật thành công"));
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