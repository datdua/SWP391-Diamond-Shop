package com.example.diamondstore.controller.Account;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.request.RegisterRequest;
import com.example.diamondstore.service.AccountService;


@RestController
@RequestMapping("/api/guest/accounts")
public class AccountControllerGuest {
    
    private final AccountService accountService;

    public AccountControllerGuest(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping("/home")
    public String welcome() {
        return "Welcome to Diamond Store";
    }

    @PostMapping(value = "/register", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> register(@RequestBody RegisterRequest registerRequest) {
        Map<String, String> message;
        try {
            message = accountService.register(registerRequest);
            return ResponseEntity.ok().body(Map.of("message", message.get("message")));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    @PutMapping(value = "/verify-account", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> verifyAccount(@RequestParam String email, @RequestParam String otp) {
        Map<String, String> response;
        try {
            response = accountService.verifyAccount(email, otp);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    @PutMapping(value = "/regenerate-otp", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> regenerateOtp(@RequestParam String email) {
        Map<String, String> response;
        try {
            response = accountService.regenerateOtp(email);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    @PostMapping(value = "/forget-password", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> forgetPassword(@RequestParam String email) {
        try {
            Map<String, String> response = accountService.forgetPassword(email);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    @PutMapping(value = "/set-password", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> setPassword(@RequestParam String email, @RequestHeader String newPassword) {
        try {
            Map<String, String> response = accountService.setPassword(email, newPassword);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }
}
