package edu.fpt.diamondshopdemo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import edu.fpt.diamondshopdemo.UserDTO.User;
import edu.fpt.diamondshopdemo.UserDTO.UserRepository;



@RestController
@RequestMapping("/user")
public class UserController {
    
    private final UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    //hiện taị tất cả user
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    
    //tạo user
    @PostMapping("/create")
    public String createUser(@RequestParam String name, @RequestParam String password, @RequestParam String email) {
        User user = new User();
        user.setName(name);
        user.setPassword(password);
        user.setEmail(email);
        userRepository.save(user);
        return "User created";
    }

    //xóa user bằng user_id
    @DeleteMapping("/delete/{id}")
    public String deleteUser(@RequestParam int id) {
        userRepository.deleteById(id);
        return "User deleted";
    }

    //cập nhật user
    @PutMapping("update/{id}")
    public String updateUser(@RequestParam int id, @RequestParam String name, @RequestParam String password, @RequestParam String email) {
        User user = userRepository.getOne(id);
        user.setName(name);
        user.setPassword(password);
        user.setEmail(email);
        userRepository.save(user);
        return "User updated";
    }
}
