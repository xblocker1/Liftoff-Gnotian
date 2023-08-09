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
@RequestMapping("/api/reviews")
public class ApiReviewController {

    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private ArtistRepository artistRepository;

    @GetMapping
    public ResponseEntity<?> getAllReviews() {
        List<Review> reviews = (List<Review>) reviewRepository.findAll();
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }
}
