package com.dontfeed.Dont.Feed.controller;

import com.dontfeed.Dont.Feed.model.User;
import com.dontfeed.Dont.Feed.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = UserController.PATH, produces = MediaType.APPLICATION_JSON_VALUE)
public class UserController {

	protected static final String PATH = "/api/users";
	private final UserService userService;

	// full path is "/api/users"
	@GetMapping()
	public ResponseEntity<?> getUsers() {
		List<User> users = userService.findAllUsers();
		if (users == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("Something went wrong when attempting to achieve all users");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(users);
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getUserById(@PathVariable Long id) {
		User user = userService.findById(id);
		if (user == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("User does not exist with that ID");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(user);
	}

	@GetMapping("/byTeam/{teamId}")
	public ResponseEntity<?> getUsersByTeamId(@PathVariable Long teamId) {
		List<User> users = userService.findAllUsersByTeamId(teamId);
		if (users == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("Could not find any users on that team or team doesnt exist");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(users);
	}

	@GetMapping("?email={email}")
	public ResponseEntity<?> getUserByEmail(@PathVariable String email) {
		User user = userService.findByEmail(email);
		if (user == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("Tournament does not exist with that email address");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(user);
	}

	@GetMapping("?username={username}")
	public ResponseEntity<?> getUserByUsername(@PathVariable String username) {
		User user = userService.findByUsername(username);
		if (user == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("Tournament does not exist with that username");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(user);
	}

	@GetMapping("/count")
	public ResponseEntity<?> getNumberOfUsers() {
		Long count = userService.numberOfUsers();
		if (count == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("Number of Users returns null");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(count);
	}

	@PutMapping("/update")
	public ResponseEntity<?> updateUser(@RequestBody User user) {
		User returnedUser = userService.updateUser(user);
		if (returnedUser == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("User does not exist. Check you facts.");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(returnedUser);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteUser(@PathVariable Long id) {
		if (userService.findById(id) == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("User does not exist at that id");
		}
		userService.deleteUser(id);
		if (userService.findById(id) != null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("User was not successfully deleted");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body("User Successfully Deleted");
	}
}
