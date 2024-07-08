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
import com.example.diamondstore.specification.DiamondPriceSpecification;

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

    public List<DiamondPrice> findByCriteria(String clarity, String color, BigDecimal caratSize) {
        return diamondPriceRepository.findAll(DiamondPriceSpecification.filterBy(clarity, color, caratSize));
    }

    public ResponseEntity<Map<String, String>> updateDiamondPrice(Integer diamondPriceID, DiamondPriceRequest diamondPriceRequest) {
        DiamondPrice existingDiamondPrice = diamondPriceRepository.findById(diamondPriceID).orElse(null);
        if (existingDiamondPrice == null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Không tìm thấy DiamondPrice"));
        }

        existingDiamondPrice.setClarity(diamondPriceRequest.getClarity());
        existingDiamondPrice.setColor(diamondPriceRequest.getColor());
        existingDiamondPrice.setCaratSize(diamondPriceRequest.getCaratSize());

        // size (mm) = sqrt(weight) * 0.65
        // => weight = (size / 0.65) ^ 2
        BigDecimal weight = new BigDecimal(Math.pow(diamondPriceRequest.getCaratSize().doubleValue() / 0.65, 2));
        existingDiamondPrice.setWeight(weight);

        // find diamond has the same size, clarity, color
        List<Diamond> diamonds = diamondRepository.findAllByCaratSizeAndColorAndClarity(diamondPriceRequest.getCaratSize(), diamondPriceRequest.getClarity(), 
            diamondPriceRequest.getColor());
        // cập nhật giá diamondEntryPrice và grossDiamondPrice vào diamond
        for (Diamond diamond : diamonds) {
            diamond.setDiamondEntryPrice(diamondPriceRequest.getDiamondEntryPrice());
            diamond.setGrossDiamondPrice(diamondPriceRequest.getDiamondEntryPrice().multiply(new BigDecimal("1.1")));
            diamondRepository.save(diamond);
        }
        // trường hợp diamonds null thì bỏ qua
        diamondPriceRepository.save(existingDiamondPrice);

        return ResponseEntity.ok(Collections.singletonMap("message", "Cập nhật thành công"));
    }

    public ResponseEntity<?> addDiamondPrice(DiamondPriceRequest diamondPriceRequest) {
        DiamondPrice diamondPrice = new DiamondPrice();
        diamondPrice.setClarity(diamondPriceRequest.getClarity());
        diamondPrice.setColor(diamondPriceRequest.getColor());
        diamondPrice.setCaratSize(diamondPriceRequest.getCaratSize());
        diamondPrice.setDiamondEntryPrice(diamondPriceRequest.getDiamondEntryPrice());

        // size (mm) = sqrt(weight) * 6.5
        // => weight = (size / 6.5) ^ 2
        BigDecimal weight = new BigDecimal(Math.pow(diamondPriceRequest.getCaratSize().doubleValue() / 6.5, 2));
        diamondPrice.setWeight(weight);

        // find diamond has the same size, clarity, color
        List<Diamond> diamonds = diamondRepository.findAllByCaratSizeAndColorAndClarity(diamondPriceRequest.getCaratSize(), diamondPriceRequest.getClarity(), 
            diamondPriceRequest.getColor());
        // cập nhật giá diamondEntryPrice và grossDiamondPrice vào diamond
        for (Diamond diamond : diamonds) {
            diamond.setDiamondEntryPrice(diamondPriceRequest.getDiamondEntryPrice());
            diamond.setGrossDiamondPrice(diamondPriceRequest.getDiamondEntryPrice().multiply(new BigDecimal("1.1")));
            diamondRepository.save(diamond);
        }
        // trường hợp diamonds null thì bỏ qua
        diamondPriceRepository.save(diamondPrice);
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

    public List<DiamondPrice> getDiamondPricesByCaratSize(BigDecimal caratSize) {
        return diamondPriceRepository.findByCaratSize(caratSize);
    }
}
