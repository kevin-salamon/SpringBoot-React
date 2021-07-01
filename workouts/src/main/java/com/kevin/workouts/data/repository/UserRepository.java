package com.kevin.workouts.data.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.kevin.workouts.data.entity.User;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

}
