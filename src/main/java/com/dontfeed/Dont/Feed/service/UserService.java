package com.dontfeed.Dont.Feed.service;

import com.dontfeed.Dont.Feed.model.Match;
import com.dontfeed.Dont.Feed.model.User;
import com.dontfeed.Dont.Feed.model.relationship.UserLeague;
import com.dontfeed.Dont.Feed.repository.UserLeagueRepository;
import com.dontfeed.Dont.Feed.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class UserService {

	private final UserRepository userRepository;
	private final UserLeagueRepository userLeagueRepository;
	private final PasswordEncoder passwordEncoder;

	public List<User> findAllUsers() {
		List<User> users = userRepository.findAll();
		if (!users.isEmpty()) {
			users.forEach(user -> user.setLeagues(getAccurateUserLeagues(user)));
		}
		return users;
	}

	public User findById(final long id) {
		User user = userRepository.findById(id).orElse(null);
		if (user != null) {
			user.setLeagues(getAccurateUserLeagues(user));
		}
		return user;
	}

	public User findByUsername(final String username) {
		User user = userRepository.findByUsername(username).orElse(null);
		if (user != null) {
			user.setLeagues(getAccurateUserLeagues(user));
		}
		return user;
	}

	public User findByEmail(String email) {
		User user = userRepository.findByEmail(email).orElse(null);
		if (user != null) {
			user.setLeagues(getAccurateUserLeagues(user));
		}
		return user;
	}

	public Long numberOfUsers() {
		return userRepository.count();
	}

	public User saveUser(User user) {
		user.setPassword(user.getPassword());
		return userRepository.save(user);
	}

	public User updateUser(final User user) {
		return userRepository.save(user);
	}

	public void deleteUser(final Long userId) {
		userRepository.deleteById(userId);
	}

	public List<User> findAllUsersByTeamId(Long teamId) {
		List<User> users = userRepository.findAllUsersByTeamId(teamId);
		if (!users.isEmpty()) {
			users.forEach(user -> user.setLeagues(getAccurateUserLeagues(user)));
		}
		return users;
	}

	public List<UserLeague> getAccurateUserLeagues(User user) {
		return userLeagueRepository.findAllByUser(user);
	}
	
	public Boolean existsByUsername(final String username) {
		return userRepository.existsByUsername(username);
	}
	
	public Boolean existsByEmail(final String email) {
		return userRepository.existsByEmail(email);
	}
}