package com.example.diamondstore.controller;

import java.util.Collections;
import java.util.Map;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
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
import com.example.diamondstore.repository.CertificateRepository;
import com.example.diamondstore.request.putRequest.CertificatePutRequest;

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

    @GetMapping("/paged")
    public ResponseEntity<Page<Certificate>> getAllDiamondsPaged(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Certificate> pageCertificates = certificateRepository.findAll(pageable);
        return ResponseEntity.ok(pageCertificates);
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

    @PutMapping(value = "/update/{certificateID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> updateCertificate(@PathVariable String certificateID, @RequestBody CertificatePutRequest certificatePutRequest) {
        Certificate existingCertificate = certificateRepository.findByCertificateID(certificateID);
        if (existingCertificate == null) {
            return ResponseEntity.notFound().build();
        }
        existingCertificate.setDiamondID(certificatePutRequest.getDiamondID());
        existingCertificate.setExpirationDate(certificatePutRequest.getExpirationDate());
        existingCertificate.setcertificateImage(certificatePutRequest.getCertificateImage());
        certificateRepository.save(existingCertificate);
        return ResponseEntity.ok(Collections.singletonMap("message", "Cập nhật thành công"));
    }

    @DeleteMapping(value = "/delete/{certificateID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> deleteCertificate(@PathVariable String certificateID) {
        Certificate existingCertificate = certificateRepository.findByCertificateID(certificateID);
        if (existingCertificate == null) {
            return ResponseEntity.notFound().build();
        }
        certificateRepository.delete(existingCertificate);
        return ResponseEntity.ok(Collections.singletonMap("message", "Xóa thành công"));
    }

    @GetMapping(value = "/get/certificateImg/{certificateID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> getCertificateImg(@PathVariable String certificateID) {
        Certificate certificate = certificateRepository.findByCertificateID(certificateID);
        if (certificate == null) {
            return new ResponseEntity<>(Collections.singletonMap("message", "ID không tồn tại"), HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(Collections.singletonMap("certificateImage", certificate.getcertificateImage()));
    }
}
