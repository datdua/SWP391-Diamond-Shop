package com.example.diamondstore.controller;

import java.util.Collections;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.util.StringUtils;
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
import com.example.diamondstore.request.RegisterRequest;

@RestController
@RequestMapping("/api/accounts")
public class AccountController {

    private final AccountRepository accountRepository;
    
    public AccountController(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    @GetMapping("/home")
    public String welcome(){
        return "Welcome to Diamond Store";
    }

    @GetMapping("/accounts")
    public ResponseEntity<Iterable<Account>> getUsers() {
        return ResponseEntity.ok(accountRepository.findAll());
    }


    @PostMapping(value = "/register", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> register(@RequestBody RegisterRequest registerRequest) {
        String accountName = registerRequest.getAccountName();
        String password = registerRequest.getPassword();
        String email = registerRequest.getEmail();
    
        // Kiểm tra nếu bất kỳ trường nào trống
        if (!StringUtils.hasText(accountName) || !StringUtils.hasText(password) || !StringUtils.hasText(email)) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Vui lòng nhập đầy đủ thông tin"));
        }
    
        Account existingUser = accountRepository.findByEmail(email);
        if (existingUser != null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Tài khoản đã tồn tại"));
        }
    
        Account user = new Account(null, accountName, password, "ROLE_CUSTOMER", null, email);
        accountRepository.save(user);
        return ResponseEntity.ok(Collections.singletonMap("message", "Đăng kí thành công"));
    }



    @DeleteMapping(value="/delete/{accountID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> delete(@PathVariable Integer accountID) {
        accountRepository.deleteById(accountID);
        return ResponseEntity.ok(Collections.singletonMap("message", "Xóa thành công"));
    }
    

    @PutMapping(value="/update/{accountID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> update(@PathVariable Integer accountID, @RequestBody Account user) {
    Account existingUser = accountRepository.findById(accountID).orElse(null);
    if (existingUser == null) {
        return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Sai ID"));
    }

    existingUser.setAccountName(user.getAccountName());

    BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    if (!passwordEncoder.matches(user.getPassword(), existingUser.getPassword())) {
        existingUser.setPassword(passwordEncoder.encode(user.getPassword()));
    }

    existingUser.setRole(user.getRole());
    existingUser.setEmail(user.getEmail());
    existingUser.setPhoneNumber(user.getPhoneNumber());
    accountRepository.save(existingUser);
    accountRepository.save(existingUser);
    return ResponseEntity.ok(Collections.singletonMap("message", "Cập nhật thành công"));
    }

    //forget password
    @PutMapping(value="/forgetPassword/{email}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> forgetPassword(@PathVariable String email, @RequestBody Account user) {
        Account existingUser = accountRepository.findByEmail(email);
        if (existingUser == null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Sai Email"));
        }

        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        if (!passwordEncoder.matches(user.getPassword(), existingUser.getPassword())) {
            existingUser.setPassword(passwordEncoder.encode(user.getPassword()));
        }

        accountRepository.save(existingUser);
        accountRepository.save(existingUser);
        return ResponseEntity.ok(Collections.singletonMap("message", "Cập nhật mật khẩu thành công"));
    }


    
}