package com.dontfeed.Dont.Feed.controller;

import com.dontfeed.Dont.Feed.model.Tournament;
import com.dontfeed.Dont.Feed.service.TournamentService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = TournamentController.PATH, produces = MediaType.APPLICATION_JSON_VALUE)
public class TournamentController {

	static final String PATH = "/api/tournaments";
	private final TournamentService tournamentService;

	@GetMapping
	public ResponseEntity<?> getTournaments() {
		if (tournamentService.findAllTournaments() == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("No results found");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(tournamentService.findAllTournaments());
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getTournamentByID(@PathVariable Long id) {
		Tournament tournament = tournamentService.findTournamentById(id);
		if (tournament == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("Tournament does not exist with that ID");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(tournament);
	}

	@GetMapping("/name/{name}")
	public ResponseEntity<?> getTournamentByName(@PathVariable String name) {
		Tournament tournament = tournamentService.findTournamentByName(name);
		if (tournament == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("Tournament does not exist with that name: " + name);
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(tournament);
	}

	@GetMapping("/count")
	public ResponseEntity<?> getNumberOfTournaments() {
		Long count = tournamentService.numberOfTournaments();
		if (count == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("Number of Tournaments returns null");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(count);
	}

    @PostMapping
	public ResponseEntity<?> createNewTournament(@RequestBody Tournament tournament) {
		String name = tournament.getName();
		if (tournamentService.findTournamentByName(name) != null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("Tournament already exists at this name: " + name);
		}
		return ResponseEntity
		.status(HttpStatus.OK)
		.body(tournamentService.saveTournament(tournament));
	}

	@PutMapping("/update")
	public ResponseEntity<?> updateTournament(@RequestBody Tournament tournament) {
		Tournament returnedTournament = tournamentService.updateTournament(tournament);
		if (returnedTournament == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("Tournament does not exist. Check you facts.");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(returnedTournament);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteTournament(@PathVariable Long id) {
		if (tournamentService.findTournamentById(id) == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("Tournament does not exist at the ID");
		}
		tournamentService.deleteTournament(id);
		if (tournamentService.findTournamentById(id) != null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("Tournament was not deleted successfully");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body("User Deleted Successfully");
	}
}
