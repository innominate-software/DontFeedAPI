package com.dontfeed.Dont.Feed.service;

import com.dontfeed.Dont.Feed.model.Match;
import com.dontfeed.Dont.Feed.repository.MatchRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class MatchService {

    private final MatchRepository matchRepository;
    
    public Match saveMatch(final Match match) {
        matchRepository.save(match);
        return match;
    }
    
    public Match updateMatch(Match match) {
        return matchRepository.save(match);
    }
    
    public void deleteMatch(Long matchId) {
        matchRepository.deleteById(matchId);
    }
    
    public Long numberOfMatches() {
        return matchRepository.count();
    }

    public List<Match> findAllMatches() {
        return matchRepository.findAll();
    }

    public Match findMatchById(Long id) {
        return matchRepository.findById(id).orElse(null);
    }

    public Match findMatchByMatchId(Long id) {
        return matchRepository.findByMatchId(id).orElse(null);
    }
}
