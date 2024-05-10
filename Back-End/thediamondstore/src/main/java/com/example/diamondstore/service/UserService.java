// package com.example.diamondstore.service;

// import com.example.diamondstore.model.User;
// import com.example.diamondstore.repository.UserRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// @Service
// public class UserService {

//     private final UserRepository userRepository;

//     @Autowired
//     public UserService(UserRepository userRepository) {
//         this.userRepository = userRepository;
//     }

//     public User updateUser(User user) {
//         // Check if user exists in the database
//         User existingUser = userRepository.findById(user.getId()).orElse(null);
//         if (existingUser == null) {
//             throw new RuntimeException("User not found");
//         }

//         // Update the user details
//         existingUser.setUsername(user.getUsername());
//         existingUser.setPassword(user.getPassword());
//         // Add other fields as necessary

//         // Save the updated user to the database
//         return userRepository.save(existingUser);
//     }
// }