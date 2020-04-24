package com.dontfeed.Dont.Feed.repository;

import com.dontfeed.Dont.Feed.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameRepository extends JpaRepository<Game, Long>{
}
