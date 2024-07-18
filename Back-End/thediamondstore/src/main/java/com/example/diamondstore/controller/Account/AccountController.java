package com.example.diamondstore.controller.Account;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.model.Account;
import com.example.diamondstore.repository.AccountRepository;
import com.example.diamondstore.request.AccountRequest;
import com.example.diamondstore.request.RegisterRequest;
import com.example.diamondstore.service.AccountService;

@RestController
@RequestMapping("/api/accounts")
public class AccountController {

    private final AccountService accountService;

    private final AccountRepository accountRepository;

    public AccountController(AccountService accountService, AccountRepository accountRepository) {
        this.accountService = accountService;
        this.accountRepository = accountRepository;
    }

    @GetMapping("/get-all")
    public ResponseEntity<Iterable<Account>> getAccounts() {
        return ResponseEntity.ok(accountRepository.findAll());
    }

    @GetMapping("/get-by-account-name/{accountName}")
    public ResponseEntity<Account> getByAccountName(@PathVariable String accountName) {
        Account account = accountRepository.findByAccountName(accountName);
        if (account == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(account);
    }

    @GetMapping("/get-paging")
    public ResponseEntity<Page<Account>> getAllAccountsPaged(@RequestParam(defaultValue = "1") int page, @RequestParam(defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page - 1, size);
        Page<Account> pageAccount = accountRepository.findAll(pageable);
        return ResponseEntity.ok(pageAccount);
    }

    @GetMapping("/{accountID}")
    public ResponseEntity<?> getByAccountID(@PathVariable Integer accountID) {
        Account account = accountRepository.findByAccountID(accountID);
        if (account == null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Không tìm thấy tài khoản"));
        }
        return ResponseEntity.ok(account);
    }

    @GetMapping("/get-by-account-email/{email}")
    public ResponseEntity<?> getByAccountEmail(@PathVariable String email) {
        Optional<Account> account = accountRepository.findByEmail(email);
        if (account.isPresent()) {
            return ResponseEntity.ok(account.get());
        } else {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Không tìm thấy tài khoản"));
        }
    }

    @GetMapping("/get-by-account-role/{role}")
    public ResponseEntity<?> getByAccountRole(@PathVariable String role) {
        List<Account> accounts = accountRepository.findByRole(role);
        if (accounts.isEmpty()) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Không tìm thấy tài khoản"));
        }
        return ResponseEntity.ok(accounts);
    }

    @GetMapping("/get-all-except-customer")
    public List<Account> getAllAccountsExceptCustomer() {
        return accountService.getAllAccountsExcludingRoleCustomer();
    }
    
    @PutMapping("/update/{accountID}")
    public ResponseEntity<Account> updateAccount_Admin(
            @PathVariable Integer accountID,
            @RequestBody AccountRequest accountRequest,
            @RequestHeader("Authorization") String token) {

        String jwtToken = token.substring(7); // Remove "Bearer " prefix
        Account updatedAccount = accountService.updateAccountProfile(accountID, accountRequest, jwtToken);
        return ResponseEntity.ok(updatedAccount);
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
