package com.dontfeed.Dont.Feed.service;

import com.dontfeed.Dont.Feed.model.League;
import com.dontfeed.Dont.Feed.repository.LeagueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class LeagueServiceImpl implements LeagueService{

    @Autowired
    private LeagueRepository leagueRepository;

    @Override
    public League saveLeague(final League league){
        leagueRepository.save(league);
        return league;
    }

    @Override
    public League updateLeague(final League league){
        return leagueRepository.save(league);
    }

    @Override
    public void deleteLeague(final Long leagueId){
        leagueRepository.deleteById(leagueId);
    }

    @Override
    public Long numberOfLeagues(){
        return leagueRepository.count();
    }

    @Override
    public List<League> findAllLeagues(){
        return leagueRepository.findAll();
    }
}
