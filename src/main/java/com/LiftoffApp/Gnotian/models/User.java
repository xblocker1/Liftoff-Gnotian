package com.LiftoffApp.Gnotian.models;

import jakarta.persistence.Entity;
//import jakarta.validation.constraints.NotNull;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Entity
public class User extends AbstractEntity {
    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
//    @NotNull
    private String username;

//    @NotNull
    private String pwHash;

    public User() {}

    public User(String username, String password) {
        this.username = username;
        this.pwHash = encoder.encode(password);
    }


    public String getUsername() {
        return username;

    }public boolean isMatchingPassword(String password) {
        return encoder.matches(password, pwHash);
    }




}

