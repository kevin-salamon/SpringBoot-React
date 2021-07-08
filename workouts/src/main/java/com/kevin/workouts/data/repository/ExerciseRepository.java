package com.kevin.workouts.data.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.kevin.workouts.data.entity.Exercise;


@Repository
public interface ExerciseRepository extends CrudRepository<Exercise, Long> {
	List<Exercise> findByWorkoutId(long id);
}
