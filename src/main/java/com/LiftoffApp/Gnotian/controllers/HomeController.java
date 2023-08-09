package com.LiftoffApp.Gnotian.controllers;

import com.LiftoffApp.Gnotian.models.Review;
import com.LiftoffApp.Gnotian.models.data.ArtistRepository;
import com.LiftoffApp.Gnotian.models.data.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HomeController {

    @Autowired
    ArtistRepository artistRepository;
    @Autowired
    ReviewRepository reviewRepository;


    @GetMapping("")
    public String displayHomePage(){
        return "index";
    }


    @GetMapping("profile")
    public String displayProfile(Model model){
        model.addAttribute("reviews", reviewRepository.findAll());
        return "profile";
    }



    @GetMapping("reviews")
    public String displayReviews(Model model){
        model.addAttribute("reviews", reviewRepository.findAll());
        return "reviews";
    }

}
