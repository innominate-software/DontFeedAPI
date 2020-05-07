package com.dontfeed.Dont.Feed.repository;

import com.dontfeed.Dont.Feed.model.Team;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TeamRepository extends JpaRepository<Team, Long>{
	Optional<Team> findByName(String name);
}

