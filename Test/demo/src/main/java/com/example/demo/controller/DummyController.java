package com.example.demo.controller;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class DummyController {
    @RequestMapping("/")
    String displaDefaultMessage () {
        return "Hello World, Spring Boot!";
    }
    
    
}