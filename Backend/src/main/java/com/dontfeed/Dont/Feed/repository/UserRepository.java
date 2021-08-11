package com.dontfeed.Dont.Feed.repository;

import com.dontfeed.Dont.Feed.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
	
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
	Boolean existsByUsername(String username);
	Boolean existsByEmail(String email);
    @Query(
			value = "SELECT u, ut " +
					"FROM Team t " +
					"JOIN UserTeam ut on ut.team = t " +
					"JOIN User u on u = ut.player " +
					"WHERE t.id = ?1")
	List<User> findAllUsersByTeamId(Long teamId);
}
