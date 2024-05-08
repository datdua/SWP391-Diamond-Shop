package com.example.diamondstore.controller;

import com.example.diamondstore.model.User;
import com.example.diamondstore.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        User existingUser = userRepository.findByUsername(user.getUsername());
        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
            return ResponseEntity.ok("Logged in successfully");
        } else {
            return ResponseEntity.badRequest().body("Invalid username or password");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        if (userRepository.findByUsername(user.getUsername()) != null) {
            return ResponseEntity.badRequest().body("Username already exists");
        }
        userRepository.save(user);
        return ResponseEntity.ok("Registered successfully");
    }
}