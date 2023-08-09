package com.LiftoffApp.Gnotian.models;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Artist extends AbstractEntity{
    String name;

    @OneToMany
    @JoinColumn(name = "review_id")
    private List<Review> reviews = new ArrayList<>();

    public Artist() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Review> getReviews() {
        return reviews;
    }
}
