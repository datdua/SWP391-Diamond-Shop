
package com.example.diamondstore.service;
import java.util.ArrayList;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.diamondstore.model.Account;
import com.example.diamondstore.repository.AccountRepository;

@Service
public class AccountService implements UserDetailsService {

    private AccountRepository userRepository;

    public AccountService(AccountRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String accountName) throws UsernameNotFoundException {
        Account account = userRepository.findByAccountName(accountName);
        if (account == null) {
            throw new UsernameNotFoundException("User not found with username: " + accountName);
        }

        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(account.getRole()));

        UserDetails userDetails = new org.springframework.security.core.userdetails.User(account.getAccountName(), account.getPassword(), authorities);


        
        return userDetails;
    }
}