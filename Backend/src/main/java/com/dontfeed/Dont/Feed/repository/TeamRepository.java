package com.dontfeed.Dont.Feed.repository;

import com.dontfeed.Dont.Feed.model.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface TeamRepository extends JpaRepository<Team, Long> {
	@Query(value = "SELECT t.*" +
					"FROM teams t " +
					"JOIN  teams_leagues tl on tl.team_id = t.id " +
					"JOIN leagues l on l.id = tl.league_id " +
					"WHERE l.id = ?1",
			nativeQuery = true)
	List<Team> findAllTeamsByLeagueId(Long leagueId);

	Optional<Team> findByName(String name);
}

