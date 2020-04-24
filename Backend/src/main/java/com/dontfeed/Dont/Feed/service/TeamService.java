package com.dontfeed.Dont.Feed.service;

import com.dontfeed.Dont.Feed.model.Team;

import java.util.List;

public interface TeamService {
    Team saveTeam(Team team);

    Team updateTeam(Team team);

    void deleteTeam(Long teamId);

    Long numberOfTeams();

    List<Team> findAllTeams();
}
