package com.LiftoffApp.Gnotian.controllers;

import com.LiftoffApp.Gnotian.models.Review;
import com.LiftoffApp.Gnotian.models.data.ArtistRepository;
import com.LiftoffApp.Gnotian.models.data.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class ReviewController {

    @Autowired
    ReviewRepository reviewRepository;

    @Autowired
    ArtistRepository artistRepository;


    @GetMapping("profile")
    public String displayProfile(Model model){
        model.addAttribute("reviews", reviewRepository.findAll());
        model.addAttribute("artists", artistRepository.findAll());
        return "profile";
    }

    // this mapping below comes from the review form submission on /search
    @PostMapping("/profile")
    public String addReview (@ModelAttribute Review newReview, Model model){

//        Optional<Artist> optArtist = artistRepository.findById(artist);
//        if (optArtist.isPresent()) {
//            Artist artist = optArtist.get();
//        }
        reviewRepository.save(newReview);
        model.addAttribute("reviews", reviewRepository.findAll());
        model.addAttribute("artists", artistRepository.findAll());
        return "profile";
    }
}
