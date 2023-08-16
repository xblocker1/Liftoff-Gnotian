package com.LiftoffApp.Gnotian.controllers.api;

import com.LiftoffApp.Gnotian.models.Review;
import com.LiftoffApp.Gnotian.models.data.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/", maxAge = 400000)
@RestController
@RequestMapping("/api/reviews")
public class ApiReviewController {



    @Autowired
    private ReviewRepository reviewRepository;


    public ApiReviewController(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    @GetMapping
    public ResponseEntity<?> getAllReviews() {
        List<Review> reviews = (List<Review>) reviewRepository.findAll();
        return new ResponseEntity<>(reviews, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> newReview (@RequestBody Review newReview){
        reviewRepository.save(newReview);
        return new ResponseEntity<>(HttpStatus.OK);

    }
}
