package com.example.diamondstore.service;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.diamondstore.model.Warranty;
import com.example.diamondstore.repository.WarrantyRepository;
import com.example.diamondstore.request.putRequest.WarrantyPutRequest;

@Service
public class WarrantyService {

    @Autowired
    private final WarrantyRepository warrantyRepository;

    public WarrantyService(WarrantyRepository warrantyRepository) {
        this.warrantyRepository = warrantyRepository;
    }

    public List<Warranty> getAllWarranties() {
        return warrantyRepository.findAll();
    }

    public Warranty getWarrantyById(String warrantyID) {
        return warrantyRepository.findByWarrantyID(warrantyID);
    }

    public Page<Warranty> getAllWarrantiesPaged(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return warrantyRepository.findAll(pageable);
    }

    public ResponseEntity<Map<String, String>> createWarranty(Warranty warranty) {
        Warranty existingWarranty = warrantyRepository.findByWarrantyID(warranty.getWarrantyID());
        if (existingWarranty != null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Giấy bảo hành đã tồn tại"));
        }
        warrantyRepository.save(warranty);
        return ResponseEntity.ok(Collections.singletonMap("message", "Giấy bảo hành đã được tạo thành công"));
    }

    public ResponseEntity<Map<String, String>> updateWarranty(String warrantyID, WarrantyPutRequest warrantyPutRequest) {
        Warranty existingWarranty = warrantyRepository.findByWarrantyID(warrantyID);
        if (existingWarranty == null) {
            return ResponseEntity.notFound().build();
        }
        existingWarranty.setDiamondID(warrantyPutRequest.getDiamondID());
        existingWarranty.setExpirationDate(warrantyPutRequest.getExpirationDate());
        existingWarranty.setwarrantyImage(warrantyPutRequest.getWarrantyImage());
        warrantyRepository.save(existingWarranty);
        return ResponseEntity.ok(Collections.singletonMap("message", "Giấy bảo hành đã được cập nhật thành công"));
    }

    public ResponseEntity<Map<String, String>> deleteWarranty(String warrantyID) {
        Warranty existingWarranty = warrantyRepository.findByWarrantyID(warrantyID);
        if (existingWarranty == null) {
            return ResponseEntity.notFound().build();
        }
        warrantyRepository.delete(existingWarranty);
        return ResponseEntity.ok(Collections.singletonMap("message", "Giấy bảo hành đã được xóa thành công"));
    }

    public ResponseEntity<Map<String, String>> getWarrantyImg(String warrantyID) {
        Warranty warranty = warrantyRepository.findByWarrantyID(warrantyID);
        if (warranty == null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "ID không tồn tại"));
        }
        return ResponseEntity.ok(Collections.singletonMap("warrantyImage", warranty.getwarrantyImage()));
    }

    public List<Warranty> getWarrantiesByDiamondIDIsNull() {
        return warrantyRepository.findByDiamondIDIsNull();
    }

    public List<Warranty> getWarrantiesByJewelryIDIsNull() {
        return warrantyRepository.findByJewelryIDIsNull();
    }

}