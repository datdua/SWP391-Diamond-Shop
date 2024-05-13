package com.example.diamondstore.controller;

import com.example.diamondstore.model.User;
import com.example.diamondstore.repository.UserRepository;
import com.example.diamondstore.request.LoginRequest;
import com.example.diamondstore.request.RegisterRequet;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private final UserRepository userRepository;
    

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/home")
    public String welcome(){
        return "Welcome to Diamond Store";
    }
    
    

    @GetMapping("/users")
    public ResponseEntity<Iterable<User>> getUsers() {
        return ResponseEntity.ok(userRepository.findAll());
    }

    // @PostMapping("/login")
    // public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
    //     String username = loginRequest.getUsername();
    //     String password = loginRequest.getPassword();

    //     User existingUser = userRepository.findByUsername(username);
    //     if (existingUser == null || !existingUser.getPassword().equals(password)) {
    //         return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
    //     }
    //     return ResponseEntity.ok("Login successful");
    // }
    

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequet registerRequet) {
        String username = registerRequet.getUsername();
        String password = registerRequet.getPassword();

        User existingUser = userRepository.findByUsername(username);
        if (existingUser != null) {
            return ResponseEntity.badRequest().body("User already exists");
        }
        User user = new User(null, username, password, "ROLE_USER");
        userRepository.save(user);
        return ResponseEntity.ok("Registered successfully");
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        userRepository.deleteById(id);
        return ResponseEntity.ok("Deleted successfully");
    }
    

    @PutMapping("/update/{id}")
    public ResponseEntity<String> update(@PathVariable Long id, @RequestBody User user) {
        User existingUser = userRepository.findById(id).orElse(null);
        if (existingUser == null) {
            return ResponseEntity.badRequest().body("User not found");
        }
        existingUser.setUsername(user.getUsername());
        existingUser.setPassword(user.getPassword());
        userRepository.save(existingUser);
        return ResponseEntity.ok("Updated successfully");
    }
    
}