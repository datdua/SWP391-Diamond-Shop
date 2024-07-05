package com.example.diamondstore.controller;

import java.math.BigDecimal;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.model.DiamondPrice;
import com.example.diamondstore.request.DiamondPriceRequest;
import com.example.diamondstore.service.DiamondPriceService;

@RestController
@RequestMapping("/api/diamondprices")
public class DiamondPriceController {

    @Autowired
    private final DiamondPriceService diamondPriceService;

    public DiamondPriceController(DiamondPriceService diamondPriceService) {
        this.diamondPriceService = diamondPriceService;
    }

    @GetMapping("/getAll")
    public List<DiamondPrice> getAll() {
        return diamondPriceService.getAll();
    }

    @PostMapping(value = "/create")
    public ResponseEntity<?> addDiamondPrice(@RequestBody DiamondPriceRequest diamondPriceRequest) {
        return diamondPriceService.addDiamondPrice(diamondPriceRequest);
    }

    @PutMapping("/{diamondPriceID}")
    public ResponseEntity<Map<String, String>> updateDiamondPrice(@PathVariable Integer diamondPriceID, @RequestBody DiamondPriceRequest diamondPriceRequest) {
        return diamondPriceService.updateDiamondPrice(diamondPriceID, diamondPriceRequest);
    }

    @DeleteMapping(value = "/delete", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> deleteDiamondPrices(@RequestBody List<Integer> diamondPriceIDs) {
    try {
        diamondPriceService.deleteDiamondPrices(diamondPriceIDs);
        return ResponseEntity.ok(Collections.singletonMap("message", "Xóa các tài khoản thành công"));
    } catch (RuntimeException e) {
        return ResponseEntity.badRequest().body(Collections.singletonMap("message", e.getMessage()));
    }
    }

    @GetMapping("/{diamondPriceID}")
    public DiamondPrice getDiamondPriceById(@PathVariable Integer diamondPriceID) {
        return diamondPriceService.getDiamondPriceById(diamondPriceID);
    }

    @GetMapping("/carat/{caratSize}")
    public List<DiamondPrice> getDiamondPriceByCaratSize(@PathVariable BigDecimal caratSize) {
        return diamondPriceService.getDiamondPricesByCaratSize(caratSize);
    }

    @GetMapping("/diamondPrices")
    public List<DiamondPrice> getDiamondPrices(@RequestParam(required = false) String clarity,
                                               @RequestParam(required = false) String color,
                                               @RequestParam(required = false) BigDecimal caratSize) {
        return diamondPriceService.findByCriteria(clarity, color, caratSize);
    }
}
