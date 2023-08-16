package com.LiftoffApp.Gnotian.models;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;

@Entity
public class Review extends AbstractEntity{

    private String reviewText;

    private String artistName;

    private Long artistUid;

    public Review(){}

    public Review(String reviewText, String artistName, Long artistUid) {
        this.reviewText = reviewText;
        this.artistName = artistName;
        this.artistUid = artistUid;
    }

    public String getReviewText() {
        return reviewText;
    }

    public void setReviewText(String reviewText) {
        this.reviewText = reviewText;
    }

    public String getArtistName() {
        return artistName;
    }

    public void setArtistName(String artistName) {
        this.artistName = artistName;
    }

    public Long getArtistUid() {
        return artistUid;
    }

    public void setArtistUid(Long artistUid) {
        this.artistUid = artistUid;
    }
}
