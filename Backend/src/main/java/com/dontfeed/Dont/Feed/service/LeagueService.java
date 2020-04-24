package com.dontfeed.Dont.Feed.service;

import com.dontfeed.Dont.Feed.model.League;

import java.util.List;

public interface LeagueService {
    League saveLeague(League league);

    League updateLeague(League league);

    void deleteLeague(Long leagueId);

    Long numberOfLeagues();

    List<League> findAllLeagues();
}
