package com.example.diamondstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.diamondstore.model.Account;


public interface AccountRepository extends JpaRepository<Account, Integer> {

    Account findByAccountName(String accountName);

    Account findByEmail(String email);

    Account findByAccountID(Integer accountID);
}
