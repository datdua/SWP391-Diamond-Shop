package com.example.diamondstore.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.model.Collection;
import com.example.diamondstore.repository.CollectionRepository;

@RestController
@RequestMapping("/api/collections")
public class CollectionController {

    private final CollectionRepository collectionRepository;

    public CollectionController(CollectionRepository collectionRepository) {
        this.collectionRepository = collectionRepository;
    }

    // admin
    @GetMapping("/admin")
    public ResponseEntity<Iterable<Collection>> getCollections_Admin() {
        return ResponseEntity.ok(collectionRepository.findAll());
    }

    // customer
    @GetMapping("/customer")
    public ResponseEntity<Iterable<Collection>> getCustomerCollections_Customer() {
        return ResponseEntity.ok(collectionRepository.findAll());
    }

    // admin
    @GetMapping("/admin/{collectionID}")
    public ResponseEntity<Collection> getCollection_Admin(@RequestParam int collectionID) {
        Collection collection = collectionRepository.findByCollectionID(collectionID);
        if (collection == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(collection);
    }

    // customer
    @GetMapping("/customer/{collectionID}")
    public ResponseEntity<Collection> getCollection_Customer(@RequestParam int collectionID) {
        Collection collection = collectionRepository.findByCollectionID(collectionID);
        if (collection == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(collection);
    }

    // admin
    @PostMapping(value = "/admin/create", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> createCollection_Admin(@RequestBody Collection collection) {
        Collection existingCollection = collectionRepository.findByCollectionID(collection.getCollectionID());
        if (existingCollection != null) {
            return ResponseEntity.badRequest().build();
        }
        collectionRepository.save(collection);
        return ResponseEntity.ok(collection);
    }

    // admin
    @PutMapping(value = "/admin/update/{collectionID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> updateCollection_Admin(@PathVariable int collectionID, @RequestBody Collection collection) {
        Collection existingCollection = collectionRepository.findByCollectionID(collectionID);
        if (existingCollection == null) {
            return ResponseEntity.notFound().build();
        }
        existingCollection.setDiamondID(collection.getDiamondID());
        existingCollection.setDiamondImage(collection.getDiamondImage());
        existingCollection.setJewelryID(collection.getJewelryID());
        existingCollection.setJewelryImage(collection.getJewelryImage());
        collectionRepository.save(existingCollection);
        return ResponseEntity.ok(collection);
    }

    // admin
    @DeleteMapping(value = "/admin/delete/{collectionID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> deleteCollection_Admin(@PathVariable int collectionID) {
        Collection existingCollection = collectionRepository.findByCollectionID(collectionID);
        if (existingCollection == null) {
            return ResponseEntity.notFound().build();
        }
        collectionRepository.delete(existingCollection);
        return ResponseEntity.ok(existingCollection);
    }
}
