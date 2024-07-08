package com.example.diamondstore.service;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.diamondstore.model.Diamond;
import com.example.diamondstore.model.Jewelry;
import com.example.diamondstore.model.Warranty;
import com.example.diamondstore.repository.DiamondRepository;
import com.example.diamondstore.repository.JewelryRepository;
import com.example.diamondstore.repository.WarrantyRepository;
import com.example.diamondstore.request.putRequest.WarrantyPutRequest;

@Service
public class WarrantyService {

    @Autowired
    private WarrantyRepository warrantyRepository;

    @Autowired
    private DiamondRepository diamondRepository;

    @Autowired
    private JewelryRepository jewelryRepository;

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
        // validate warrantyID
        if (!validateWarrantyID(warranty.getWarrantyID())) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Mã bảo hành không hợp lệ"));
        }

        // Thay thế chuỗi rỗng bằng null ngay từ đầu
        if (warranty.getDiamondID() != null && warranty.getDiamondID().isEmpty()) {
            warranty.setDiamondID(null);
        }
        if (warranty.getJewelryID() != null && warranty.getJewelryID().isEmpty()) {
            warranty.setJewelryID(null);
        }

        Warranty existingWarranty = warrantyRepository.findByWarrantyID(warranty.getWarrantyID());
        if (existingWarranty != null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Giấy bảo hành đã tồn tại"));
        }

        // Kiểm tra xem ít nhất một trong hai cột ID có giá trị không null
        if (warranty.getDiamondID() == null && warranty.getJewelryID() == null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Cần cung cấp ít nhất một ID cho kim cương hoặc trang sức"));
        }

        // Đảm bảo rằng chỉ một trong hai cột ID có giá trị
        if (warranty.getDiamondID() != null && warranty.getJewelryID() != null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Chỉ có thể có một trong hai ID cho kim cương hoặc trang sức"));
        }

    updateWarrantyStatus(warranty); // Cập nhật trạng thái trước khi lưu
    warrantyRepository.save(warranty);

    Diamond diamond = diamondRepository.findByDiamondID(warranty.getDiamondID());
    Jewelry jewelry = jewelryRepository.findByJewelryID(warranty.getJewelryID());

    if (diamond != null) {
        diamond.setWarrantyID(warranty.getWarrantyID());
        diamondRepository.save(diamond);
    } else if (jewelry != null) {
        jewelry.setWarrantyID(warranty.getWarrantyID());
        jewelryRepository.save(jewelry);
    } else {
        return ResponseEntity.badRequest().body(Collections.singletonMap("message", "ID không tồn tại"));
    }

    return ResponseEntity.ok(Collections.singletonMap("message", "Giấy bảo hành đã được tạo thành công"));
    }

    public ResponseEntity<Map<String, String>> updateWarranty(String warrantyID, WarrantyPutRequest warrantyPutRequest) {
        // validate warrantyID
        if (!validateWarrantyID(warrantyID)) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Mã giấy bảo hành không hợp lệ"));
        }

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

    @Transactional
    public ResponseEntity<Map<String, String>> deleteWarranty(@RequestBody List<String> warrantyIDs) {
        // check if warrantyIDs is empty
        if (warrantyIDs.isEmpty()) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Không có mã giấy bảo hành để xóa"));
        }

        // validate
        for (String warrantyID : warrantyIDs) {
            if (!validateWarrantyID(warrantyID)) {
                return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Mã giấy bảo hành không hợp lệ"));
            }
        }

        // Filter out non-existing warranties
        List<String> existingWarrantyIDs = warrantyIDs.stream()
                .filter(warrantyID -> warrantyRepository.existsById(warrantyID))
                .collect(Collectors.toList());

        // If no existing warranties are found
        if (existingWarrantyIDs.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Collections.singletonMap("message", "Không tìm thấy giá vàng để xóa"));
        }

        // Find and update diamonds and jewelry associated with the warranties
        List<Diamond> diamondsToUpdate = diamondRepository.findAllByWarrantyIDIn(existingWarrantyIDs);
        for (Diamond diamond : diamondsToUpdate) {
            diamond.setWarrantyID(null);
        }
        diamondRepository.saveAll(diamondsToUpdate);

        List<Jewelry> jewelryToUpdate = jewelryRepository.findAllByWarrantyIDIn(existingWarrantyIDs);
        for (Jewelry jewelry : jewelryToUpdate) {
            jewelry.setWarrantyID(null);
        }
        jewelryRepository.saveAll(jewelryToUpdate);

        // Delete warranties
        warrantyRepository.deleteAllById(existingWarrantyIDs);

        return ResponseEntity.ok().body(Collections.singletonMap("message", "Xóa các giá vàng thành công"));
    }

    public ResponseEntity<Map<String, String>> getWarrantyImg(String warrantyID) {
        // validate warrantyID
        if (!validateWarrantyID(warrantyID)) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Mã bảo hành không hợp lệ"));
        }

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

    // validate warrantyID
    public boolean validateWarrantyID(String warrantyID) {
        // warrantyID has prefix "WID"
        if (!warrantyID.startsWith("WID-")) {
            return false;
        }
        return true;
    }
}
