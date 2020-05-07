package com.dontfeed.Dont.Feed.controller;

import com.dontfeed.Dont.Feed.model.Team;
import com.dontfeed.Dont.Feed.service.TeamService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = TeamController.PATH, produces = MediaType.APPLICATION_JSON_VALUE)
public class TeamController {

	static final String PATH = "/api/teams";
	private final TeamService teamService;

	@GetMapping
	public ResponseEntity<?> getTeams() {
		if (teamService.findAllTeams() == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("No results found");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(teamService.findAllTeams());
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getTeamByID(@PathVariable Long id) {
		Team team = teamService.findTeamById(id);
		if (team == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("Team does not exist with that ID");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(team);
	}

	@GetMapping("/name/{name}")
	public ResponseEntity<?> getTeamByName(@PathVariable String name) {
		Team team = teamService.findTeamByName(name);
		if (team == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("Team does not exist with that name: " + name);
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(team);
	}

	@GetMapping("/count")
	public ResponseEntity<?> getNumberOfTeams() {
		Long count = teamService.numberOfTeams();
		if (count == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("Number of Teams returns null");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(count);
	}

	@PostMapping
	public ResponseEntity<?> createNewTeam(@RequestBody Team team) {
		String name = team.getName();
		if (teamService.findTeamByName(name) != null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("Team already exists at this name: " + name);
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(teamService.saveTeam(team));
	}

	@PutMapping("/update")
	public ResponseEntity<?> updateTeam(@RequestBody Team team) {
		Team returnedTeam = teamService.updateTeam(team);
		if (returnedTeam == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("Team does not exist. Check you facts.");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(returnedTeam);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteTeam(@PathVariable Long id) {
		if (teamService.findTeamById(id) == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("Team does not exist at the ID");
		}
		teamService.deleteTeam(id);
		if (teamService.findTeamById(id) != null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("Team was not deleted successfully");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body("User Deleted Successfully");
	}
}
