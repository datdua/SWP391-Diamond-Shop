package com.example.diamondstore.controller;

import java.util.Collections;
import java.util.Map;

import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.diamondstore.model.Certificate;
import com.example.diamondstore.request.putRequest.CertificatePutRequest;
import com.example.diamondstore.service.CertificateService;

@RestController
@RequestMapping("/api/certificates")
public class CertificateController {

    private final CertificateService certificateService;

    public CertificateController(CertificateService certificateService) {
        this.certificateService = certificateService;
    }

    @GetMapping
    public ResponseEntity<Iterable<Certificate>> getCertificates() {
        return ResponseEntity.ok(certificateService.getAllCertificates());
    }

    @GetMapping(value = "/{certificateID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getCertificate(@PathVariable String certificateID) {
        return certificateService.getCertificateById(certificateID);
    }

    @GetMapping("/paged")
    public ResponseEntity<Page<Certificate>> getAllDiamondsPaged(@RequestParam(defaultValue = "1") int page, @RequestParam(defaultValue = "10") int size) {
        return ResponseEntity.ok(certificateService.getAllCertificatesPaged(page, size));
    }

    @PostMapping(value = "/create", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> createCertificate(@RequestBody Certificate certificate) {
        return certificateService.createCertificate(certificate);
    }

    @PutMapping(value = "/update/{certificateID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> updateCertificate(@PathVariable String certificateID, @RequestBody CertificatePutRequest certificatePutRequest) {
        return certificateService.updateCertificate(certificateID, certificatePutRequest);
    }

    @DeleteMapping(value = "/delete/{certificateID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> deleteCertificate(@PathVariable String certificateID) {
        return certificateService.deleteCertificate(certificateID);
    }

    @GetMapping(value = "/get/certificateImg/{certificateID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getCertificateImg(@PathVariable String certificateID) {
        return certificateService.getCertificateImg(certificateID);
    }
}
