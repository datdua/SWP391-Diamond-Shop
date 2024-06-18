package com.example.diamondstore.controller;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.model.Account;
import com.example.diamondstore.request.AuthenticationRequest;
import com.example.diamondstore.response.AuthenticationResponse;
import com.example.diamondstore.service.AccountService;
import com.example.diamondstore.utils.JwtUtil;

@RestController
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private AccountService accountService;

    @Autowired
    private JwtUtil jwtTokenUtil;
       
    public AuthenticationController(AuthenticationManager authenticationManager, AccountService accountService, JwtUtil jwtTokenUtil) {
        this.authenticationManager = authenticationManager;
        this.accountService = accountService;
        this.jwtTokenUtil = jwtTokenUtil;
    }

    @PostMapping(value = "/login", consumes = "application/json", produces = "application/json")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
        try {
            authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(), authenticationRequest.getPassword())
            );
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(401).body(Collections.singletonMap("message", "Sai email hoặc mật khẩu"));
        }

        final UserDetails userDetails = accountService.loadUserByUsername(authenticationRequest.getEmail());
        final Account account = accountService.findByEmail(authenticationRequest.getEmail());
        
        if (account == null || !account.isActive()) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                .body(Collections.singletonMap("message", "Tài khoản chưa được kích hoạt. Vui lòng kiểm tra email để kích hoạt tài khoản."));
        }

        final String jwt = jwtTokenUtil.generateToken(account);

        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }
}
