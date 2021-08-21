package com.dontfeed.Dont.Feed.service;

import com.dontfeed.Dont.Feed.model.Tournament;
import com.dontfeed.Dont.Feed.repository.TournamentRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class TournamentService {

    private final TournamentRepository tournamentRepository;
    
    public List<Tournament> findAllTournaments() {
        return tournamentRepository.findAll();
    }

    public Tournament findTournamentById(Long id) {
        return tournamentRepository.findById(id).orElse(null);
    }

    public Tournament findTournamentByName(String name) {
        return tournamentRepository.findByName(name).orElse(null);
    }

    public Tournament saveTournament(Tournament tournament) {
        tournamentRepository.save(tournament);
        return tournament;
    }

    public Tournament updateTournament(Tournament tournament) {
        return tournamentRepository.save(tournament);
    }

    public void deleteTournament(Long tournamentId) {
        tournamentRepository.deleteById(tournamentId);
    }

    public Long numberOfTournaments() {
        return tournamentRepository.count();
    }
}
