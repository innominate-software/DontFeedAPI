package com.dontfeed.Dont.Feed.service;

import com.dontfeed.Dont.Feed.model.Match;

import java.util.List;

public interface MatchService {

    Match saveMatch(Match match);

    Match updateMatch(Match match);

    void deleteMatch(Long matchId);

    Long numberOfMatches();

    List<Match> findAllMatches();
}
