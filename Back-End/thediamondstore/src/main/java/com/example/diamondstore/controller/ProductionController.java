package com.example.diamondstore.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.model.Diamond;
import com.example.diamondstore.model.Jewelry;
import com.example.diamondstore.repository.DiamondRepository;
import com.example.diamondstore.repository.JewelryRepository;

@RestController
@RequestMapping("/api/production")
public class ProductionController {

    private final DiamondRepository diamondRepository;
    private final JewelryRepository jewelryRepository;

    @Autowired
    public ProductionController(DiamondRepository diamondRepository, JewelryRepository jewelryRepository) {
        this.diamondRepository = diamondRepository;
        this.jewelryRepository = jewelryRepository;
    }

    @GetMapping("/all")
    public Map<String, Object> getAllProduction() {
        List<Diamond> diamonds = diamondRepository.findAll();
        List<Jewelry> jewelry = jewelryRepository.findAll();
        
        Map<String, Object> response = new HashMap<>();
        response.put("diamonds", diamonds);
        response.put("jewelry", jewelry);

        return response;
    }

    @GetMapping("/paged")
    public Map<String, Object> getPagedProduction(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page - 1, size);
        Page<Diamond> diamondPage = diamondRepository.findAll(pageable);
        Page<Jewelry> jewelryPage = jewelryRepository.findAll(pageable);
        
        Map<String, Object> response = new HashMap<>();
        response.put("diamonds", diamondPage.getContent());
        response.put("diamondsTotalPages", diamondPage.getTotalPages());
        response.put("diamondsTotalElements", diamondPage.getTotalElements());
        response.put("jewelry", jewelryPage.getContent());
        response.put("jewelryTotalPages", jewelryPage.getTotalPages());
        response.put("jewelryTotalElements", jewelryPage.getTotalElements());

        return response;
    }
}
