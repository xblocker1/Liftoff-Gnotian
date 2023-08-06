package com.LiftoffApp.Gnotian.models.data;

import com.LiftoffApp.Gnotian.models.Review;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends CrudRepository<Review,Integer> {
}
