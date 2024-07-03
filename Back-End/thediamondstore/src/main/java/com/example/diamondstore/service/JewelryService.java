package com.example.diamondstore.service;

import java.math.BigDecimal;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.diamondstore.model.Jewelry;
import com.example.diamondstore.repository.GoldPriceRepository;
import com.example.diamondstore.repository.JewelryRepository;
import com.example.diamondstore.repository.WarrantyRepository;
import com.example.diamondstore.request.putRequest.JewelryPutRequest;
import com.example.diamondstore.specification.JewelrySpecification;


@Service
public class JewelryService {

    @Autowired
    private  JewelryRepository jewelryRepository;

    @Autowired
    private  WarrantyRepository warrantyRepository;

    @Autowired
    private GoldPriceRepository goldPriceRepository;

    public List<Jewelry> getAllJewelry() {
        return jewelryRepository.findAll();
    }

    public Jewelry getJewelryById(String jewelryID) {
        return jewelryRepository.findByJewelryID(jewelryID);
    }

    public Page<Jewelry> getAllJewelryPaged(int page, int size) {
        Pageable pageable = PageRequest.of(page - 1, size);
        return jewelryRepository.findAll(pageable);
    }

    public ResponseEntity<Map<String, String>> createJewelry(Jewelry jewelry) {
        Jewelry existingJewelry = jewelryRepository.findByJewelryID(jewelry.getJewelryID());
        if (existingJewelry != null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Trang sức đã tồn tại"));
        }

        //nếu grossJewelryPrice = null, thì gán nó bằng 0
        if(jewelry.getGrossJewelryPrice() == null) {
            jewelry.setGrossJewelryPrice(new BigDecimal(0));
        }

        if (jewelry.getWarrantyID() != null && jewelryRepository.existsByWarrantyID(jewelry.getWarrantyID())) {
        return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Bảo hành đã được gán cho một trang sức khác"));
        }
        
        //calculate gross jewelry price = jewelry price * 1.1
        BigDecimal grossJewelryPrice = jewelry.getJewelryEntryPrice().multiply(new BigDecimal(1.1));
        jewelry.setGrossJewelryPrice(grossJewelryPrice);
        
        jewelryRepository.save(jewelry);
        return ResponseEntity.ok().body(Collections.singletonMap("message", "Tạo trang sức thành công"));
    }

    public Map<String, String> updateJewelry(String jewelryID, JewelryPutRequest jewelryPutRequest) {
        Jewelry existingJewelry = jewelryRepository.findByJewelryID(jewelryID);
        if (existingJewelry == null) {
            return Collections.singletonMap("message", "Trang sức không tồn tại");
        }
        existingJewelry.setJewelryName(jewelryPutRequest.getJewelryName());
        existingJewelry.setGender(jewelryPutRequest.getGender());
        existingJewelry.setjewelryImage(jewelryPutRequest.getJewelryImage());
        existingJewelry.setJewelryEntryPrice(jewelryPutRequest.getJewelryEntryPrice());

        // Cập nhật grossJewelryPrice nếu jewelryEntryPrice thay đổi
        if (jewelryPutRequest.getJewelryEntryPrice() != null) {
            BigDecimal grossJewelryPrice = jewelryPutRequest.getJewelryEntryPrice().multiply(new BigDecimal(1.1));
            existingJewelry.setGrossJewelryPrice(grossJewelryPrice);
        }
        jewelryRepository.save(existingJewelry);
        return Collections.singletonMap("message", "Cập nhật thành công");
    }


    @Transactional
    public ResponseEntity<Map<String, String>> deleteJewelry(@RequestBody List<String> jewelryIDs) {
        // Filter out non-existing diamonds
        List<String> existingJewelryIDs = jewelryIDs.stream()
                .filter(jewelryID -> jewelryRepository.existsById(jewelryID))
                .collect(Collectors.toList());

        // Delete diamonds
        if (!existingJewelryIDs.isEmpty()) {
            existingJewelryIDs.forEach(jewelryID -> warrantyRepository.deleteByJewelryID(jewelryID));
            existingJewelryIDs.forEach(jewelryID -> goldPriceRepository.deleteByJewelryID(jewelryID));

            jewelryRepository.deleteAllById(existingJewelryIDs);
            return ResponseEntity.ok().body(Collections.singletonMap("message", "Xóa các giá vàng thành công"));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Collections.singletonMap("message", "Không tìm thấy giá vàng để xóa"));
        }
    }

    public List<Jewelry> searchJewelry(String jewelryName, Float minjewelryEntryPrice, Float maxjewelryEntryPrice, String gender) {
        Specification<Jewelry> spec = Specification.where(null);

        if (jewelryName != null) {
            spec = spec.and(JewelrySpecification.hasNameLike(jewelryName));
        }
        if (minjewelryEntryPrice != null ) {
            spec = spec.and(JewelrySpecification.hasMinJewelryEntryPrice(minjewelryEntryPrice));
        }
        if (maxjewelryEntryPrice != null) {
            spec = spec.and(JewelrySpecification.hasMaxJewelryEntryPrice(maxjewelryEntryPrice));
        }
        if (gender != null) {
            spec = spec.and(JewelrySpecification.hasGender(gender));
        }

        return jewelryRepository.findAll(spec);
    }

    public List<Jewelry> searchJewelryByName(String name) {
        Specification<Jewelry> spec = JewelrySpecification.hasNameLike(name);
        return jewelryRepository.findAll(spec);
    }

    public Page<Jewelry> searchJewelryWithFilters(
            String jewelryName,
            Float minjewelryEntryPrice,
            Float maxjewelryEntryPrice,
            String gender,
            int page,
            int size) {

        Specification<Jewelry> spec = Specification.where(null);

        if (jewelryName != null) {
            spec = spec.and(JewelrySpecification.hasJewelryNameIgnoreCase(jewelryName));
        }
        if (minjewelryEntryPrice != null ) {
            spec = spec.and(JewelrySpecification.hasMinJewelryEntryPrice(minjewelryEntryPrice));
        }
        if (maxjewelryEntryPrice != null) {
            spec = spec.and(JewelrySpecification.hasMaxJewelryEntryPrice(maxjewelryEntryPrice));
        }
        if (gender != null) {
            spec = spec.and(JewelrySpecification.hasGender(gender));
        }

        Pageable pageable = PageRequest.of(page - 1, size);
        return jewelryRepository.findAll(spec, pageable);
    }

    // // tính tổng số nhẫn nam
    // public int countMaleJewelry() {
    //     return jewelryRepository.countMaleJewelry();
    // }

    // // tính tổng số nhẫn nữ 
    // public int countFemaleJewelry() {
    //     return jewelryRepository.countFemaleJewelry();
    // }
}
