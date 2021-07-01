package com.kevin.workouts.data.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.kevin.workouts.data.entity.Exercise;

@Repository
public interface ExerciseRepository extends CrudRepository<Exercise, Long> {

}
