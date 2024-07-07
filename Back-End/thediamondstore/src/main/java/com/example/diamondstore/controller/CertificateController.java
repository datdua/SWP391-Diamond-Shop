package com.example.diamondstore.controller;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.data.domain.Page;
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

    // admin
    @GetMapping("/admin")
    public ResponseEntity<Iterable<Certificate>> getCertificates_Admin() {
        return ResponseEntity.ok(certificateService.getAllCertificates());
    }

    //admin
    @GetMapping("/manager/{certificateID}")
    public ResponseEntity<?> getCertificate_Admin(@PathVariable String certificateID) {
        return certificateService.getCertificateById(certificateID);
    }

    // customer
    @GetMapping("/customer/{certificateID}")
    public ResponseEntity<?> getCertificate_Customer(@PathVariable String certificateID) {
        return certificateService.getCertificateById(certificateID);
    }

    // admin
    @GetMapping("/admin/paged")
    public ResponseEntity<Page<Certificate>> getAllCertificatePaged_Admin(@RequestParam(defaultValue = "1") int page, @RequestParam(defaultValue = "10") int size) {
        return ResponseEntity.ok(certificateService.getAllCertificatesPaged(page, size));
    }

    // admin
    @PostMapping(value = "/manager/create", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> createCertificate_Admin(@RequestBody Certificate certificate) {
        return certificateService.createCertificate(certificate);
    }

    // admin
    @PutMapping(value = "/manager/update/{certificateID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> updateCertificate_Admin(@PathVariable String certificateID, @RequestBody CertificatePutRequest certificatePutRequest) {
        return certificateService.updateCertificate(certificateID, certificatePutRequest);
    }

    // admin
    @DeleteMapping(value = "/manager/delete", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> deleteCertificates_Admin(@RequestBody List<String> certificateIDs) {
    try {
        certificateService.deleteCertificates(certificateIDs);
        return ResponseEntity.ok(Collections.singletonMap("message", "Xóa các giấy chứng chỉ thành công"));
    } catch (RuntimeException e) {
        return ResponseEntity.badRequest().body(Collections.singletonMap("message", e.getMessage()));
    }
    }

    // admin 
    @GetMapping(value = "/admin/get/certificateImg/{certificateID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getCertificateImg_Admin(@PathVariable String certificateID) {
        return certificateService.getCertificateImg(certificateID);
    }

    // manager
    @GetMapping(value = "/manager/get/certificateImg/{certificateID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getCertificateImg_Manager(@PathVariable String certificateID) {
        return certificateService.getCertificateImg(certificateID);
    }

    // customer
    @GetMapping(value = "/customer/get/certificateImg/{certificateID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getCertificateImg_Customer(@PathVariable String certificateID) {
        return certificateService.getCertificateImg(certificateID);
    }

    // admin
    @PostMapping("/manager/update-statuses")
    public ResponseEntity<Map<String, String>> updateCertificateStatusesAuto_Manager() {
        certificateService.updateCertificateStatusesAuto();
        return ResponseEntity.ok(Collections.singletonMap("message", "Trạng thái chứng chỉ đã được cập nhật"));
    }
}
