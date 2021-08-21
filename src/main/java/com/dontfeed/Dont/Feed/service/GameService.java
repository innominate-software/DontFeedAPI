package com.dontfeed.Dont.Feed.service;

import com.dontfeed.Dont.Feed.model.Game;
import com.dontfeed.Dont.Feed.repository.GameRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@AllArgsConstructor
public class GameService {

	private final GameRepository gameRepository;

	public Game saveGame(final Game game){
		gameRepository.save(game);
		return game;
	}

	public Game updateGame(final Game game){
		return gameRepository.save(game);
	}

	public void deleteGame(final Long gameId){
		gameRepository.deleteById(gameId);
	}

	public Long numberOfGames(){
		return gameRepository.count();
	}

	public List<Game> findAllGames(){
		return gameRepository.findAll();
	}

	public Game findGameByID(Long id) {
		return gameRepository.findById(id).orElse(null);
	}

	public Game findGameByName(String name) {
		return gameRepository.findByName(name).orElse(null);
	}

}
