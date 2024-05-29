// CertificateRepository.java
package com.example.diamondstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.diamondstore.model.Certificate;

public interface CertificateRepository extends JpaRepository<Certificate, String> {

    Certificate findByCertificateID(String certificateID);
}
