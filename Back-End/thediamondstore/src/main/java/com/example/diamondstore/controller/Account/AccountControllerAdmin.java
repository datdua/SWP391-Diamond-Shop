package com.example.diamondstore.controller.Account;

import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.model.Account;
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
    public ResponseEntity<Map<String, String>> deleteAccounts_Admin(
            @RequestBody List<Integer> accountIDs,
            @RequestHeader("Authorization") String jwtToken) {

        return accountService.deleteAccounts(accountIDs, jwtToken);
    }

    @PutMapping("/update/{accountID}")
    public ResponseEntity<Account> updateAccount_Admin(
            @PathVariable Integer accountID,
            @RequestBody AccountRequest accountRequest,
            @RequestHeader("Authorization") String jwtToken) {

        Account updatedAccount = accountService.updateAccount_Admin(accountID, accountRequest, jwtToken);
        return ResponseEntity.ok(updatedAccount);
    }
}
