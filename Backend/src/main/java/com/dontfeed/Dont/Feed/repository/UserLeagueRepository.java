package com.dontfeed.Dont.Feed.repository;

import com.dontfeed.Dont.Feed.model.User;
import com.dontfeed.Dont.Feed.model.relationship.UserLeague;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserLeagueRepository extends JpaRepository<UserLeague, Long> {
	public List<UserLeague> findAllByUser(User user);
}
