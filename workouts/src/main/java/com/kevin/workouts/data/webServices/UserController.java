package com.kevin.workouts.data.webServices;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.kevin.workouts.data.entity.User;
import com.kevin.workouts.data.repository.UserRepository;

@RestController
@RequestMapping(value = "/api")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	@RequestMapping(value = "/user", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<User>> getAllUsers() {
		List<User> users = (List<User>) userRepository.findAll();
		if (users.isEmpty()) {
			return new ResponseEntity<List<User>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<User>>(users, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/user/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> getUserById(@PathVariable("id") long id) {
		Optional<User> optionalUser = userRepository.findById(id);
		if (optionalUser.isPresent()) {
			User user = optionalUser.get();
			return new ResponseEntity<User>(user, HttpStatus.OK);
		}
		return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
	}
	
	@RequestMapping(value = "/user/{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> deleteUser(@PathVariable("id") long id) {
		
		Optional<User> optionalUser = userRepository.findById(id);
		if (optionalUser.isPresent()) {
			User user = optionalUser.get();
			userRepository.deleteById(id);
			return new ResponseEntity<User>(user, HttpStatus.OK);
		}
		
		return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
	}
	
	@RequestMapping(value = "user/{id}", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> updateUser(@PathVariable("id") long id, @RequestBody User user) {
		Optional<User> optionalUser = userRepository.findById(id);
		
		if (optionalUser.isPresent()) {
			User currentUser = optionalUser.get();
			currentUser.setUserName(user.getUserName());
			currentUser.setFirstName(user.getUserName());
			currentUser.setLastName(user.getLastName());
			currentUser.setEmailAddress(user.getEmailAddress());
			userRepository.save(currentUser);
			return new ResponseEntity<User>(currentUser, HttpStatus.OK);
		}
		
		return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
		
	}
	
	@RequestMapping(value = "user", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> createClient(@RequestBody User user, UriComponentsBuilder ucBuilder) {
		if (userRepository.existsById(user.getId())) {
			return new ResponseEntity<User>(HttpStatus.CONFLICT);
		}
		
		userRepository.save(user);
//		HttpHeaders headers = new HttpHeaders();
//		headers.setLocation(ucBuilder.path("/user/{id}").buildAndExpand(user.getId()).toUri());
//		return new ResponseEntity<User>(headers, HttpStatus.CREATED);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
}
