package com.example.diamondstore.controller;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.model.Diamond;
import com.example.diamondstore.repository.DiamondRepository;

import io.swagger.v3.oas.annotations.parameters.RequestBody;




@RestController
@RequestMapping("/diamond")
public class DiamondController {
    @Autowired
    private DiamondRepository diamondRepository;

    //get all diamonds
    @GetMapping("/diamonds")
    public List<Diamond> getAllDiamonds(){
        return diamondRepository.findAll();
    }

    //create a new diamond
    @PostMapping("/create")
    public ResponseEntity<String> diamondRequet(@RequestBody Diamond diamondRequet) {
        int diamondID = diamondRequet.getDiamondID();
        int warrantityID = diamondRequet.getWarrantityID();
        int certificationID = diamondRequet.getCertificationID();
        String description = diamondRequet.getDescription();
        BigDecimal price = diamondRequet.getPrice();
        String origin = diamondRequet.getOrigin();
        String color = diamondRequet.getColor();
        String cut = diamondRequet.getCut();
        BigDecimal caratWeight = diamondRequet.getCaratWeight();
        String clarity = diamondRequet.getClarity();
        String image = diamondRequet.getImage();

        Diamond diamond = new Diamond(null, warrantityID, certificationID, description, price, origin, color, cut, caratWeight, clarity, image);
        diamondRepository.save(diamond);

        return ResponseEntity.ok("Diamond created successfully");
    }
    

    //delete a diamond
    @DeleteMapping("/delete/{id}")
    public String deleteDiamond(@RequestParam int id){
        diamondRepository.deleteById(id);
        return "Diamond deleted successfully!";
    }

    //update a diamond
    @PostMapping("/update/{id}")
    public Diamond updateDiamond(@RequestParam int id, @RequestParam int diamondID, @RequestParam int warrantityID, @RequestParam int certificationID, @RequestParam String description, @RequestParam BigDecimal price, @RequestParam String origin, @RequestParam String color, @RequestParam String cut, @RequestParam BigDecimal caratWeight, @RequestParam String clarity, @RequestParam String image){
        Diamond diamond = diamondRepository.findById(id).orElse(null);
        diamond.setDiamondID(diamondID);
        diamond.setWarrantityID(warrantityID);
        diamond.setCertificationID(certificationID);
        diamond.setDescription(description);
        diamond.setPrice(price);
        diamond.setOrigin(origin);
        diamond.setColor(color);
        diamond.setCut(cut);
        diamond.setCaratWeight(caratWeight);
        diamond.setClarity(clarity);
        diamond.setImage(image);
        return diamondRepository.save(diamond);
    }
}
