package com.dontfeed.Dont.Feed.service;

import com.dontfeed.Dont.Feed.model.League;
import com.dontfeed.Dont.Feed.model.enumerator.LeagueStage;
import com.dontfeed.Dont.Feed.repository.LeagueRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class LeagueService {

    private final LeagueRepository leagueRepository;
    
    public League saveLeague(final League league){
        // TODO: 8/24/2021 : make this  ui agnostic
        league.setSeason(1);
        league.setStage(LeagueStage.CREATED);
        leagueRepository.save(league);
        return league;
    }
    
    public League updateLeague(final League league){
        return leagueRepository.save(league);
    }
    
    public void deleteLeague(final Long leagueId){
        leagueRepository.deleteById(leagueId);
    }

    public Long numberOfLeagues(){
        return leagueRepository.count();
    }
    
    public List<League> findAllLeagues(){
        return leagueRepository.findAll();
    }

    public League findLeagueByID(Long id) {
        return leagueRepository.findById(id).orElse(null);
    }

    public League findLeagueByName(String name) {
        return leagueRepository.findByName(name).orElse(null);
    }
    
    public Boolean existsByName(String name) { return leagueRepository.existsByName(name);}
}
