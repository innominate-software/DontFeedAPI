package com.dontfeed.Dont.Feed.repository;

import com.dontfeed.Dont.Feed.model.Tournament;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TournamentRepository extends JpaRepository<Tournament, Long>{
	Optional<Tournament> findByName(String name);
}
