package com.dontfeed.Dont.Feed.controller;

import com.dontfeed.Dont.Feed.model.Match;
import com.dontfeed.Dont.Feed.service.MatchService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = MatchController.PATH, produces = MediaType.APPLICATION_JSON_VALUE)
public class MatchController {

	static final String PATH = "/api/matches";
	private final MatchService matchService;

	@GetMapping
	public ResponseEntity<?> getMatches() {
		if (matchService.findAllMatches() == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("No results found");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(matchService.findAllMatches());
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getMatchByID(@PathVariable Long id) {
		Match match = matchService.findMatchById(id);
		if (match == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("Match does not exist with that ID");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(match);
	}

	@GetMapping("/id/{matchId}")
	public ResponseEntity<?> getMatchByName(@PathVariable long matchId) {
		Match match = matchService.findMatchByMatchId(matchId);
		if (match == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("Match does not exist with that match id: " + matchId);
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(match);
	}

	@GetMapping("/count")
	public ResponseEntity<?> getNumberOfMatches() {
		Long count = matchService.numberOfMatches();
		if (count == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("Number of Matches returns null");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(count);
	}

	@PostMapping
	public ResponseEntity<?> createNewMatch(@RequestBody Match match) {
		long matchId = match.getMatchId();
		if (matchService.findMatchByMatchId(matchId) != null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("Match already exists at this match id: " + matchId);
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(matchService.saveMatch(match));
	}

	@PutMapping("/update")
	public ResponseEntity<?> updateMatch(@RequestBody Match match) {
		Match returnedMatch = matchService.updateMatch(match);
		if (returnedMatch == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("Match does not exist. Check you facts.");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(returnedMatch);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteMatch(@PathVariable Long id) {
		if (matchService.findMatchById(id) == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("Match does not exist at the ID");
		}
		matchService.deleteMatch(id);
		if (matchService.findMatchById(id) != null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("Match was not deleted successfully");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body("User Deleted Successfully");
	}
}