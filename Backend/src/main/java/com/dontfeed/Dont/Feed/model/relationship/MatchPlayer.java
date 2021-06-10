package com.dontfeed.Dont.Feed.model.relationship;

import com.dontfeed.Dont.Feed.model.Match;
import com.dontfeed.Dont.Feed.model.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Data
@Entity(name = "MatchPlayer")
@Table(name = "matches_players")
@NoArgsConstructor
@JsonIgnoreProperties(value = {"playerMatch", "hibernateLazyInitializer", "handler"}, allowSetters = true)
public class MatchPlayer {

	@Id
	@NotNull
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	private char team;

	// Relationships
	@JsonIgnore
	@JsonProperty(value = "playerMatch")
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "match_id")
	private Match match;


	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	private User player;
}
