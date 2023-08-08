package com.LiftoffApp.Gnotian.controllers;

import com.LiftoffApp.Gnotian.models.Artist;
import com.LiftoffApp.Gnotian.models.Review;
import com.LiftoffApp.Gnotian.models.data.ArtistRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HomeController {

    private final ArtistRepository artistRepository;

    public HomeController(ArtistRepository artistRepository) {
        this.artistRepository = artistRepository;
    }

    @GetMapping("")
    public String displayHomePage(){
        return "index";
    }

    @PostMapping("search")
    public String displaySearchResults(Model model, @RequestParam String searchTerm){
        model.addAttribute("searchTerm", searchTerm);
        model.addAttribute(new Review());
        model.addAttribute("artists", artistRepository.findAll());
        return "search";
    }

    @GetMapping("profile")
    public String displayProfile(Model model){
        return "profile";
    }


    @GetMapping("search")
    public String displaySearch(Model model){
        model.addAttribute(new Review());
        model.addAttribute("artists", artistRepository.findAll());
        return "search";
    }

}
