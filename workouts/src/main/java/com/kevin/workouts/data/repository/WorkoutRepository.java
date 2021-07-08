package com.kevin.workouts.data.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.kevin.workouts.data.entity.Workout;

@Repository
public interface WorkoutRepository extends CrudRepository<Workout, Long> {
	List<Workout> findByUserId(long id);
}