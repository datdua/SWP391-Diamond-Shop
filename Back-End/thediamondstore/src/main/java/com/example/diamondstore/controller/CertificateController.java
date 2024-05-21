package com.example.diamondstore.controller;

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

    @GetMapping("/{certificateID}")
    public ResponseEntity<Certificate> getCertificate(@PathVariable String certificateID) {
        Certificate certificate = certificateRepository.findByCertificateID(certificateID);
        if (certificate == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(certificate);
    }

    @PostMapping("/create")
    public ResponseEntity<Certificate> createCertificate(@RequestBody Certificate certificate) {
        Certificate existingCertificate = certificateRepository.findByCertificateID(certificate.getCertificateID());
        if (existingCertificate != null) {
            return ResponseEntity.badRequest().build();
        }
        certificateRepository.save(certificate);
        return ResponseEntity.ok(certificate);
    }

    @PutMapping("/{certificateID}")
    public ResponseEntity<Certificate> updateCertificate(@PathVariable String certificateID, @RequestBody Certificate certificate) {
        Certificate existingCertificate = certificateRepository.findByCertificateID(certificateID);
        if (existingCertificate == null) {
            return ResponseEntity.notFound().build();
        }
        certificate.setCertificateID(certificateID);
        return ResponseEntity.ok(certificateRepository.save(certificate));
    }

    @DeleteMapping("/{certificateID}")
    public ResponseEntity<String> deleteCertificate(@PathVariable String certificateID) {
        Certificate existingCertificate = certificateRepository.findByCertificateID(certificateID);
        if (existingCertificate == null) {
            return ResponseEntity.notFound().build();
        }
        certificateRepository.delete(existingCertificate);
        return ResponseEntity.ok("Certificate deleted successfully");
    }
}