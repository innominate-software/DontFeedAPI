package com.dontfeed.Dont.Feed.repository;

import com.dontfeed.Dont.Feed.model.Match;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MatchRepository extends JpaRepository<Match, Long>{
	Optional<Match> findByMatchId(Long id);
}

