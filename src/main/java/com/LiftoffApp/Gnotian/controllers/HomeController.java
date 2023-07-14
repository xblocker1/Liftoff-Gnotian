package com.LiftoffApp.Gnotian.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HomeController {

    @RequestMapping("")
    public String index(Model model){
        return "index";
    }

    @PostMapping("search")
    public String displaySearchResults(Model model, @RequestParam String searchTerm){
        model.addAttribute("searchTerm", searchTerm);
        return "search";
    }

    @GetMapping("profile")
    public String displayProfile(Model model){
        return "profile";
    }
}
