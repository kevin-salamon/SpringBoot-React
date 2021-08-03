/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";


// USER
export const getAllUsers = () => {
    return axios.get("/api/user");
}

export const getSingleUser = (id) => {
    return axios.get(`/api/user/${id}`);
}

export const deleteUser = (id) => {
    return axios.delete(`/api/user/${id}`);
}

export const editUser = (id, userData) => {
    return axios.put(`/api/user/${id}`, userData);
}

export const addUser = (userData) => {
    return axios.post(`/api/user/`, userData);
}


// WORKOUT
export const getAllWorkouts = () => {
    return axios.get("/api/workout");
}

export const getSingleWorkout = (id) => {
    return axios.get(`/api/workout/${id}`);
}

export const getWorkoutsByUser = (userId) => {
    return axios.get(`/api/workout/user/${userId}`);
}

export const deleteWorkout = (id) => {
    return axios.delete(`/api/workout/${id}`);
}

export const editWorkout = (id, workoutData) => {
    return axios.put(`/api/workout/${id}`, workoutData);
}

export const addWorkout = (workoutData) => {
    return axios.post("/api/workout", workoutData);
}


// EXERCISE
export const getAllExercises = () => {
    return axios.get("/api/exercise");
}

export const getSingleExercise = (id) => {
    return axios.get(`/api/exercise/${id}`);
}

export const getExercisesByWorkout = (workoutId) => {
    return axios.get(`/api/exercise/workout/${workoutId}`);
}

export const deleteExercise = (id) => {
    return axios.delete(`/api/exercise/${id}`);
}

export const editExercise = (id, exerciseData) => {
    return axios.put(`/api/exercise/${id}`, exerciseData);
}

export const addExercise = (exerciseData) => {
    return axios.post("/api/exercise", exerciseData);
}

export default {
    getAllUsers,
    getSingleUser,
    deleteUser,
    editUser,
    addUser,
    getAllWorkouts,
    getSingleWorkout,
    getWorkoutsByUser,
    deleteWorkout,
    editWorkout,
    addWorkout,
    getAllExercises,
    getSingleExercise,
    getExercisesByWorkout,
    deleteExercise,
    editExercise,
    addExercise
}