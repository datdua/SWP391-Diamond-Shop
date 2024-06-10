package com.example.diamondstore.specification;

import org.springframework.data.jpa.domain.Specification;

import com.example.diamondstore.model.Jewelry;

public class JewelrySpecification {

    public static Specification<Jewelry> hasName(String jewelryName) {
        return (root, query, cb) -> cb.equal(root.get("jewelryName"), jewelryName);
    }

    public static Specification<Jewelry> hasPrice(Float jewelryEntryPrice) {
        return (root, query, cb) -> cb.equal(root.get("jewelryEntryPrice"), jewelryEntryPrice);
    }

    public static Specification<Jewelry> hasGender(String gender) {
        return (root, query, cb) -> cb.equal(root.get("gender"), gender);
    }

    public static Specification<Jewelry> hasNameLike(String name) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.like(root.get("jewelryName"), "%" + name + "%");
    }


    public static Specification<Jewelry> hasPriceBetween(Float minjewelryEntryPrice, Float maxjewelryEntryPrice) {
        return (root, query, criteriaBuilder) -> {
            if (minjewelryEntryPrice != null && maxjewelryEntryPrice != null) {
                return criteriaBuilder.between(root.get("jewelryEntryPrice"), minjewelryEntryPrice, maxjewelryEntryPrice);
            } else if (minjewelryEntryPrice != null) {
                return criteriaBuilder.greaterThanOrEqualTo(root.get("jewelryEntryPrice"), maxjewelryEntryPrice);
            } else if (minjewelryEntryPrice != null) {
                return criteriaBuilder.lessThanOrEqualTo(root.get("jewelryEntryPrice"), maxjewelryEntryPrice);
            } else {
                return criteriaBuilder.conjunction();
            }
        };
    }
}
