package com.kevin.workouts.data.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "exercise")

public class Exercise {
	
	@Id
	@Column(name = "ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "WORKOUT_ID")
	private long workoutId;
	
	@Column(name = "NAME")
	private String name;
	
	@Column(name = "SETS")
	private Integer sets;
	
	@Column(name = "REPS")
	private Integer reps;
	
	@Column(name = "WEIGHT")
	private Integer weight;
	
	@Column(name = "SUCCESS")
	private Boolean success;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getWorkoutId() {
		return workoutId;
	}

	public void setWorkoutId(long workoutId) {
		this.workoutId = workoutId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getSets() {
		return sets;
	}

	public void setSets(Integer sets) {
		this.sets = sets;
	}

	public Integer getReps() {
		return reps;
	}

	public void setReps(Integer reps) {
		this.reps = reps;
	}

	public Integer getWeight() {
		return weight;
	}

	public void setWeight(Integer weight) {
		this.weight = weight;
	}

	public Boolean getSuccess() {
		return success;
	}

	public void setSuccess(Boolean success) {
		this.success = success;
	}
	
}
