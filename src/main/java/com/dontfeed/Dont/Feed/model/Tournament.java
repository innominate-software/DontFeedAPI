package com.dontfeed.Dont.Feed.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.dontfeed.Dont.Feed.model.enumerator.TournamentFormat;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import java.time.LocalDate;
import java.util.List;


@Data
@NoArgsConstructor
@Entity(name = "Tournament")
@Table(name = "tournaments")
@JsonIgnoreProperties(value = {"tournamentTeams", "tournamentMatches", "tournamentLeague", "hibernateLazyInitializer", "handler"}, allowSetters = true)
public class Tournament {

	@Id
	@NotNull
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", updatable = false, nullable = false)
	private long id;

	private String bracket;

	private LocalDate dateCreated;

	private LocalDate endDate;

	@Enumerated(EnumType.STRING)
	private TournamentFormat format;

	private LocalDate lastUpdated;

	private String logoFilePath;

	@Column(unique = true)
	private String name;

	@JsonIgnore
	private String password;

	private String reward;

	private LocalDate startDate;

	// Relationship
	@JsonIgnore
	@JsonProperty(value = "tournamentLeague")
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "league_id")
	private League league;

	@ManyToOne(fetch = FetchType.EAGER)
	private Game game;

	@JsonIgnore
	@JsonProperty(value = "tournamentMatches")
	@OneToMany(mappedBy = "tournament",
			cascade = CascadeType.ALL,
			orphanRemoval = true)
	private List<Match> matches;

	@JsonIgnore
	@JsonProperty(value = "tournamentTeams")
	@ManyToMany(mappedBy = "tournaments")
	private List<Team> teams;

	@Override
	public String toString() {
		return "Tournament{" +
				"id=" + id +
				", bracket='" + bracket + '\'' +
				", endDate=" + endDate +
				", format=" + format +
				", name='" + name + '\'' +
				", startDate=" + startDate +
				'}';
	}
}

