package com.springjwt.controllers;

import com.springjwt.dto.SignupDTO;
import com.springjwt.dto.UserDTO;
import com.springjwt.services.auth.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SignupController {

    @Autowired
    private AuthService authService;

    @Autowired
    private JavaMailSender emailSender;

//     if(authService.presentByEmail(signupDTO.getEmail())){
//            return new ResponseEntity<>("Client already exist with this email", HttpStatus.NOT_ACCEPTABLE);
//        }
@PostMapping("/sign-up")
public ResponseEntity<?> signupUser(@RequestBody SignupDTO signupDTO) {
    // Check if the email already exists
    if (authService.emailExists(signupDTO.getEmail())) {
        return new ResponseEntity<>("Email already exists", HttpStatus.BAD_REQUEST);
    }

    UserDTO createdUser = authService.createUser(signupDTO);

    if (createdUser == null) {
        return new ResponseEntity<>("User not created, try again later!", HttpStatus.BAD_REQUEST);
    }

    sendConfirmationEmail(signupDTO.getEmail());

    return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
}


    private void sendConfirmationEmail(String email) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("Welcome to Netflix Clone");
        message.setText("Thank you for signing up! Your account has been created successfully.");

        emailSender.send(message);
    }


}
