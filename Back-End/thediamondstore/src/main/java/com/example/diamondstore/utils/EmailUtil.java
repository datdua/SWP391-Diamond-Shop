package com.example.diamondstore.utils;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

@Component
public class EmailUtil {
    @Autowired
    private JavaMailSender javaMailSender;
    
    public void sendOtpEmail(String email, String otp) throws MessagingException {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage);
        mimeMessageHelper.setTo(email);
        mimeMessageHelper.setSubject("Verify OTP");
        String emailContent = "<div>" +
        "<a href=\"http://localhost:8080/verify-account?email=" + email + "&otp=" + otp + "\">Click here to verify OTP</a>" +
        "</div>";
        mimeMessageHelper.setText(emailContent, true);

        javaMailSender.send(mimeMessage);
    }

    public void sendSetPasswordEmail(String email) throws MessagingException {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage);
        mimeMessageHelper.setTo(email);
        mimeMessageHelper.setSubject("Set Password");
        String emailContent = "<div>" +
        "<a href=\"http://localhost:8080/set-password?email=" + email  + "\">Click here to set password</a>" +
        "</div>";
        mimeMessageHelper.setText(emailContent, true);

        javaMailSender.send(mimeMessage);
    }
}
