package com.dontfeed.Dont.Feed.service;

import com.dontfeed.Dont.Feed.model.Team;
import com.dontfeed.Dont.Feed.model.Tournament;
import com.dontfeed.Dont.Feed.repository.TeamRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class TeamService {

    private final TeamRepository teamRepository;

    public Team saveTeam(final Team team){
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
        return teamRepository.findAll();
    }

    public Team findTeamById(Long id) {
        return teamRepository.findById(id).orElse(null);
    }

    public Team findTeamByName(String name) {
        return teamRepository.findByName(name).orElse(null);
    }

}
