package com.LiftoffApp.Gnotian.models;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Review extends AbstractEntity{

    private String reviewText;
    @OneToOne
    @JoinColumn(name = "artist_id")
    private Artist artist;

    public Review(){}


    public Review(String reviewText, Artist artist){
        super();
        this.reviewText = reviewText;
        this.artist = artist;
    }

    public String getReviewText() {
        return reviewText;
    }

    public void setReviewText(String reviewText) {
        this.reviewText = reviewText;
    }

    public Artist getArtist() {
        return artist;
    }

    public void setArtist(Artist artist) {
        this.artist = artist;
    }
}
