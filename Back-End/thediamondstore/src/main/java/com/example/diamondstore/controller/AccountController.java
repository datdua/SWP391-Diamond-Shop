package com.example.diamondstore.controller;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.diamondstore.model.Account;
import com.example.diamondstore.model.Customer;
import com.example.diamondstore.model.Order;
import com.example.diamondstore.repository.AccountRepository;
import com.example.diamondstore.repository.CustomerRepository;
import com.example.diamondstore.repository.OrderRepository;
import com.example.diamondstore.request.AccountRequest;
import com.example.diamondstore.request.RegisterRequest;
import com.example.diamondstore.request.putRequest.AccountPutRequest;

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
        String accountName = registerRequest.getAccountName();
        String password = registerRequest.getPassword();
        String email = registerRequest.getEmail();

        // Kiểm tra nếu bất kỳ trường nào trống
        if (!StringUtils.hasText(accountName) || !StringUtils.hasText(password) || !StringUtils.hasText(email)) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Vui lòng nhập đầy đủ thông tin"));
        }

        Account existingAccount = accountRepository.findByEmail(email);
        if (existingAccount != null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Tài khoản đã tồn tại"));
        }

        Account account = new Account(null, accountName, password, "ROLE_CUSTOMER", null, email);
        accountRepository.save(account);

        Customer customer = new Customer(account.getAccountID(), 0);
        customerRepository.save(customer);
        return ResponseEntity.ok(Collections.singletonMap("message", "Đăng kí thành công"));
    }

    @DeleteMapping(value = "/delete/{accountID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> delete(@PathVariable Integer accountID) {
        Account account = accountRepository.findById(accountID).orElse(null);
        if (account == null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Không tìm thấy tài khoản"));
        }

        // Xóa các Order liên quan trước khi xóa Account
        List<Order> orders = orderRepository.findByAccount(account);
        for (Order order : orders) {
            orderRepository.delete(order);
        }

        // Xóa Customer liên quan trước khi xóa Account
        Customer customer = account.getCustomer();
        if (customer != null) {
            customerRepository.delete(customer);
        }

        accountRepository.delete(account);
        return ResponseEntity.ok(Collections.singletonMap("message", "Xóa thành công"));
    }


    @PostMapping(value = "/create", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> create(@RequestBody AccountRequest accountRequest) {
        String accountName = accountRequest.getAccountName();
        String password = accountRequest.getPassword();
        String role = accountRequest.getRole();
        String phoneNumber = accountRequest.getPhoneNumber();
        String email = accountRequest.getEmail();

        // Kiểm tra nếu bất kỳ trường nào trống
        if (!StringUtils.hasText(accountName) || !StringUtils.hasText(password) || !StringUtils.hasText(role) || !StringUtils.hasText(email)) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Vui lòng nhập đầy đủ thông tin"));
        }

        Account existingAccount = accountRepository.findByEmail(email);
        if (existingAccount != null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Tài khoản đã tồn tại"));
        }

        Account account = new Account(null, accountName, password, role, phoneNumber, email);
        accountRepository.save(account);
        return ResponseEntity.ok(Collections.singletonMap("message", "Tạo tài khoản thành công"));
        
    }

    @PutMapping(value = "/update/{accountID}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<?> update(@PathVariable Integer accountID, @RequestBody AccountPutRequest accountPutRequest) {
        Account existingAccount = accountRepository.findById(accountID).orElse(null);
        if (existingAccount == null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Không tìm thấy tài khoản"));
        }
        existingAccount.setAccountName(accountPutRequest.getAccountName());
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        if (!passwordEncoder.matches(accountPutRequest.getPassword(), existingAccount.getPassword())) {
            existingAccount.setPassword(passwordEncoder.encode(accountPutRequest.getPassword()));
        }
        existingAccount.setEmail(accountPutRequest.getEmail());
        existingAccount.setPhoneNumber(accountPutRequest.getPhoneNumber());
        existingAccount.setRole(accountPutRequest.getRole());
        accountRepository.save(existingAccount);
        return ResponseEntity.ok(Collections.singletonMap("message", "Cập nhật thành công"));
    }

    //forget password
    @PutMapping(value = "/forgetPassword/{email}", produces = "application/json;charset=UTF-8")
    public ResponseEntity<Map<String, String>> forgetPassword(@PathVariable String email, @RequestBody Account account) {
        Account existingAccount = accountRepository.findByEmail(email);
        if (existingAccount == null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Sai Email"));
        }

        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        if (!passwordEncoder.matches(account.getPassword(), existingAccount.getPassword())) {
            existingAccount.setPassword(passwordEncoder.encode(account.getPassword()));
        }

        accountRepository.save(existingAccount);
        accountRepository.save(existingAccount);
        return ResponseEntity.ok(Collections.singletonMap("message", "Cập nhật mật khẩu thành công"));
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
        Account account = accountRepository.findByEmail(email);
        if (account == null) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("message", "Không tìm thấy tài khoản"));
        }
        return ResponseEntity.ok(account);
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
}
