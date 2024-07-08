package com.example.diamondstore.controller.Account;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.request.AccountRequest;
import com.example.diamondstore.service.AccountService;


@RestController
@RequestMapping("/api/accounts/admin")
public class AccountControllerAdmin {

    private final AccountService accountService;

    public AccountControllerAdmin(AccountService accountService) {
        this.accountService = accountService;
    }

    @DeleteMapping("/delete")
    public ResponseEntity<Map<String, String>> deleteAccounts(
            @RequestBody List<Integer> accountIDs,
            @RequestHeader("Authorization") String jwtToken) {

        return accountService.deleteAccounts(accountIDs, jwtToken);
    }

    @PostMapping("/create")
    public ResponseEntity<Map<String, String>> createAccount_Admin(@RequestBody AccountRequest accountRequest) {
        try {
            accountService.createAccount(accountRequest);
            return ResponseEntity.ok(Collections.singletonMap("message", "Tạo tài khoản thành công"));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", e.getMessage()));
        }
    }

    @PutMapping("/updateCustomer/{accountID}")
    public ResponseEntity<Map<String, String>> updateAccountCustomer(
            @PathVariable Integer accountID,
            @RequestBody AccountRequest accountRequest) {

        return accountService.updateAccount_Customer(accountID, accountRequest);
    }
}
