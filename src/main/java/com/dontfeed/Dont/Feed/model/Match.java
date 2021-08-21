package com.dontfeed.Dont.Feed.model;

import com.dontfeed.Dont.Feed.model.relationship.MatchPlayer;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@Entity(name = "Match")
@Table(name = "matches")
public class Match {

	@Id
	@NotNull
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", updatable = false, nullable = false)
	private long id;

	private String duration;

	private long gameMatchId;

	private String map;

	private LocalDateTime matchDateTime;

	private String score;

	// Team 'A' or 'B'
	private char victor;

	// Relationships
	@OneToMany(mappedBy = "match",
			cascade = CascadeType.ALL,
			orphanRemoval = true)
	private List<MatchPlayer> players;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "team_a_id")
	private Team teamA;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "team_b_id")
	private Team teamB;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "game_id")
	private Game game;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "league_id")
	private League league;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "tournament_id")
	private Tournament tournament;

	@Override
	public String toString() {
		return "Match{" +
				"id=" + id +
				", duration='" + duration + '\'' +
				", gameMatchId=" + gameMatchId +
				", matchDateTime=" + matchDateTime +
				", score='" + score + '\'' +
				", victor='" + victor + '\'' +
				", teamA=" + teamA +
				", teamB=" + teamB +
				", game=" + game +
				", league=" + league +
				", tournament=" + tournament +
				'}';
	}
}
