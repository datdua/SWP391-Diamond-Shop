package com.example.diamondstore.service;

import java.util.Collections;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.diamondstore.model.Certificate;
import com.example.diamondstore.repository.CertificateRepository;
import com.example.diamondstore.request.putRequest.CertificatePutRequest;

@Service
public class CertificateService {

    private final CertificateRepository certificateRepository;

    @Autowired
    public CertificateService(CertificateRepository certificateRepository) {
        this.certificateRepository = certificateRepository;
    }

    public Iterable<Certificate> getAllCertificates() {
        return certificateRepository.findAll();
    }

    public ResponseEntity<?> getCertificateById(String certificateID) {
        Certificate certificate = certificateRepository.findByCertificateID(certificateID);
        if (certificate == null) {
            return new ResponseEntity<>(Collections.singletonMap("message", "ID không tồn tại"), HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(certificate);
    }

    public Page<Certificate> getAllCertificatesPaged(int page, int size) {
        Pageable pageable = PageRequest.of(page -1, size);
        return certificateRepository.findAll(pageable);
    }

    public ResponseEntity<Map<String, String>> createCertificate(Certificate certificate) {
        Certificate existingCertificate = certificateRepository.findByCertificateID(certificate.getCertificateID());
        if (existingCertificate != null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Chứng chỉ đã tồn tại"));
        }
        certificateRepository.save(certificate);
        return ResponseEntity.ok(Collections.singletonMap("message", "Tạo thành công"));
    }

    public ResponseEntity<Map<String, String>> updateCertificate(String certificateID, CertificatePutRequest certificatePutRequest) {
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

    public ResponseEntity<Map<String, String>> deleteCertificate(String certificateID) {
        Certificate existingCertificate = certificateRepository.findByCertificateID(certificateID);
        if (existingCertificate == null) {
            return ResponseEntity.notFound().build();
        }
        certificateRepository.delete(existingCertificate);
        return ResponseEntity.ok(Collections.singletonMap("message", "Xóa thành công"));
    }

    public ResponseEntity<?> getCertificateImg(String certificateID) {
        Certificate certificate = certificateRepository.findByCertificateID(certificateID);
        if (certificate == null) {
            return new ResponseEntity<>(Collections.singletonMap("message", "ID không tồn tại"), HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(Collections.singletonMap("certificateImage", certificate.getcertificateImage()));
    }
}
