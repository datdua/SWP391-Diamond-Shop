package com.example.diamondstore.service;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

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

    @PostConstruct
    public void updateWarrantyStatusesOnStartup() {
        updateWarrantyStatusesAuto();
    }

    @Scheduled(cron = "0 0 * * * *") // Chạy mỗi giờ
    public void updateWarrantyStatusesAuto() {
        List<Warranty> warrantys = warrantyRepository.findAll();
        LocalDateTime now = LocalDateTime.now();

        for (Warranty warranty : warrantys) {
            if (warranty.getExpirationDate().isBefore(now)) {
                warranty.setWarrantyStatus("Hết Hạn");
            } else {
                warranty.setWarrantyStatus("Còn Hạn");
            }
            warrantyRepository.save(warranty);
        }
    }

     private void updateWarrantyStatus(Warranty warranty) {
        LocalDateTime now = LocalDateTime.now();
        if (warranty.getExpirationDate().isBefore(now)) {
            warranty.setWarrantyStatus("Hết Hạn");
        } else {
            warranty.setWarrantyStatus("Còn Hạn");
        }
    }

    public ResponseEntity<Map<String, String>> createWarranty(Warranty warranty) {
        Warranty existingWarranty = warrantyRepository.findByWarrantyID(warranty.getWarrantyID());
        if (existingWarranty != null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Giấy bảo hành đã tồn tại"));
        }
        updateWarrantyStatus(warranty); // Cập nhật trạng thái trước khi lưu
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
        updateWarrantyStatus(existingWarranty);
        warrantyRepository.save(existingWarranty);
        return ResponseEntity.ok(Collections.singletonMap("message", "Giấy bảo hành đã được cập nhật thành công"));
    }

    public ResponseEntity<Map<String, String>> deleteWarranty(@RequestBody List<String> warrantyIDs) {
        // Filter out non-existing diamonds
        List<String> existingWarrantyIDs = warrantyIDs.stream()
                .filter(warrantyID -> warrantyRepository.existsById(warrantyID))
                .collect(Collectors.toList());

        // Delete diamonds
        if (!existingWarrantyIDs.isEmpty()) {
            warrantyRepository.deleteAllById(existingWarrantyIDs);
            return ResponseEntity.ok().body(Collections.singletonMap("message", "Xóa các giá vàng thành công"));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Collections.singletonMap("message", "Không tìm thấy giá vàng để xóa"));
        }
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