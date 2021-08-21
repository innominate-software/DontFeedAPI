package com.dontfeed.Dont.Feed.model;

import com.dontfeed.Dont.Feed.model.relationship.MatchPlayer;
import com.dontfeed.Dont.Feed.model.relationship.UserLeague;
import com.dontfeed.Dont.Feed.model.relationship.UserTeam;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@Entity
@NoArgsConstructor
@Table(	name = "users",
		uniqueConstraints = {
				@UniqueConstraint(columnNames = "username"),
				@UniqueConstraint(columnNames = "email")
		})

@JsonIgnoreProperties(value = {"userMatches", "hibernateLazyInitializer", "handler"}, allowSetters = true)
public class User {

	@Id
	@NotNull
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	private LocalDate birthDate;

	@CreationTimestamp
	private LocalDate dateJoined;

	@NotBlank
	@Email
	private String email;

	private String firstName;

	private String lastName;

	@UpdateTimestamp
	private LocalDate lastUpdated;

	private String profilePicFilePath;

	@JsonIgnore
	private String password;

	@Column(unique = true)
	private String username;

	// Roles
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(	name = "user_roles",
			joinColumns = @JoinColumn(name = "user_id"),
			inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<Role> roles = new HashSet<>();

	// Relationships
	@OneToMany(mappedBy = "player",
			cascade = CascadeType.ALL,
			orphanRemoval = true)
	private List<UserTeam> teams;

	@JsonIgnore
	@JsonProperty(value = "userMatches")
	@OneToMany(mappedBy = "player",
			cascade = CascadeType.ALL,
			orphanRemoval = true)
	private List<MatchPlayer> matches;

	@OneToMany(cascade = {
			CascadeType.PERSIST,
			CascadeType.MERGE
	})
	@JoinTable(name = "users_leagues",
			joinColumns = @JoinColumn(name = "user_id"),
			inverseJoinColumns = @JoinColumn(name = "league_id"))
	private List<UserLeague> leagues;

	@ManyToMany(cascade = {
			CascadeType.PERSIST,
			CascadeType.MERGE
	})
	@JoinTable(name = "users_tournaments",
			joinColumns = @JoinColumn(name = "user_id"),
			inverseJoinColumns = @JoinColumn(name = "tournament_id"))
	private List<Tournament> tournaments;

	@ManyToMany(cascade = {
			CascadeType.PERSIST,
			CascadeType.MERGE
	})
	@JoinTable(name = "users_games",
			joinColumns = @JoinColumn(name = "user_id"),
			inverseJoinColumns = @JoinColumn(name = "game_id"))
	private List<Game> games;

	public User(String username, String email, String password) {
		this.username = username;
		this.email = email;
		this.password = password;
	}

	@Override
	public String toString() {
		return "User{" +
				"id=" + id +
				", birthDate=" + birthDate +
				", dateJoined=" + dateJoined +
				", email='" + email + '\'' +
				", firstName='" + firstName + '\'' +
				", lastName='" + lastName + '\'' +
				", lastUpdated=" + lastUpdated +
				", password='" + password + '\'' +
				", username='" + username + '\'' +
				", teams=" + teams +
				", leagues=" + leagues +
				", tournaments=" + tournaments +
				", games=" + games +
				'}';
	}
}
