package com.LiftoffApp.Gnotian.models;

import jakarta.persistence.*;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.annotations.Type;
import org.hibernate.type.SqlTypes;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
public class Artist extends AbstractEntity{

//    private String artistName;
//    private String artistURI;
    private Set<Review> reviews = new HashSet<Review>();

    @OneToMany
    @JoinColumn(name="review_id")
    public Set<Review> getReviews() {
        return reviews;
    }

    public void setReviews(Set<Review> reviews) {
        this.reviews = reviews;
    }
}
