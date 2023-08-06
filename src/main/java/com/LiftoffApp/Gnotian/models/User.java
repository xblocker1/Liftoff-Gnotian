package com.LiftoffApp.Gnotian.models;

import jakarta.persistence.Entity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.ArrayList;
import java.util.List;

@Entity
public class User extends AbstractEntity{
    private String username;
    private String pwHash;
    public static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();


    public User(){
    }

    public User(String username, String password){
        super();
        this.username = username;
        this.pwHash = encoder.encode(password);
    }

    public String getUsername() { return username; }

    public void setUsername(String username) { this.username = username; }

    public String getPassword() { return pwHash; }



}
