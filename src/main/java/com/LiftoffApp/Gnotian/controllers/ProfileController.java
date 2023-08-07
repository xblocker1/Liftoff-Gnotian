package com.LiftoffApp.Gnotian.controllers;


import com.LiftoffApp.Gnotian.models.Profile;
import com.LiftoffApp.Gnotian.models.data.ProfileRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("profile")
public class ProfileController {

//@Autowired
//private ProfileRepository profileRepository;


@GetMapping("")
    public String displayProfile(){
return "profile";
}

@GetMapping("reviews")
    public String displayReviewsOnProfile(){
    return "";
}

@PostMapping("")
    public String submitFaveArtist(Model model, @RequestParam String faveArtist) {
    model.addAttribute("faveArtist", faveArtist);
    return "profile";
}

//@GetMapping("add")
//public String displayAddProfilePicture(Model model){
//    model.addAttribute(new Profile());
//    return "profile/add";
//}

//@PostMapping("add")
//    public String processAddProfilePicture(@ModelAttribute @Valid Profile newProfile
//            Errors errors, Model model){
//
//    if(errors.hasErrors()){
//        return "profile/add";
//    }
//    profileRepository.save(newProfile);
//    return "redirect:";
//}
//
}
