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

import com.kevin.workouts.data.entity.Exercise;
import com.kevin.workouts.data.repository.ExerciseRepository;

@RestController
@RequestMapping(value = "/api")
public class ExerciseController {

	@Autowired
	private ExerciseRepository exerciseRepository;
	
	@RequestMapping(value = "/exercise", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Exercise>> getAllExercises() {
		List<Exercise> exercises = (List<Exercise>) exerciseRepository.findAll();
		if (exercises.isEmpty()) {
			return new ResponseEntity<List<Exercise>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Exercise>>(exercises, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/exercise/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Exercise> getExercisesById(@PathVariable("id") long id) {
		Optional<Exercise> optionalExercise = exerciseRepository.findById(id);
		if (optionalExercise.isPresent()) {
			Exercise exercise = optionalExercise.get();
			return new ResponseEntity<Exercise>(exercise, HttpStatus.OK);
		}
		return new ResponseEntity<Exercise>(HttpStatus.NO_CONTENT);
	}
	
	@RequestMapping(value = "/exercise/workout/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Exercise>> getExercisesByWorkoutId(@PathVariable("id") long id) {
		List<Exercise> exercises = exerciseRepository.findByWorkoutId(id);
		if (exercises.isEmpty()) {
			return new ResponseEntity<List<Exercise>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Exercise>>(exercises, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/exercise/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Exercise> deleteExercise(@PathVariable("id") long id) {
		
		Optional<Exercise> optionalExercise = exerciseRepository.findById(id);
		if (optionalExercise.isPresent()) {
			Exercise exercise = optionalExercise.get();
			exerciseRepository.deleteById(id);
			return new ResponseEntity<Exercise>(exercise, HttpStatus.OK);
		}
		
		return new ResponseEntity<Exercise>(HttpStatus.NO_CONTENT);
	}
	
	@RequestMapping(value = "/exercise/{id}", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Exercise> updateExercise(@PathVariable("id") long id, @RequestBody Exercise exercise) {
		Optional<Exercise> optionalExercise = exerciseRepository.findById(id);
		
		if (optionalExercise.isPresent()) {
			Exercise currentExercise = optionalExercise.get();
			currentExercise.setWorkoutId(exercise.getWorkoutId());
			currentExercise.setExerciseName(exercise.getExerciseName());
			currentExercise.setReps(exercise.getReps());
			currentExercise.setSets(exercise.getSets());
			currentExercise.setWeight(exercise.getWeight());
			exerciseRepository.save(currentExercise);
			return new ResponseEntity<Exercise>(currentExercise, HttpStatus.OK);
		}
		
		return new ResponseEntity<Exercise>(HttpStatus.NO_CONTENT);
		
	}
	
	@RequestMapping(value = "/exercise", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Exercise> createExercise(@RequestBody Exercise exercise, UriComponentsBuilder ucBuilder) {
		if (exerciseRepository.existsById(exercise.getId())) {
			return new ResponseEntity<Exercise>(HttpStatus.CONFLICT);
		}
		
		exerciseRepository.save(exercise);
		return new ResponseEntity<Exercise>(exercise, HttpStatus.OK);
	}
}
