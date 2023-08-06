package com.LiftoffApp.Gnotian.models.data;

import com.LiftoffApp.Gnotian.models.Artist;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArtistRepository extends CrudRepository<Artist, Integer> {
}
