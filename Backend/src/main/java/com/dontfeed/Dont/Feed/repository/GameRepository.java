package com.dontfeed.Dont.Feed.repository;

import com.dontfeed.Dont.Feed.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface GameRepository extends JpaRepository<Game, Long>{
	Optional<Game> findByName(String name);
}
