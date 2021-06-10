package com.dontfeed.Dont.Feed.controller;

import com.dontfeed.Dont.Feed.model.Game;
import com.dontfeed.Dont.Feed.service.GameService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = GameController.PATH, produces = MediaType.APPLICATION_JSON_VALUE)
public class GameController {
	static final String PATH = "/api/games";
	private final GameService gameService;

	@GetMapping
	public ResponseEntity<?> getGames() {
		if (gameService.findAllGames() == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("No results found");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(gameService.findAllGames());
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getGameByID(@PathVariable Long id) {
		Game game = gameService.findGameByID(id);
		if (game == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("GameProfilePage does not exist with that ID");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(game);
	}

	@GetMapping("/name/{name}")
	public ResponseEntity<?> getGameByName(@PathVariable String name) {
		Game game = gameService.findGameByName(name);
		if (game == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("GameProfilePage does not exist with that name: " + name);
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(game);
	}

	@GetMapping("/count")
	public ResponseEntity<?> getNumberOfGames() {
		Long count = gameService.numberOfGames();
		if (count == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("Number of Games returns null");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(count);
	}

	@RequestMapping("/createGame")
	public ResponseEntity<?> createNewGame(@RequestBody Game game) {
		System.out.println("post test");
		String name = game.getName();
		if (gameService.findGameByName(name) != null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("GameProfilePage already exists at this name: " + name);
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(gameService.saveGame(game));
	}

	@RequestMapping("/update")
	public ResponseEntity<?> updateGame(@RequestBody Game game) {
		Game returnedGame = gameService.updateGame(game);
		if (returnedGame == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("GameProfilePage does not exist. Check you facts.");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(returnedGame);
	}

	@RequestMapping("/deleteGame/{id}")
	public ResponseEntity<?> deleteGame(@PathVariable Long id) {
		System.out.println("IN DELETE");
		if (gameService.findGameByID(id) == null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("GameProfilePage does not exist at the ID");
		}
		gameService.deleteGame(id);
		if (gameService.findGameByID(id) != null) {
			return ResponseEntity
					.status(HttpStatus.BAD_REQUEST)
					.body("GameProfilePage was not deleted successfully");
		}
		return ResponseEntity
				.status(HttpStatus.OK)
				.body("User Deleted Successfully");
	}
}