package com.LiftoffApp.Gnotian.models.data;

import com.LiftoffApp.Gnotian.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {

    User findByUsername(String username);



}

