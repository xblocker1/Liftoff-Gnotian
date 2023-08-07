package com.LiftoffApp.Gnotian.models.data;

import com.LiftoffApp.Gnotian.models.Review;
import jakarta.transaction.Transactional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
public interface ReviewRepository extends CrudRepository<Review,Integer> {
}
