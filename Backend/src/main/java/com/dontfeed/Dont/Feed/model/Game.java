package com.dontfeed.Dont.Feed.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@Entity(name = "Game")
@Table(name = "games")
@NoArgsConstructor
@JsonIgnoreProperties(value = {"gameLeagues", "gameMatches", "gameTournaments", "gameUsers", "hibernateLazyInitializer", "handler"}, allowSetters = true)
public class Game {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String name;

	// Relationships

	@JsonIgnore
	@JsonProperty(value = "gameLeagues")
	@OneToMany(mappedBy = "game",
			cascade = CascadeType.ALL,
			orphanRemoval = true)
	private List<League> leagues;

	@JsonIgnore
	@JsonProperty(value = "gameMatches")
	@OneToMany(mappedBy = "game",
			cascade = CascadeType.ALL,
			orphanRemoval = true)
	private List<Match> matches;

	@JsonIgnore
	@JsonProperty(value = "gameTournaments")
	@OneToMany(mappedBy = "game",
			cascade = CascadeType.ALL,
			orphanRemoval = true)
	private List<Tournament> tournaments;

	@JsonIgnore
	@JsonProperty(value = "gameUsers")
	@ManyToMany(mappedBy = "games")
	private List<User> users;

	@Override
	public String toString() {
		return "Game{" +
				"id=" + id +
				", name='" + name + '\'' +
				'}';
	}
}
