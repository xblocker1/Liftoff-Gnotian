package com.LiftoffApp.Gnotian.controllers.api;

import com.LiftoffApp.Gnotian.models.Artist;
import com.LiftoffApp.Gnotian.models.Review;
import com.LiftoffApp.Gnotian.models.data.ArtistRepository;
import com.LiftoffApp.Gnotian.models.data.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 4000)
@RestController
@RequestMapping("/api/profile")
public class ApiReviewController {

    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private ArtistRepository artistRepository;

//    @GetMapping
//    public ResponseEntity<?> getArtistReviews(@RequestParam int artistId) {
//        List<Review> artistReviews = (List<Review>) reviewRepository.findById(artistId);
//        return new ResponseEntity<>(artistReviews, HttpStatus.OK);
//    }
}
