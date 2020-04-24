package com.dontfeed.Dont.Feed.service;

import com.dontfeed.Dont.Feed.model.Team;
import com.dontfeed.Dont.Feed.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeamServiceImpl implements TeamService{

    @Autowired
    private TeamRepository teamRepository;

    @Override
    public Team saveTeam(final Team team){
        teamRepository.save(team);
        return team;
    }

    @Override
    public Team updateTeam(final Team team) {
        return teamRepository.save(team);
    }

    @Override
    public void deleteTeam(Long teamId) {
        teamRepository.deleteById(teamId);
    }

    @Override
    public Long numberOfTeams() {
        return teamRepository.count();
    }

    @Override
    public List<Team> findAllTeams() {
        return teamRepository.findAll();
    }


}
