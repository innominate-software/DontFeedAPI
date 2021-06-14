package com.dontfeed.Dont.Feed.repository;

import com.dontfeed.Dont.Feed.model.League;
import com.dontfeed.Dont.Feed.model.Match;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MatchRepository extends JpaRepository<Match, Long>{
	@Query(
			value = "SELECT m, mp " +
					"FROM Match m " +
					"JOIN MatchPlayer mp on mp.match = m " +
					"JOIN User u on u = mp.player " +
					"WHERE u.id = ?1")
	List<Match> findAllMatchesByUserID(Long userId);

	@Query(
			value = "SELECT m.*, tm.* " +
					"FROM matches m " +
					"JOIN  teams_matches tm on tm.match_id = m.id " +
					"JOIN teams t on t.id = tm.team_id " +
					"WHERE t.id = ?1",
	nativeQuery = true)
	List<Match> findAllMatchesByTeamID(Long teamId);


	List<Match> findAllByLeague(League league);
}

