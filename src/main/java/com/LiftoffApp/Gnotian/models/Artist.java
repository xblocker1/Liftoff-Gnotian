package com.LiftoffApp.Gnotian.models;

import jakarta.persistence.Entity;

@Entity
public class Artist extends AbstractEntity{


    private Artist artistOne;
    private Artist artistTwo;
    private Artist artistThree;
    private Artist artistFour;
    private Artist artistFive;

    public Artist getArtistOne() {
        return artistOne;
    }

    public void setArtistOne(Artist artistOne) {
        this.artistOne = artistOne;
    }



    public Artist getArtistFive() {
        return artistFive;
    }

    public void setArtistFive(Artist artistFive) {
        this.artistFive = artistFive;
    }

    public Artist getArtistTwo() {
        return artistTwo;
    }

    public void setArtistTwo(Artist artistTwo) {
        this.artistTwo = artistTwo;
    }

    public Artist getArtistThree() {
        return artistThree;
    }

    public void setArtistThree(Artist artistThree) {
        this.artistThree = artistThree;
    }

    public Artist getArtistFour() {
        return artistFour;
    }

    public void setArtistFour(Artist artistFour) {
        this.artistFour = artistFour;
    }



    public Artist(){

    }

    public Artist(Artist artistOne, Artist artistTwo, Artist artistThree, Artist artistFour, Artist artistFive){
        super();
        this.artistOne = artistOne;
        this.artistTwo = artistTwo;
        this.artistThree = artistThree;
        this.artistFour = artistFour;
        this.artistFive = artistFive;
    }
}
