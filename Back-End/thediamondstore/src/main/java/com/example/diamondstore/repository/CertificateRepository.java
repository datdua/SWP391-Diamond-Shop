// CertificateRepository.java
package com.example.diamondstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.diamondstore.model.Certificate;

@Repository
public interface CertificateRepository extends JpaRepository<Certificate, String> {

    Certificate findByCertificateID(String certificateID);
}
