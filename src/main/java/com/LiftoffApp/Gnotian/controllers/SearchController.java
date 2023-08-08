package com.LiftoffApp.Gnotian.controllers;

import com.LiftoffApp.Gnotian.models.Artist;
import com.LiftoffApp.Gnotian.models.Review;
import com.LiftoffApp.Gnotian.models.data.ArtistRepository;
import com.LiftoffApp.Gnotian.models.data.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Optional;

@Controller
public class SearchController {

    @Autowired
    private final ArtistRepository artistRepository;
    @Autowired
    private final ReviewRepository reviewRepository;

    public SearchController(ArtistRepository artistRepository,
                            ReviewRepository reviewRepository) {
        this.artistRepository = artistRepository;
        this.reviewRepository = reviewRepository;
    }

    @PostMapping("/profile")
    public String addReview (@ModelAttribute Review newReview){
//        model.addAttribute("artist", artist);
//        model.addAttribute("reviewBody", reviewBody);
//        Optional<Artist> optArtist = artistRepository.findById(artist);
//        if (optArtist.isPresent()) {
//            Artist artist = optArtist.get();
//
//        }
        reviewRepository.save(newReview);
        return "profile";
    }
}
