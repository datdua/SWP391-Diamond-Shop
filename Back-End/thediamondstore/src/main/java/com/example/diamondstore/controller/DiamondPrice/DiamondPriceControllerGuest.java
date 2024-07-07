package com.example.diamondstore.controller.DiamondPrice;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.model.DiamondPrice;
import com.example.diamondstore.service.DiamondPriceService;

@RestController
@RequestMapping("/api/diamondprices/guest")
public class DiamondPriceControllerGuest {

    @Autowired
    private final DiamondPriceService diamondPriceService;

    public DiamondPriceControllerGuest(DiamondPriceService diamondPriceService) {
        this.diamondPriceService = diamondPriceService;
    }

    @GetMapping("/getAll")
    public List<DiamondPrice> getAll_Guest() {
        return diamondPriceService.getAll();
    }

    @GetMapping("/{diamondPriceID}")
    public DiamondPrice getDiamondPriceById_Guest(@PathVariable Integer diamondPriceID) {
        return diamondPriceService.getDiamondPriceById(diamondPriceID);
    }

    @GetMapping("/carat/{caratSize}")
    public List<DiamondPrice> getDiamondPriceByCaratSize(@PathVariable BigDecimal caratSize) {
        return diamondPriceService.getDiamondPricesByCaratSize(caratSize);
    }

    @GetMapping("/diamondPrices")
    public List<DiamondPrice> getDiamondPrices(@RequestParam(required = false) String clarity,
            @RequestParam(required = false) String color,
            @RequestParam(required = false) BigDecimal caratSize) {
        return diamondPriceService.findByCriteria(clarity, color, caratSize);
    }

    @GetMapping("/prices/{caratSize}")
    public Map<String, Map<String, BigDecimal>> getDiamondPrices(@PathVariable BigDecimal caratSize) {
        List<DiamondPrice> diamondPrices = diamondPriceService.getDiamondPricesByCaratSize(caratSize);

        // Transform the data to match the required format
        return diamondPrices.stream()
                .collect(Collectors.groupingBy(
                        DiamondPrice::getColor,
                        Collectors.groupingBy(
                                DiamondPrice::getClarity,
                                Collectors.collectingAndThen(
                                        Collectors.toList(),
                                        list -> list.get(0).getDiamondEntryPrice()
                                )
                        )
                ));
    }
}
