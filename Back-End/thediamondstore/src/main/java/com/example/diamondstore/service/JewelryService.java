package com.example.diamondstore.service;

import java.math.BigDecimal;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.example.diamondstore.model.Jewelry;
import com.example.diamondstore.repository.JewelryRepository;
import com.example.diamondstore.request.putRequest.JewelryPutRequest;
import com.example.diamondstore.specification.JewelrySpecification;

@Service
public class JewelryService {

    private final JewelryRepository jewelryRepository;

    public JewelryService(JewelryRepository jewelryRepository) {
        this.jewelryRepository = jewelryRepository;
    }

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

    public Map<String, String> createJewelry(Jewelry jewelry) {
        Jewelry existingJewelry = jewelryRepository.findByJewelryID(jewelry.getJewelryID());
        if (existingJewelry != null) {
            return Collections.singletonMap("message", "Trang sức đã tồn tại");
        }

        //nếu grossJewelryPrice = null, thì gán nó bằng 0
        if(jewelry.getGrossJewelryPrice() == null) {
            jewelry.setGrossJewelryPrice(new BigDecimal(0));
        }
        
        //calculate gross jewelry price = jewelry price * 1.1
        BigDecimal grossJewelryPrice = jewelry.getJewelryPrice().multiply(new BigDecimal(1.1));
        jewelry.setGrossJewelryPrice(grossJewelryPrice);
        
        jewelryRepository.save(jewelry);
        return Collections.singletonMap("message", "Tạo thành công");
    }

    public Map<String, String> updateJewelry(String jewelryID, JewelryPutRequest jewelryPutRequest) {
        Jewelry existingJewelry = jewelryRepository.findByJewelryID(jewelryID);
        if (existingJewelry == null) {
            return Collections.singletonMap("message", "Trang sức không tồn tại");
        }
        existingJewelry.setJewelryName(jewelryPutRequest.getJewelryName());
        existingJewelry.setGender(jewelryPutRequest.getGender());
        existingJewelry.setjewelryImage(jewelryPutRequest.getJewelryImage());
        existingJewelry.setJewelryPrice(jewelryPutRequest.getJewelryPrice());
        jewelryRepository.save(existingJewelry);
        return Collections.singletonMap("message", "Cập nhật thành công");
    }

    public String deleteJewelry(String jewelryID) {
        Jewelry existingJewelry = jewelryRepository.findByJewelryID(jewelryID);
        if (existingJewelry == null) {
            return "Trang sức không tồn tại";
        }
        jewelryRepository.delete(existingJewelry);
        return "Xóa thành công";
    }

    public List<Jewelry> searchJewelry(String jewelryName, Float minjewelryPrice, Float maxjewelryPrice, String gender) {
        Specification<Jewelry> spec = Specification.where(null);

        if (jewelryName != null) {
            spec = spec.and(JewelrySpecification.hasNameLike(jewelryName));
        }
        if (minjewelryPrice != null || maxjewelryPrice != null) {
            spec = spec.and(JewelrySpecification.hasPriceBetween(minjewelryPrice, maxjewelryPrice));
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
}