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

    // guest
    @GetMapping("/guest/getAll")
    public List<DiamondPrice> getAll_Guest() {
        return diamondPriceService.getAll();
    }

    // admin
    @GetMapping("/admin/getAll")
    public List<DiamondPrice> getAll_Admin() {
        return diamondPriceService.getAll();
    }

    // customer
    @GetMapping("/customer/getAll")
    public List<DiamondPrice> getAll_Customer() {
        return diamondPriceService.getAll();
    }

    // admin
    @PostMapping(value = "/admin/create")
    public ResponseEntity<?> addDiamondPrice_Admin(@RequestBody DiamondPriceRequest diamondPriceRequest) {
        return diamondPriceService.addDiamondPrice(diamondPriceRequest);
    }

    // admin
    @PutMapping("/admin/{diamondPriceID}")
    public ResponseEntity<Map<String, String>> updateDiamondPrice_Admin(@PathVariable Integer diamondPriceID, @RequestBody DiamondPriceRequest diamondPriceRequest) {
        return diamondPriceService.updateDiamondPrice(diamondPriceID, diamondPriceRequest);
    }

    // admin
    @DeleteMapping(value = "/admin/delete", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> deleteDiamondPrices_Admin(@RequestBody List<Integer> diamondPriceIDs) {
    try {
        diamondPriceService.deleteDiamondPrices(diamondPriceIDs);
        return ResponseEntity.ok(Collections.singletonMap("message", "Xóa các tài khoản thành công"));
    } catch (RuntimeException e) {
        return ResponseEntity.badRequest().body(Collections.singletonMap("message", e.getMessage()));
    }
    }

    // guest
    @GetMapping("/guest/{diamondPriceID}")
    public DiamondPrice getDiamondPriceById_Guest(@PathVariable Integer diamondPriceID) {
        return diamondPriceService.getDiamondPriceById(diamondPriceID);
    }

    // admin
    @GetMapping("/admin/{diamondPriceID}")
    public DiamondPrice getDiamondPriceById_Admin(@PathVariable Integer diamondPriceID) {
        return diamondPriceService.getDiamondPriceById(diamondPriceID);
    }

    // customer
    @GetMapping("/customer/{diamondPriceID}")
    public DiamondPrice getDiamondPriceById_Customer(@PathVariable Integer diamondPriceID) {
        return diamondPriceService.getDiamondPriceById(diamondPriceID);
    }

    // guest
    @GetMapping("/carat/{caratSize}")
    public List<DiamondPrice> getDiamondPriceByCaratSize(@PathVariable BigDecimal caratSize) {
        return diamondPriceService.getDiamondPricesByCaratSize(caratSize);
    }

    // admin
    @GetMapping("/admin/carat/{caratSize}")
    public List<DiamondPrice> getDiamondPriceByCaratSize_Admin(@PathVariable BigDecimal caratSize) {
        return diamondPriceService.getDiamondPricesByCaratSize(caratSize);
    }

    // customer
    @GetMapping("/customer/carat/{caratSize}")
    public List<DiamondPrice> getDiamondPriceByCaratSize_Customer(@PathVariable BigDecimal caratSize) {
        return diamondPriceService.getDiamondPricesByCaratSize(caratSize);
    }
}
