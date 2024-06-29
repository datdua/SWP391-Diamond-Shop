package com.example.diamondstore.controller;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.DTO.AccountContactInfoDTO;
import com.example.diamondstore.model.Account;
import com.example.diamondstore.model.Order;
import com.example.diamondstore.repository.AccountRepository;
import com.example.diamondstore.repository.CustomerRepository;
import com.example.diamondstore.repository.OrderRepository;
import com.example.diamondstore.request.AccountRequest;
import com.example.diamondstore.request.RegisterRequest;
import com.example.diamondstore.service.AccountService;

@RestController
@RequestMapping("/api/accounts")
public class AccountController {

    private final AccountRepository accountRepository;
    private final CustomerRepository customerRepository;
    private final OrderRepository orderRepository;

    public AccountController(AccountRepository accountRepository, CustomerRepository customerRepository, OrderRepository orderRepository) {
        this.accountRepository = accountRepository;
        this.customerRepository = customerRepository;
        this.orderRepository = orderRepository;
    }

    @Autowired
    private AccountService accountService;

    @GetMapping("/home")
    public String welcome() {
        return "Welcome to Diamond Store";
    }

    @GetMapping("/accounts")
    public ResponseEntity<Iterable<Account>> getaccounts() {
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

    @DeleteMapping(value = "/delete", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> deleteAccounts(@RequestBody List<Integer> accountIDs) {
        try {
            accountService.deleteAccounts(accountIDs);
            return ResponseEntity.ok(Collections.singletonMap("message", "Xóa các tài khoản thành công"));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", e.getMessage()));
        }

    }

    @PostMapping("/create")
    public ResponseEntity<Map<String, String>> createAccount(@RequestBody AccountRequest accountRequest) {
        try {
            accountService.createAccount(accountRequest);
            return ResponseEntity.ok(Collections.singletonMap("message", "Tạo tài khoản thành công"));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", e.getMessage()));
        }
    }

    @PutMapping(value = "/update/{accountID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> update(@PathVariable Integer accountID, @RequestBody AccountRequest accountRequest) {
        try {
            Account updatedAccount = accountService.updateAccount(accountID, accountRequest);
            return ResponseEntity.ok(Collections.singletonMap("message", "Cập nhật thành công"));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", e.getMessage()));
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

    //get account by role
    @GetMapping("/getByRole/{role}")
    public ResponseEntity<?> getByAccountRole(@PathVariable String role) {
        List<Account> accounts = accountRepository.findByRole(role);
        if (accounts.isEmpty()) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Không tìm thấy tài khoản"));
        }
        return ResponseEntity.ok(accounts);
    }

    //get phoneNumber, addressAccount by accountID
    @GetMapping("/contactInfo/{accountID}")
    public ResponseEntity<?> getContactInfoByAccountID(@PathVariable Integer accountID) {
        Account account = accountRepository.findById(accountID).orElse(null);
        if (account == null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Không tìm thấy tài khoản"));
        }

        String phoneNumber = account.getPhoneNumber();
        String address = account.getAddressAccount();

        // Check if phoneNumber and address are null
        if (phoneNumber == null || address == null) {
            Order order = orderRepository.findFirstByAccountIDOrderByOrderDateDesc(accountID);
            if (order != null) {
                if (phoneNumber == null) {
                    phoneNumber = order.getPhoneNumber();
                }
                if (address == null) {
                    address = order.getDeliveryAddress();
                }
            }
        }

        // If both phoneNumber and address are still null, return an appropriate message
        if (phoneNumber == null || address == null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Không tìm thấy thông tin liên lạc hợp lệ"));
        }

        AccountContactInfoDTO contactInfo = new AccountContactInfoDTO(phoneNumber, address);
        return ResponseEntity.ok(contactInfo);
    }
}
