package com.example.diamondstore.specification;

import org.springframework.data.jpa.domain.Specification;

import com.example.diamondstore.model.Jewelry;

public class JewelrySpecification {
    
    public static Specification<Jewelry> hasName(String jewelryName) {
        return (root, query, cb) -> cb.equal(root.get("jewelryName"), jewelryName);
    }

    public static Specification<Jewelry> hasPrice(float jewelryPrice) {
        return (root, query, cb) -> cb.equal(root.get("jewelryPrice"), jewelryPrice);
    }

    public static Specification<Jewelry> hasGender(String gender) {
        return (root, query, cb) -> cb.equal(root.get("gender"), gender);
    }
}
