package com.LiftoffApp.Gnotian.models;

import jakarta.persistence.Entity;

@Entity
public class Artist extends AbstractEntity{
    String name;

    public Artist() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
