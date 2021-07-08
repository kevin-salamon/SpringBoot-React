package com.kevin.workouts.data.webServices;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.kevin.workouts.data.entity.Workout;
import com.kevin.workouts.data.repository.WorkoutRepository;

@RestController
@RequestMapping(value = "/api")
public class WorkoutController {

	@Autowired
	private WorkoutRepository workoutRepository;
	
	@RequestMapping(value = "/workout", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Workout>> getAllWorkouts() {
		List<Workout> workouts = (List<Workout>) workoutRepository.findAll();
		if (workouts.isEmpty()) {
			return new ResponseEntity<List<Workout>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Workout>>(workouts, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/workout/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Workout> getWorkoutById(@PathVariable("id") long id) {
		Optional<Workout> optionalWorkout = workoutRepository.findById(id);
		if (optionalWorkout.isPresent()) {
			Workout workout = optionalWorkout.get();
			return new ResponseEntity<Workout>(workout, HttpStatus.OK);
		}
		return new ResponseEntity<Workout>(HttpStatus.NO_CONTENT);
	}
	
	@RequestMapping(value = "/workout/user/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Workout>> getWorkoutByUserId(@PathVariable("id") long id) {
		List<Workout> workouts = workoutRepository.findByUserId(id);
		if (workouts.isEmpty()) {
			return new ResponseEntity<List<Workout>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Workout>>(workouts, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/workout/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Workout> deleteWorkout(@PathVariable("id") long id) {
		
		Optional<Workout> optionalWorkout = workoutRepository.findById(id);
		if (optionalWorkout.isPresent()) {
			Workout workout = optionalWorkout.get();
			workoutRepository.deleteById(id);
			return new ResponseEntity<Workout>(workout, HttpStatus.OK);
		}
		
		return new ResponseEntity<Workout>(HttpStatus.NO_CONTENT);
	}
	
	@RequestMapping(value = "workout/{id}", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Workout> updateWorkout(@PathVariable("id") long id, @RequestBody Workout workout) {
		Optional<Workout> optionalWorkout = workoutRepository.findById(id);
		
		if (optionalWorkout.isPresent()) {
			Workout currentWorkout = optionalWorkout.get();
			// look up how to make these puts only occur if filled (check if that's even happening)
			currentWorkout.setUserId(workout.getUserId());
			currentWorkout.setWorkoutDate(workout.getWorkoutDate());
			workoutRepository.save(currentWorkout);
			return new ResponseEntity<Workout>(currentWorkout, HttpStatus.OK);
		}
		
		return new ResponseEntity<Workout>(HttpStatus.NO_CONTENT);
		
	}
	
	@RequestMapping(value = "/workout", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Workout> createWorkout(@RequestBody Workout workout, UriComponentsBuilder ucBuilder) {
		if (workoutRepository.existsById(workout.getId())) {
			return new ResponseEntity<Workout>(HttpStatus.CONFLICT);
		}
		
		workoutRepository.save(workout);
		return new ResponseEntity<Workout>(workout, HttpStatus.OK);
	}
}
