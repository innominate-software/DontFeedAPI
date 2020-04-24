package com.dontfeed.Dont.Feed.service;

import com.dontfeed.Dont.Feed.model.Tournament;
import com.dontfeed.Dont.Feed.repository.TournamentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TournamentServiceImpl implements TournamentService{

    @Autowired
    private TournamentRepository tournamentRepository;

    @Override
    public Tournament saveTournament(Tournament tournament) {
        tournamentRepository.save(tournament);
        return tournament;
    }

    @Override
    public Tournament updateMatch(Tournament tournament) {
        return tournamentRepository.save(tournament);
    }

    @Override
    public void deleteMatch(Long tournamentId) {
        tournamentRepository.deleteById(tournamentId);
    }

    @Override
    public Long numberOfTournaments() {
        return tournamentRepository.count();
    }

    @Override
    public List<Tournament> findAllTournaments() {
        return tournamentRepository.findAll();
    }
}
