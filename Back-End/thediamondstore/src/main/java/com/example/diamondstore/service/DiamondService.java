package com.example.diamondstore.service;

import java.math.BigDecimal;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.diamondstore.model.Diamond;
import com.example.diamondstore.repository.DiamondRepository;
import com.example.diamondstore.request.putRequest.DiamondPutRequest;
import com.example.diamondstore.specification.DiamondSpecification;

@Service
public class DiamondService {

    @Autowired
    private DiamondRepository diamondRepository;

    public List<Diamond> getAllDiamonds() {
        return diamondRepository.findAll();
    }

    public Diamond getDiamondById(String diamondID) {
        return diamondRepository.findByDiamondID(diamondID);
    }

    public ResponseEntity<Map<String, String>> createDiamond(Diamond diamond) {
        Diamond existingDiamond = diamondRepository.findByDiamondID(diamond.getDiamondID());
        if (existingDiamond != null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Kim cương đã tồn tại"));
        }

        //nếu grossdiamondprice = null, thì gán nó bằng 0
        if (diamond.getGrossDiamondPrice() == null) {
            diamond.setGrossDiamondPrice(new BigDecimal(0));
        }

        //calculate gross diamond price = diamond price * 1.1
        BigDecimal grossDiamondPrice = diamond.getDiamondEntryPrice().multiply(new BigDecimal(1.1));
        diamond.setGrossDiamondPrice(grossDiamondPrice);

        diamondRepository.save(diamond);
        return ResponseEntity.ok(Collections.singletonMap("message", "Tạo thành công"));
    }

    public Map<String, String> updateDiamond(String diamondID, DiamondPutRequest diamondPutRequest) {
    Diamond existingDiamond = diamondRepository.findByDiamondID(diamondID);
    if (existingDiamond == null) {
        return Collections.singletonMap("message", "Không tìm thấy kim cương");
    }

    existingDiamond.setWarrantyID(diamondPutRequest.getWarrantyID());
    existingDiamond.setCertificationID(diamondPutRequest.getCertificationID());
    existingDiamond.setDiamondName(diamondPutRequest.getDiamondName());
    existingDiamond.setDiamondEntryPrice(diamondPutRequest.getDiamondEntryPrice());
    existingDiamond.setDiamondImage(diamondPutRequest.getDiamondImage());
    existingDiamond.setOrigin(diamondPutRequest.getOrigin());
    existingDiamond.setCut(diamondPutRequest.getCut());
    existingDiamond.setShape(diamondPutRequest.getShape());
    existingDiamond.setColor(diamondPutRequest.getColor());
    existingDiamond.setCaratSize(diamondPutRequest.getCaratSize());
    existingDiamond.setCarat_weight(diamondPutRequest.getCarat_weight());
    existingDiamond.setClarity(diamondPutRequest.getClarity());

    // Cập nhật grossDiamondPrice nếu diamondEntryPrice thay đổi
    if (diamondPutRequest.getDiamondEntryPrice() != null) {
        BigDecimal newDiamondEntryPrice = diamondPutRequest.getDiamondEntryPrice();
        BigDecimal newGrossDiamondPrice = newDiamondEntryPrice.multiply(new BigDecimal(1.1));
        existingDiamond.setGrossDiamondPrice(newGrossDiamondPrice);
    }

    diamondRepository.save(existingDiamond);
    return Collections.singletonMap("message", "Cập nhật thành công");
}


    public ResponseEntity<Map<String, String>> deleteDiamonds(@RequestBody List<String> diamondIDs) {
        // Filter out non-existing diamonds
        List<String> existingDiamondIDs = diamondIDs.stream()
                .filter(diamondID -> diamondRepository.existsById(diamondID))
                .collect(Collectors.toList());

        // Delete diamonds
        if (!existingDiamondIDs.isEmpty()) {
            diamondRepository.deleteAllById(existingDiamondIDs);
            return ResponseEntity.ok().body(Collections.singletonMap("message", "Xóa các chứng chỉ thành công"));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Collections.singletonMap("message", "Không tìm thấy chứng chỉ để xóa"));
        }
    }

    public Page<Diamond> getAllDiamondsPaged(int page, int size) {
        Pageable pageable = PageRequest.of(page - 1, size);
        return diamondRepository.findAll(pageable);
    }

    public List<Diamond> searchDiamondsWithFilters(
            Float mindiamondEntryPrice,
            Float maxdiamondEntryPrice,
            String origin,
            String cut,
            String shape,
            String color,
            Float minCaratSize,
            Float maxCaratSize,
            Float minCaratWeight,
            Float maxCaratWeight,
            String clarity,
            String diamondNameLike) {

        Specification<Diamond> spec = Specification.where(null);

        if (mindiamondEntryPrice != null) {
            spec = spec.and(DiamondSpecification.hasMinDiamondEntryPrice(mindiamondEntryPrice));
        }
        if (maxdiamondEntryPrice != null) {
            spec = spec.and(DiamondSpecification.hasMaxDiamondEntryPrice(maxdiamondEntryPrice));
        }
        if (origin != null) {
            spec = spec.and(DiamondSpecification.hasOrigin(origin));
        }
        if (cut != null) {
            spec = spec.and(DiamondSpecification.hasCut(cut));
        }
        if (shape != null) {
            spec = spec.and(DiamondSpecification.hasShape(shape));
        }
        if (color != null) {
            spec = spec.and(DiamondSpecification.hasColor(color));
        }
        if (clarity != null) {
            spec = spec.and(DiamondSpecification.hasClarity(clarity));
        }
        if (minCaratSize != null) {
            spec = spec.and(DiamondSpecification.hasMinCaratSize(minCaratSize));
        }
        if (maxCaratSize != null) {
            spec = spec.and(DiamondSpecification.hasMaxCaratSize(maxCaratSize));
        }
        if (minCaratWeight != null) {
            spec = spec.and(DiamondSpecification.hasMinCaratWeight(minCaratWeight));
        }
        if (maxCaratWeight != null) {
            spec = spec.and(DiamondSpecification.hasMaxCaratWeight(maxCaratWeight));
        }
        if (diamondNameLike != null) {
            return diamondRepository.findByDiamondNameLike("%" + diamondNameLike + "%");
        }

        return diamondRepository.findAll(spec);
    }

    public Page<Diamond> searchDiamondsWithFiltersPaged(
            Float minDiamondEntryPrice,
            Float maxDiamondEntryPrice,
            String origin,
            String cut,
            String shape,
            String color,
            Float minCaratSize,
            Float maxCaratSize,
            Float minCaratWeight,
            Float maxCaratWeight,
            String clarity,
            String diamondName,
            int page,
            int size) {

        Specification<Diamond> spec = Specification.where(null);

        if (minDiamondEntryPrice != null) {
            spec = spec.and(DiamondSpecification.hasMinDiamondEntryPrice(minDiamondEntryPrice));
        }
        if (maxDiamondEntryPrice != null) {
            spec = spec.and(DiamondSpecification.hasMaxDiamondEntryPrice(maxDiamondEntryPrice));
        }
        if (origin != null) {
            spec = spec.and(DiamondSpecification.hasOrigin(origin));
        }
        if (cut != null) {
            spec = spec.and(DiamondSpecification.hasCut(cut));
        }
        if (shape != null) {
            spec = spec.and(DiamondSpecification.hasShape(shape));
        }
        if (color != null) {
            spec = spec.and(DiamondSpecification.hasColor(color));
        }
        if (clarity != null) {
            spec = spec.and(DiamondSpecification.hasClarity(clarity));
        }
        if (minCaratSize != null) {
            spec = spec.and(DiamondSpecification.hasMinCaratSize(minCaratSize));
        }
        if (maxCaratSize != null) {
            spec = spec.and(DiamondSpecification.hasMaxCaratSize(maxCaratSize));
        }
        if (minCaratWeight != null) {
            spec = spec.and(DiamondSpecification.hasMinCaratWeight(minCaratWeight));
        }
        if (maxCaratWeight != null) {
            spec = spec.and(DiamondSpecification.hasMaxCaratWeight(maxCaratWeight));
        }
        if (diamondName != null) {
            spec = spec.and(DiamondSpecification.hasDiamondNameIgnoreCase(diamondName));
        }

        Pageable pageable = PageRequest.of(page -1, size);
        return diamondRepository.findAll(spec, pageable);
    }

    
}
