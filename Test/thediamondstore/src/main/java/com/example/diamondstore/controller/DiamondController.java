package com.example.diamondstore.controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.model.Diamond;
import com.example.diamondstore.service.DiamondService;



@RestController
public class DiamondController {
    
    private final DiamondService diamondService;

    public DiamondController(DiamondService diamondService) {
        super();
        this.diamondService = diamondService;
    }

    //handle method to handle list diamond and return mode and view
    @GetMapping("/diamonds")
    public String listDiamonds(Model model) {
        model.addAttribute("diamonds", diamondService.getAllDiamonds());
        return "diamonds";
    }

    //create a new diamond
    @GetMapping("/diamonds/create")
    public String createDiamond(Model model) {
        Diamond diamond = new Diamond();
        model.addAttribute("diamond", diamond);
        return "create_diamond";
    }
    
    //save diamond
    @PostMapping("/diamonds")
    public String saveDiamond(@ModelAttribute("diamond") Diamond diamond) {
        diamondService.saveDiamond(diamond);
        return "redirect:/diamonds";
    }

    //edit diamond
    @GetMapping("/diamonds/edit/{id}")
    public String editDiamond(@PathVariable Integer id, Model model) {
        model.addAttribute("diamond", diamondService.getDiamondById(id));
        return "edit_diamond";
    }

    //update diamond
    @PostMapping("/diamonds/{id}")
    public String updateDiamond(@PathVariable Integer id, @ModelAttribute("diamond") Diamond diamond, Model model) {
        Diamond existingDiamond = diamondService.getDiamondById(id);
        existingDiamond.setCaratWeight(diamond.getCaratWeight());
        existingDiamond.setClarity(diamond.getClarity());
        existingDiamond.setColor(diamond.getColor());
        existingDiamond.setCut(diamond.getCut());
        existingDiamond.setPrice(diamond.getPrice());
        diamondService.updateDiamond(existingDiamond);
        return "redirect:/diamonds";
    }

    //delete diamond
    @GetMapping("/diamonds/delete/{id}")
    public String deleteDiamond(@PathVariable Integer id) {
        diamondService.deleteDiamond(id);
        return "redirect:/diamonds";
    }
}
