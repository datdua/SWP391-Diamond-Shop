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
import com.example.diamondstore.service.OrderService;

@RestController
@RequestMapping("/api/accounts")
public class AccountController {

    private final AccountRepository accountRepository;
    private final CustomerRepository customerRepository;
    private final OrderRepository orderRepository;
    private final OrderService orderService;

    public AccountController(AccountRepository accountRepository, CustomerRepository customerRepository, OrderRepository orderRepository, OrderService orderService) {
        this.accountRepository = accountRepository;
        this.customerRepository = customerRepository;
        this.orderRepository = orderRepository;
        this.orderService = orderService;
    }

    @Autowired
    private AccountService accountService;

    // guest
    @GetMapping("/guest/home")
    public String welcome_Guest() {
        return "Welcome to Diamond Store";
    }

    // admin
    @GetMapping("/admin/home")
    public String welcome_Admin() {
        return "Welcome to Diamond Store";
    }

    //customer 
    @GetMapping("/customer/home")
    public String welcome_Customer() {
        return "Welcome to Diamond Store";
    }

    // admin
    @GetMapping("/admin/accounts")
    public ResponseEntity<Iterable<Account>> getAccounts_Admin() {
        return ResponseEntity.ok(accountRepository.findAll());
    }

    // customer
    @GetMapping("/customer/accounts")
    public ResponseEntity<Iterable<Account>> getAccounts_Customer() {
        return ResponseEntity.ok(accountRepository.findAll());
    }

    // admin
    @GetMapping("/admin/{accountName}")
    public ResponseEntity<Account> getByAccountName_Admin(@PathVariable String accountName) {
        Account account = accountRepository.findByAccountName(accountName);
        if (account == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(account);
    }

    // customer
    @GetMapping("/customer/{accountName}")
    public ResponseEntity<Account> getByAccountName_Customer(@PathVariable String accountName) {
        Account account = accountRepository.findByAccountName(accountName);
        if (account == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(account);
    }

    // guest
    @PostMapping(value = "/guest/register", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> register_Guest(@RequestBody RegisterRequest registerRequest) {
        Map<String, String> message;
        try {
            message = accountService.register(registerRequest);
            return ResponseEntity.ok().body(Map.of("message", message.get("message")));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    // guest
    @PutMapping(value = "/guest/verify-account", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> verifyAccount_Guest(@RequestParam String email, @RequestParam String otp) {
        Map<String, String> response;
        try {
            response = accountService.verifyAccount(email, otp);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    //guest
    @PutMapping(value = "/guest/regenerate-otp", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> regenerateOtp_Guest(@RequestParam String email) {
        Map<String, String> response;
        try {
            response = accountService.regenerateOtp(email);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    // admin
    @DeleteMapping(value = "/admin/delete", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> deleteAccounts_Admin(@RequestBody List<Integer> accountIDs) {
        try {
            accountService.deleteAccounts(accountIDs);
            return ResponseEntity.ok(Collections.singletonMap("message", "Xóa các tài khoản thành công"));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", e.getMessage()));
        }

    }

    // admin
    @PostMapping("/admin/create")
    public ResponseEntity<Map<String, String>> createAccount_Admin(@RequestBody AccountRequest accountRequest) {
        try {
            accountService.createAccount(accountRequest);
            return ResponseEntity.ok(Collections.singletonMap("message", "Tạo tài khoản thành công"));
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", e.getMessage()));
        }
    }

    // // admin
    // @PutMapping(value = "/admin/update/{accountID}", produces = "application/json;charset=UTF-8")
    // public ResponseEntity<?> updateAccount_Admin(@PathVariable Integer accountID, @RequestBody AccountRequest accountRequest) {
    //     try {
    //         Account updatedAccount = accountService.updateAccount(accountID, accountRequest);
    //         return ResponseEntity.ok(Collections.singletonMap("message", "Cập nhật thành công"));
    //     } catch (RuntimeException e) {
    //         return ResponseEntity.badRequest().body(Collections.singletonMap("message", e.getMessage()));
    //     }
    // }
    @PutMapping("/admin/update/{accountID}")
    public ResponseEntity<Account> updateAccount(
            @PathVariable Integer accountID,
            @RequestBody AccountRequest accountRequest,
            @RequestHeader("Authorization") String token) {
        
        String jwtToken = token.substring(7); // Remove "Bearer " prefix
        Account updatedAccount = accountService.updateAccount(accountID, accountRequest, jwtToken);
        return ResponseEntity.ok(updatedAccount);
    }

    // // customer 
    // @PutMapping(value = "/customer/update/{accountID}", produces = "application/json;charset=UTF-8")
    // public ResponseEntity<?> updateAccount_Customer(@PathVariable Integer accountID, @RequestBody AccountRequest accountRequest) {
    //     try {
    //         Account updatedAccount = accountService.updateAccount(accountID, accountRequest);
    //         return ResponseEntity.ok(Collections.singletonMap("message", "Cập nhật thành công"));
    //     } catch (RuntimeException e) {
    //         return ResponseEntity.badRequest().body(Collections.singletonMap("message", e.getMessage()));
    //     }
    // }

    // guest
    @PostMapping(value = "/guest/forget-password", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> forgetPassword_Guest(@RequestParam String email) {
        try {
            Map<String, String> response = accountService.forgetPassword(email);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    // guest
    @PutMapping(value = "/guest/set-password", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> setPassword_Guest(@RequestParam String email, @RequestHeader String newPassword) {
        try {
            Map<String, String> response = accountService.setPassword(email, newPassword);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        }
    }

    // admin
    @GetMapping("/admin/paged")
    public ResponseEntity<Page<Account>> getAllAccountsPaged_Admin(@RequestParam(defaultValue = "1") int page, @RequestParam(defaultValue = "10") int size) {
        Pageable pageable = PageRequest.of(page - 1, size);
        Page<Account> pageAccount = accountRepository.findAll(pageable);
        return ResponseEntity.ok(pageAccount);
    }

    // admin
    @GetMapping("/admin/get/{accountID}")
    public ResponseEntity<?> getByAccountID_Admin(@PathVariable Integer accountID) {
        Account account = accountRepository.findByAccountID(accountID);
        if (account == null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Không tìm thấy tài khoản"));
        }
        return ResponseEntity.ok(account);
    }

    // admin
    @GetMapping("/admin/getByEmail/{email}")
    public ResponseEntity<?> getByAccountEmail_Admin(@PathVariable String email) {
        Optional<Account> account = accountRepository.findByEmail(email);
        if (account.isPresent()) {
            return ResponseEntity.ok(account.get());
        } else {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Không tìm thấy tài khoản"));
        }
    }

    // admin
    //get account by role
    @GetMapping("/admin/getByRole/{role}")
    public ResponseEntity<?> getByAccountRole_Admin(@PathVariable String role) {
        List<Account> accounts = accountRepository.findByRole(role);
        if (accounts.isEmpty()) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Không tìm thấy tài khoản"));
        }
        return ResponseEntity.ok(accounts);
    }

    // customer
    //get phoneNumber, addressAccount by accountID
    @GetMapping("/customer/contactInfo/{accountID}")
    public ResponseEntity<?> getContactInfoByAccountID_Customer(@PathVariable Integer accountID) {
        Optional<Account> accountOpt = accountRepository.findById(accountID);
        if (accountOpt.isEmpty()) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Không tìm thấy tài khoản"));
        }

        Account account = accountOpt.get();
        String phoneNumber = account.getPhoneNumber();
        String address = account.getAddressAccount();

        // Check if phoneNumber and address are null
        if (phoneNumber == null || address == null) {
            Integer orderNo = orderService.LIFO(accountID);
            if (orderNo == null) {
                return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Không tìm thấy thông tin liên lạc hợp lệ"));
            } else {
                Order order = orderRepository.findByOrderID(orderNo);
                if (order != null) {
                    phoneNumber = order.getPhoneNumber();
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
