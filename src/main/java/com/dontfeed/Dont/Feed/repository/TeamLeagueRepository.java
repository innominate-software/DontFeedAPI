package com.dontfeed.Dont.Feed.repository;

import com.dontfeed.Dont.Feed.model.Team;
import com.dontfeed.Dont.Feed.model.relationship.TeamLeague;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TeamLeagueRepository extends JpaRepository<TeamLeague, Long> {
	public List<TeamLeague> findAllByTeam(Team team);
}
