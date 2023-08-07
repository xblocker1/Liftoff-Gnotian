package com.LiftoffApp.Gnotian.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class SearchController {

    @PostMapping("/profile")
    public String reviewSubmitted (Model model, @RequestParam String artist, @RequestParam String reviewBody){
        model.addAttribute("artist", artist);
        model.addAttribute("reviewBody", reviewBody);
        return "profile";
    }
}
