package com.LiftoffApp.Gnotian.models.data;

import com.LiftoffApp.Gnotian.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
}
