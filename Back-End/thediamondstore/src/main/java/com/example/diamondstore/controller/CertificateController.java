package com.example.diamondstore.controller;

import java.util.Collections;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.model.Certificate;
import com.example.diamondstore.repository.CertificateRepository;

@RestController
@RequestMapping("/api/certificates")
public class CertificateController {

    private final CertificateRepository certificateRepository;

    public CertificateController(CertificateRepository certificateRepository) {
        this.certificateRepository = certificateRepository;
    }

    @GetMapping
    public ResponseEntity<Iterable<Certificate>> getCertificates() {
        return ResponseEntity.ok(certificateRepository.findAll());
    }

    @GetMapping(value = "/{certificateID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getCertificate(@PathVariable String certificateID) {
        Certificate certificate = certificateRepository.findByCertificateID(certificateID);
        if (certificate == null) {
            return new ResponseEntity<>(Collections.singletonMap("message", "ID không tồn tại"), HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(certificate);
    }

    @PostMapping(value = "/create", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> createCertificate(@RequestBody Certificate certificate) {
        Certificate existingCertificate = certificateRepository.findByCertificateID(certificate.getCertificateID());
        if (existingCertificate != null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Chứng chỉ đã tồn tại"));
        }
        certificateRepository.save(certificate);
        return ResponseEntity.ok(Collections.singletonMap("message", "Tạo thành công"));
    }

    @PutMapping(value = "/{certificateID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> updateCertificate(@PathVariable String certificateID, @RequestBody Certificate certificate) {
        Certificate existingCertificate = certificateRepository.findByCertificateID(certificateID);
        if (existingCertificate == null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Không tìm thấy chứng chỉ"));
        }
        certificate.setCertificateID(certificateID);
        return ResponseEntity.ok(Collections.singletonMap("message", "Cập nhật thành công"));
    }

    @DeleteMapping(value = "/{certificateID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> deleteCertificate(@PathVariable String certificateID) {
        Certificate existingCertificate = certificateRepository.findByCertificateID(certificateID);
        if (existingCertificate == null) {
            return ResponseEntity.notFound().build();
        }
        certificateRepository.delete(existingCertificate);
        return ResponseEntity.ok(Collections.singletonMap("message", "Xóa thành công"));
    }
}
