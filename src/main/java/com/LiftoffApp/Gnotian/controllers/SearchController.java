package com.LiftoffApp.Gnotian.controllers;

import com.LiftoffApp.Gnotian.models.Artist;
import com.LiftoffApp.Gnotian.models.Review;
import com.LiftoffApp.Gnotian.models.data.ArtistRepository;
import com.LiftoffApp.Gnotian.models.data.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Optional;

@Controller
public class SearchController {

    @Autowired
   ArtistRepository artistRepository;
    @Autowired
    ReviewRepository reviewRepository;


    @GetMapping("search")
    public String displaySearch(Model model){
        model.addAttribute(new Review());
        model.addAttribute("artists", artistRepository.findAll());
        return "search";
    }

    @PostMapping("search")
    public String displaySearchResults(Model model, @RequestParam String searchTerm){
        model.addAttribute("searchTerm", searchTerm);
        model.addAttribute(new Review());
        model.addAttribute("artists", artistRepository.findAll());
        return "search";
    }

    @PostMapping("/profile")
    public String addReview (@ModelAttribute Review newReview, Model model){

//        Optional<Artist> optArtist = artistRepository.findById(artist);
//        if (optArtist.isPresent()) {
//            Artist artist = optArtist.get();
//        }
        reviewRepository.save(newReview);
        model.addAttribute("reviews", reviewRepository.findAll());
        return "profile";
    }
}
