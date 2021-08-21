package com.dontfeed.Dont.Feed.service;

import com.dontfeed.Dont.Feed.model.Team;
import com.dontfeed.Dont.Feed.model.relationship.TeamLeague;
import com.dontfeed.Dont.Feed.repository.LeagueRepository;
import com.dontfeed.Dont.Feed.repository.TeamLeagueRepository;
import com.dontfeed.Dont.Feed.repository.TeamRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class TeamService {

	private final TeamRepository teamRepository;
	private final TeamLeagueRepository teamLeagueRepository;
	private final LeagueRepository leagueRepository;

	public Team saveTeam(final Team team) {
		teamRepository.save(team);
		return team;
	}

	public Team updateTeam(final Team team) {
		return teamRepository.save(team);
	}

	public void deleteTeam(Long teamId) {
		teamRepository.deleteById(teamId);
	}

	public Long numberOfTeams() {
		return teamRepository.count();
	}

	public List<Team> findAllTeams() {
		List<Team> teams = teamRepository.findAll();
		if (!teams.isEmpty()) {
			teams.forEach(team -> team.setLeagues(giveTeamProperTeamLeagues(team)));
		}
		return teams;
	}

	public Team findTeamById(Long id) {
		Team team = teamRepository.findById(id).orElse(null);
		if (team != null) {
			team.setLeagues(giveTeamProperTeamLeagues(team));
		}
		return team;
	}

	public Team findTeamByName(String name) {
		Team team = teamRepository.findByName(name).orElse(null);
		if (team != null) {
			team.setLeagues(giveTeamProperTeamLeagues(team));
		}
		return team;
	}

	public List<Team> findTeamsByLeagueId(Long leagueId) {
		List<Team> teams = teamRepository.findAllTeamsByLeagueId(leagueId);
		if (!teams.isEmpty()) {
			teams.forEach(team -> team.setLeagues(giveTeamProperTeamLeagues(team)));
		}
		return teams;
	}

	public List<TeamLeague> giveTeamProperTeamLeagues(Team team) {
		return teamLeagueRepository.findAllByTeam(team);
	}
}
