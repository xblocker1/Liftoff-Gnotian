package com.LiftoffApp.Gnotian.models.data;

import com.LiftoffApp.Gnotian.models.Review;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends CrudRepository<Review,Integer> {

    List<Review> findByArtist(String artist);
//    List<Review> findByUser(String user);
    List<Review> findByUri(String uri);
}
