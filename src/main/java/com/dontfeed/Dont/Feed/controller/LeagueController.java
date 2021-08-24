package com.dontfeed.Dont.Feed.controller;

import com.dontfeed.Dont.Feed.model.League;
import com.dontfeed.Dont.Feed.service.LeagueService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = LeagueController.PATH, produces = MediaType.APPLICATION_JSON_VALUE)
public class LeagueController {

	static final String PATH = "/api/leagues";
	private final LeagueService leagueService;

	@GetMapping
	public ResponseEntity<?> getLeagues() {
		if (leagueService.findAllLeagues() == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("No results found");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(leagueService.findAllLeagues());
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getLeagueByID(@PathVariable Long id) {
		League league = leagueService.findLeagueByID(id);
		if (league == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("LeagueProfilePage does not exist with that ID");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(league);
	}

	@GetMapping("/name/{name}")
	public ResponseEntity<?> getLeagueByName(@PathVariable String name) {
		League league = leagueService.findLeagueByName(name);
		if (league == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("LeagueProfilePage does not exist with that name: " + name);
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(league);
	}
	
	@GetMapping("/existsByName/{name}")
	public Boolean checkIfNameExists(@PathVariable String name) {
		return leagueService.existsByName(name);
	}

	@GetMapping("/count")
	public ResponseEntity<?> getNumberOfLeagues() {
		Long count = leagueService.numberOfLeagues();
		if (count == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("Number of Leagues returns null");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(count);
	}

	@RequestMapping("/createLeague")
	public ResponseEntity<?> createNewLeague(@RequestBody League league) {
		String name = league.getName();
		if (leagueService.findLeagueByName(name) != null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("LeagueProfilePage already exists at this name: " + name);
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(leagueService.saveLeague(league));
	}

	@RequestMapping("/update")
	public ResponseEntity<?> updateLeague(@RequestBody League league) {
		League returnedLeague = leagueService.updateLeague(league);
		if (returnedLeague == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("LeagueProfilePage does not exist. Check your facts.");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(returnedLeague);
	}

	@RequestMapping("/deleteLeague/{id}")
	public ResponseEntity<?> deleteLeague(@PathVariable Long id) {
		System.out.println("IN DELETE");
		if (leagueService.findLeagueByID(id) == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("LeagueProfilePage does not exist at the ID");
		}
		leagueService.deleteLeague(id);
		if (leagueService.findLeagueByID(id) != null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("LeagueProfilePage was not deleted successfully");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body("User Deleted Successfully");
	}
}