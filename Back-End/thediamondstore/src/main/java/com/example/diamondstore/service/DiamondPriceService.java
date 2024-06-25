package com.example.diamondstore.service;

import java.math.BigDecimal;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.diamondstore.model.Diamond;
import com.example.diamondstore.model.DiamondPrice;
import com.example.diamondstore.repository.DiamondPriceRepository;
import com.example.diamondstore.repository.DiamondRepository;
import com.example.diamondstore.request.DiamondPriceRequest;

@Service
public class DiamondPriceService {

    @Autowired
    private final DiamondPriceRepository diamondPriceRepository;

    @Autowired
    private DiamondRepository diamondRepository;

    public DiamondPriceService(DiamondPriceRepository diamondPriceRepository) {
        this.diamondPriceRepository = diamondPriceRepository;
    }

    public List<DiamondPrice> getAll() {
        return diamondPriceRepository.findAll();
    }

    public ResponseEntity<Map<String, String>> updateDiamondPrice(Integer diamondPriceID, DiamondPriceRequest diamondPriceRequest) {
        DiamondPrice existingDiamondPrice = diamondPriceRepository.findById(diamondPriceID).orElse(null);
        if (existingDiamondPrice == null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Không tìm thấy DiamondPrice"));
        }

        existingDiamondPrice.setClarity(diamondPriceRequest.getClarity());
        existingDiamondPrice.setColor(diamondPriceRequest.getColor());
        existingDiamondPrice.setCarat_size(diamondPriceRequest.getCarat_size());
        existingDiamondPrice.setDiamondEntryPrice(diamondPriceRequest.getDiamondEntryPrice());

        diamondPriceRepository.save(existingDiamondPrice);

        Diamond diamond = diamondRepository.findById(diamondPriceRequest.getDiamondID()).orElse(null);
        if (diamond == null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Không tìm thấy Diamond với ID này"));
        }

        DiamondPrice diamondPriceWithDiamondID = diamondPriceRepository.findByDiamondID(diamondPriceRequest.getDiamondID());
        if (diamondPriceWithDiamondID != null && !diamondPriceWithDiamondID.getDiamondPriceID().equals(existingDiamondPrice.getDiamondPriceID())) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Kim cương này đã có giá"));
        }
        // Update the diamondEntryPrice and grossDiamondPrice
        diamond.setDiamondEntryPrice(diamondPriceRequest.getDiamondEntryPrice());
        // Assuming the grossDiamondPrice is calculated as some function of the diamondEntryPrice
        diamond.setGrossDiamondPrice(diamondPriceRequest.getDiamondEntryPrice().multiply(new BigDecimal("1.1")));

        // Save the updated Diamond
        diamondRepository.save(diamond);

        return ResponseEntity.ok(Collections.singletonMap("message", "Cập nhật thành công"));
    }

    public ResponseEntity<?> addDiamondPrice(DiamondPriceRequest diamondPriceRequest) {
        Diamond diamond = diamondRepository.findById(diamondPriceRequest.getDiamondID()).orElse(null);
        if (diamond == null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Không tìm thấy Diamond với ID này"));
        }

        DiamondPrice existingDiamondPrice = diamondPriceRepository.findByDiamondID(diamondPriceRequest.getDiamondID());
        if (existingDiamondPrice != null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Giá kim cương này đã tồn tại"));
        }

        DiamondPrice diamondPrice = new DiamondPrice();
        diamondPrice.setDiamondID(diamondPriceRequest.getDiamondID());
        diamondPrice.setClarity(diamondPriceRequest.getClarity());
        diamondPrice.setColor(diamondPriceRequest.getColor());
        diamondPrice.setCarat_size(diamondPriceRequest.getCarat_size());
        diamondPrice.setDiamondEntryPrice(diamondPriceRequest.getDiamondEntryPrice());

        diamondPriceRepository.save(diamondPrice);

        // Update the diamondEntryPrice and grossDiamondPrice
        diamond.setDiamondEntryPrice(diamondPriceRequest.getDiamondEntryPrice());
        // Assuming the grossDiamondPrice is calculated as some function of the diamondEntryPrice
        diamond.setGrossDiamondPrice(diamondPriceRequest.getDiamondEntryPrice().multiply(new BigDecimal("1.1")));

        // Save the updated Diamond
        diamondRepository.save(diamond);

        return ResponseEntity.ok(Collections.singletonMap("message", "Tạo thành công"));
        
    }
        
    public DiamondPrice getDiamondPriceById(Integer diamondPriceID) {
        return diamondPriceRepository.findById(diamondPriceID).orElseThrow(() -> new RuntimeException("DiamondPrice not found"));
    }

    public ResponseEntity<Map<String, String>> deleteDiamondPrices(@RequestBody List<Integer> diamondPriceIDs) {
        // Filter out non-existing diamondPrices
        List<Integer> existingDiamondPriceIDs = diamondPriceIDs.stream()
                .filter(diamondPriceID -> diamondPriceRepository.existsById(diamondPriceID))
                .collect(Collectors.toList());

        // Delete diamondPrices
        if (!existingDiamondPriceIDs.isEmpty()) {
            diamondPriceRepository.deleteAllById(existingDiamondPriceIDs);
            return ResponseEntity.ok().body(Collections.singletonMap("message", "Xóa các chứng chỉ thành công"));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Collections.singletonMap("message", "Không tìm thấy chứng chỉ để xóa"));
        }
    }

    public void updateDiamondPrice(DiamondPrice diamondPrice, Diamond diamond) {
        diamond.setDiamondEntryPrice(diamondPrice.getDiamondEntryPrice());
        // Assuming the grossDiamondPrice is calculated as some function of the diamondEntryPrice
        diamond.setGrossDiamondPrice(diamondPrice.getDiamondEntryPrice().multiply(new BigDecimal("1.1")));

        diamondRepository.save(diamond);
    }


    public List<DiamondPrice> getDiamondPricesByCaratSize(Float caratSize) {
        return diamondPriceRepository.findByCaratSize(caratSize);
    }
}