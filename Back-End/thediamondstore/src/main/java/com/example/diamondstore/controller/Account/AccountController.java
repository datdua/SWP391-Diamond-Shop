package com.example.diamondstore.controller.Account;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.model.Account;
import com.example.diamondstore.repository.AccountRepository;
import com.example.diamondstore.request.AccountRequest;
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

    @GetMapping("/{accountName}")
    public ResponseEntity<Account> getByAccountName(@PathVariable String accountName) {
        Account account = accountRepository.findByAccountName(accountName);
        if (account == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(account);
    }

    @GetMapping("/paged")
    public ResponseEntity<Page<Account>> getAllAccountsPaged(@RequestParam(defaultValue = "1") int page, @RequestParam(defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page - 1, size);
        Page<Account> pageAccount = accountRepository.findAll(pageable);
        return ResponseEntity.ok(pageAccount);
    }

    @GetMapping("/get/{accountID}")
    public ResponseEntity<?> getByAccountID(@PathVariable Integer accountID) {
        Account account = accountRepository.findByAccountID(accountID);
        if (account == null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Không tìm thấy tài khoản"));
        }
        return ResponseEntity.ok(account);
    }

    @GetMapping("/getByEmail/{email}")
    public ResponseEntity<?> getByAccountEmail(@PathVariable String email) {
        Optional<Account> account = accountRepository.findByEmail(email);
        if (account.isPresent()) {
            return ResponseEntity.ok(account.get());
        } else {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Không tìm thấy tài khoản"));
        }
    }

    @GetMapping("/getByRole/{role}")
    public ResponseEntity<?> getByAccountRole(@PathVariable String role) {
        List<Account> accounts = accountRepository.findByRole(role);
        if (accounts.isEmpty()) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Không tìm thấy tài khoản"));
        }
        return ResponseEntity.ok(accounts);
    }

     @GetMapping("/all-except-customer")
    public List<Account> getAllAccountsExceptCustomer() {
        return accountService.getAllAccountsExcludingRoleCustomer();
    }

    @PutMapping("/update/{accountID}")
    public ResponseEntity<Account> updateAccount(
            @PathVariable Integer accountID,
            @RequestBody AccountRequest accountRequest,
            @RequestHeader("Authorization") String jwtToken) {

        Account updatedAccount = accountService.updateAccountProfile(accountID, accountRequest, jwtToken);
        return ResponseEntity.ok(updatedAccount);
    }
}
