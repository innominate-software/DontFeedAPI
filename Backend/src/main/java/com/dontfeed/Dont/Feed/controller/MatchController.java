package com.dontfeed.Dont.Feed.controller;

import com.dontfeed.Dont.Feed.model.Match;
import com.dontfeed.Dont.Feed.service.LeagueService;
import com.dontfeed.Dont.Feed.service.MatchService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = MatchController.PATH, produces = MediaType.APPLICATION_JSON_VALUE)
public class MatchController {

	static final String PATH = "/api/matches";
	private final MatchService matchService;
	private final LeagueService leagueService;

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

	@GetMapping("/byUser/{userId}")
	public ResponseEntity<?> getMatchesByUserID(@PathVariable Long userId) {
		List<Match> matches = matchService.findAllMatchesByUserId(userId);
		if (matches == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("No Matches are retrieved with that user ID");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(matches);
	}

	@GetMapping("/byTeam/{teamId}")
	public ResponseEntity<?> getMatchesByTeamID(@PathVariable Long teamId) {
		List<Match> matches = matchService.findAllMatchesByTeamId(teamId);
		if (matches == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("No Matches are retrieved with that team ID");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(matches);
	}

	@GetMapping("/byLeague/{leagueId}")
	public ResponseEntity<?> getMatchesByLeagueID(@PathVariable Long leagueId) {
		List<Match> matches = matchService.findAllByLeague(leagueService.findLeagueByID(leagueId));
		if (matches == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("No Matches are retrieved with that league ID");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(matches);
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
		long id = match.getId();
		if (matchService.findMatchById(id) != null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("Match already exists at this id: " + id);
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
					.body("MatchInfoPage does not exist. Check you facts.");
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
					.body("MatchInfoPage does not exist at the ID");
		}
		matchService.deleteMatch(id);
		if (matchService.findMatchById(id) != null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("MatchInfoPage was not deleted successfully");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body("User Deleted Successfully");
	}
}