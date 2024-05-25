package com.example.diamondstore.specification;

import org.springframework.data.jpa.domain.Specification;

import com.example.diamondstore.model.Diamond;

public class DiamondSpecification {
    public static Specification<Diamond> hasOrigin(String origin) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("origin"), origin);
    }

    public static Specification<Diamond> hasCut(String cut) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("cut"), cut);
    }

    public static Specification<Diamond> hasColor(String color) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("color"), color);
    }

    public static Specification<Diamond> hasShape(String shape) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("shape"), shape);
    }

    public static Specification<Diamond> hasMinCaratSize(Float minCaratSize) {
        return (root, query, builder) -> builder.greaterThanOrEqualTo(root.get("carat_size"), minCaratSize);
    }

    public static Specification<Diamond> hasMaxCaratSize(Float maxCaratSize) {
        return (root, query, builder) -> builder.lessThanOrEqualTo(root.get("carat_size"), maxCaratSize);
    }
    
    public static Specification<Diamond> hasMinCaratWeight(Float minCaratWeight) {
        return (root, query, builder) -> builder.greaterThanOrEqualTo(root.get("carat_weight"), minCaratWeight);
    }

    public static Specification<Diamond> hasMaxCaratWeight(Float maxCaratWeight) {
        return (root, query, builder) -> builder.lessThanOrEqualTo(root.get("carat_weight"), maxCaratWeight);
    }

    public static Specification<Diamond> hasMinDiamondPrice(Float minDiamondPrice) {
        return (root, query, builder) -> builder.greaterThanOrEqualTo(root.get("diamondPrice"), minDiamondPrice);
    }

    public static Specification<Diamond> hasMaxDiamondPrice(Float maxDiamondPrice) {
        return (root, query, builder) -> builder.lessThanOrEqualTo(root.get("diamondPrice"), maxDiamondPrice);
    }

    public static Specification<Diamond> hasClarity(String clarity) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("clarity"), clarity);
    }
}