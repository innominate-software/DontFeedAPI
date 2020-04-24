package com.dontfeed.Dont.Feed.service;

import com.dontfeed.Dont.Feed.model.Match;
import com.dontfeed.Dont.Feed.model.Tournament;

import java.util.List;

public interface TournamentService {

    Tournament saveTournament(Tournament tournament);

    Tournament updateMatch(Tournament tournament);

    void deleteMatch(Long tournamentId);

    Long numberOfTournaments();

    List<Tournament> findAllTournaments();

}
