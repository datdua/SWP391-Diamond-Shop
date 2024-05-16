package com.example.diamondstore.service;

import java.util.List;

import com.example.diamondstore.model.Diamond;

public interface DiamondService {
    //list of all diamonds
    List<Diamond> getAllDiamonds();

    //save a new diamond
    Diamond saveDiamond(Diamond diamond);

    //get a diamond by id
    Diamond getDiamondById(Integer diamondID);

    //update a diamond
    Diamond updateDiamond(Diamond diamond);

    //delete a diamond
    void deleteDiamond(Integer diamondID);
}
