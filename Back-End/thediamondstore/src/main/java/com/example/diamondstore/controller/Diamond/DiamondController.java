package com.example.diamondstore.controller.Diamond;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.model.Diamond;
import com.example.diamondstore.request.putRequest.DiamondPutRequest;
import com.example.diamondstore.service.DiamondService;

@RestController
@RequestMapping("/api/diamonds")
public class DiamondController {
    
    private final DiamondService diamondService;

    public DiamondController(DiamondService diamondService) {
        this.diamondService = diamondService;
    }

    @GetMapping("/get-all")
    public ResponseEntity<List<Diamond>> getDiamonds_Admin() {
        return ResponseEntity.ok(diamondService.getAllDiamonds());
    }
    
}
