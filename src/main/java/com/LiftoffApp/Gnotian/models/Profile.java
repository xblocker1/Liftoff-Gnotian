package com.LiftoffApp.Gnotian.models;

import jakarta.persistence.Entity;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Profile extends AbstractEntity{



    private List<Artist> artistTopFive = new ArrayList<>();
    private List<Review> userReviews = new ArrayList<>();

public int userId;

//public Profile(Artist artistTopFive, Review userReviews){
//    super();
//    this.artistTopFive = artistTopFive;
//    this.userReviews = userReviews;

//}

    public Profile(){

    }



    public List<Artist> getArtistTopFive() { return artistTopFive; }

    public List<Review> getUserReviews() { return userReviews; }
}
