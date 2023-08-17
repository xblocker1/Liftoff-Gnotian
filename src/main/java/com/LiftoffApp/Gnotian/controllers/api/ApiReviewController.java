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

    @GetMapping("/{artist}")
    public ResponseEntity<?> getReviewsByArtist(@PathVariable String artist) {
        List<Review> artistReviews = reviewRepository.findByArtist(artist);
        return new ResponseEntity<>(artistReviews, HttpStatus.OK);

    }
    @GetMapping("/{id}")
    public ResponseEntity<?> getReviewsByUser(@PathVariable String user){
        List<Review> userReviews = reviewRepository.findByUser(user);
        return new ResponseEntity<>(userReviews, HttpStatus.OK);
    }
    @GetMapping("{uid}")
    public ResponseEntity<?> getReviewsBySong(@PathVariable String uid){
        List<Review> songReviews = reviewRepository.findByUid(uid);
        return new ResponseEntity<>(songReviews, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> newReview (@RequestBody Review newReview){
        reviewRepository.save(newReview);
        return new ResponseEntity<>(HttpStatus.OK);

    }
}
