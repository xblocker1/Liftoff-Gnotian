package com.LiftoffApp.Gnotian.models.data;

import com.LiftoffApp.Gnotian.models.Profile;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfileRepository extends CrudRepository<Profile, Integer> {
}
