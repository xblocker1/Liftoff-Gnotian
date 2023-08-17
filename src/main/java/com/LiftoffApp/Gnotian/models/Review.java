package com.LiftoffApp.Gnotian.models;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;

@Entity
public class Review extends AbstractEntity{


    private String artist;
    private String body;
    private String uri;

    //private String user; //spotify user id

    public Review(){}

    public Review(String artist, String body, String uri /*, String user*/) {
        this.artist = artist;
        this.body = body;
        this.uri = uri;
//        this.user = user;
    }

    public String getArtist() {
        return artist;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }

//    public String getUser() {
//        return user;
//    }
//
//    public void setUser(String user) {
//        this.user = user;
//    }
}
