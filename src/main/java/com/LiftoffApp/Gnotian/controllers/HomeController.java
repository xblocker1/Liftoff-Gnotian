package com.LiftoffApp.Gnotian.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.context.request.WebRequest;

@Controller
public class HomeController {


    @GetMapping("")
    public String displayHomePage(){
        return "index";
    }

    @PostMapping("search")
    public String displaySearchResults(Model model, @RequestParam String searchTerm){
        model.addAttribute("searchTerm", searchTerm);
        return "search";
    }

    @GetMapping("profile")
    public String displayProfile(Model model){
//        model.addAttribute("reviews", reviewRepository.findAll());
        return "profile";
    }


    @GetMapping("search")
    public String displaySearch(){
        return "search";
    }


    @GetMapping("/user/register")
    public String displayRegistrationPage(WebRequest request, Model model) {
        return "/user/register";
    }
}
