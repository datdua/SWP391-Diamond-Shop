package com.example.diamondstore.specification;

import org.springframework.data.jpa.domain.Specification;

import com.example.diamondstore.model.Jewelry;

public class JewelrySpecification {

    public static Specification<Jewelry> hasName(String jewelryName) {
        return (root, query, cb) -> cb.equal(root.get("jewelryName"), jewelryName);
    }

    public static Specification<Jewelry> hasPrice(Float jewelryPrice) {
        return (root, query, cb) -> cb.equal(root.get("jewelryPrice"), jewelryPrice);
    }

    public static Specification<Jewelry> hasGender(String gender) {
        return (root, query, cb) -> cb.equal(root.get("gender"), gender);
    }

    public static Specification<Jewelry> hasNameLike(String name) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.like(root.get("jewelryName"), "%" + name + "%");
    }

    public static Specification<Jewelry> hasPriceBetween(Float minjewelryPrice, Float maxjewelryPrice) {
        return (root, query, criteriaBuilder) -> {
            if (minjewelryPrice != null && maxjewelryPrice != null) {
                return criteriaBuilder.between(root.get("jewelryPrice"), minjewelryPrice, maxjewelryPrice);
            } else if (minjewelryPrice != null) {
                return criteriaBuilder.greaterThanOrEqualTo(root.get("jewelryPrice"), maxjewelryPrice);
            } else if (minjewelryPrice != null) {
                return criteriaBuilder.lessThanOrEqualTo(root.get("jewelryPrice"), maxjewelryPrice);
            } else {
                return criteriaBuilder.conjunction();
            }
        };
    }
}
