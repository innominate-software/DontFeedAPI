package com.dontfeed.Dont.Feed.service;

import com.dontfeed.Dont.Feed.model.Match;
import com.dontfeed.Dont.Feed.repository.MatchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MatchServiceImpl implements MatchService{

    @Autowired
    private MatchRepository matchRepository;

    @Override
    public Match saveMatch(final Match match) {
        matchRepository.save(match);
        return match;
    }

    @Override
    public Match updateMatch(Match match) {
        return matchRepository.save(match);
    }

    @Override
    public void deleteMatch(Long matchId) {
        matchRepository.deleteById(matchId);
    }

    @Override
    public Long numberOfMatches() {
        return matchRepository.count();
    }

    @Override
    public List<Match> findAllMatches() {
        return matchRepository.findAll();
    }
}
