package com.example.diamondstore.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.request.AuthenticationRequest;
import com.example.diamondstore.service.AuthenticationService;

@RestController
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping(value = "/login", consumes = "application/json", produces = "application/json")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
        return authenticationService.authenticate(authenticationRequest);
    }

    @PostMapping(value = "/refresh", produces = "application/json")
    public ResponseEntity<?> refreshAuthenticationToken(@RequestHeader("Authorization") String token) {
        return authenticationService.refresh(token.substring(7)); // Remove "Bearer " prefix
    }
}
