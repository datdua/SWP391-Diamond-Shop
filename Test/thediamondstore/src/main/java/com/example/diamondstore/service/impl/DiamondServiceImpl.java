package com.example.diamondstore.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.diamondstore.model.Diamond;
import com.example.diamondstore.repository.DiamondRepository;
import com.example.diamondstore.service.DiamondService;

@Service
public class DiamondServiceImpl implements DiamondService {

    private DiamondRepository diamondRepository;
    
    public DiamondServiceImpl(DiamondRepository diamondRepository) {
        super();
        this.diamondRepository = diamondRepository;
    }

    @Override
    public List<Diamond> getAllDiamonds() {
        return diamondRepository.findAll();
    }

    @Override
    public Diamond saveDiamond(Diamond diamond) {
        return diamondRepository.save(diamond);
    }

    @Override
    public Diamond getDiamondById(Integer diamondID) {
        return diamondRepository.findById(diamondID).get();
    }

    @Override
    public Diamond updateDiamond(Diamond diamond) {
        return diamondRepository.save(diamond);
    }

    @Override
    public void deleteDiamond(Integer diamondID) {
        diamondRepository.deleteById(diamondID);
    }
}
