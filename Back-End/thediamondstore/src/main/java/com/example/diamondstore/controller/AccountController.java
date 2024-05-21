package com.example.diamondstore.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.model.Account;
import com.example.diamondstore.repository.AccountRepository;
import com.example.diamondstore.request.RegisterRequet;

@RestController
@RequestMapping("/api/accounts")
public class AccountController {

    private final AccountRepository userRepository;
    

    public AccountController(AccountRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/home")
    public String welcome(){
        return "Welcome to Diamond Store";
    }
    
    

    @GetMapping("/accounts")
    public ResponseEntity<Iterable<Account>> getUsers() {
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
        String accountName = registerRequet.getAccountName();
        String password = registerRequet.getPassword();
        String email = registerRequet.getEmail();
        String phoneNumber = registerRequet.getPhoneNumber();

        Account existingUser = userRepository.findByAccountName(accountName);
        if (existingUser != null) {
            return ResponseEntity.badRequest().body("User already exists");
        }
        Account user = new Account( null, accountName, password,"ROLE_CUSTOMER", phoneNumber, email);
        userRepository.save(user);
        return ResponseEntity.ok("Registered successfully");
    }

    @DeleteMapping("/delete/{accountID}")
    public ResponseEntity<String> delete(@PathVariable Integer accountID) {
        userRepository.deleteById(accountID);
        return ResponseEntity.ok("Deleted successfully");
    }
    

    @PutMapping("/update/{accountID}")
    public ResponseEntity<String> update(@PathVariable Integer accountID, @RequestBody Account user) {
    Account existingUser = userRepository.findById(accountID).orElse(null);
    if (existingUser == null) {
        return ResponseEntity.badRequest().body("User not found");
    }

    existingUser.setAccountName(user.getAccountName());

    BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    if (!passwordEncoder.matches(user.getPassword(), existingUser.getPassword())) {
        existingUser.setPassword(passwordEncoder.encode(user.getPassword()));
    }

    existingUser.setRole(user.getRole());
    existingUser.setEmail(user.getEmail());
    existingUser.setPhoneNumber(user.getPhoneNumber());
    userRepository.save(existingUser);
    return ResponseEntity.ok("Updated successfully");
    }

    //forget password
    @PutMapping("/forgetPassword/{email}")
    public ResponseEntity<String> forgetPassword(@PathVariable String email, @RequestBody Account user) {
        Account existingUser = userRepository.findByEmail(email);
        if (existingUser == null) {
            return ResponseEntity.badRequest().body("User not found");
        }

        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        if (!passwordEncoder.matches(user.getPassword(), existingUser.getPassword())) {
            existingUser.setPassword(passwordEncoder.encode(user.getPassword()));
        }

        userRepository.save(existingUser);
        return ResponseEntity.ok("Updated successfully");
    }


    
}