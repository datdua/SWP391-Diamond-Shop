// CertificateRepository.java
package com.example.diamondstore.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.diamondstore.model.Certificate;

public interface CertificateRepository extends CrudRepository<Certificate, Integer> {
    Certificate findByCertificateID(Integer certificateID);
}