package com.dontfeed.Dont.Feed.model;

import com.dontfeed.Dont.Feed.model.enumerator.LeagueFormat;
import com.dontfeed.Dont.Feed.model.enumerator.LeagueStage;
import com.dontfeed.Dont.Feed.model.relationship.TeamLeague;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import javassist.bytecode.ByteArray;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GeneratorType;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@Entity(name = "League")
@Table(name = "leagues")
@JsonIgnoreProperties(value = {"leagueMatches", "leagueTeams", "hibernateLazyInitializer", "handler"}, allowSetters = true)
public class League {

	@Id
	@NotNull
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", updatable = false, nullable = false)
	private long id;

	@CreationTimestamp
	private LocalDate dateCreated;

	private int duration;

	private LocalDate endDate;

	@Enumerated(EnumType.STRING)
	private LeagueFormat format;

	@UpdateTimestamp
	private LocalDate lastUpdated;

	private String logoFilePath;

	private String matchFrequency;

	private int maxTeams;

	@Column(unique = true)
	private String name;

	@JsonIgnore
	private String password;

	private String platform;

	@Column(columnDefinition = "MEDIUMTEXT")
	private String rules;

	private String reward;

	private int season;

	@Enumerated(EnumType.STRING)
	private LeagueStage stage;

	private LocalDate startDate;

	// Relationships
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "tournament_id")
	private Tournament tournament;

	@JsonIgnore
	@JsonProperty(value = "leagueMatches")
	@OneToMany(mappedBy = "league",
			cascade = CascadeType.ALL,
			orphanRemoval = true)
	private List<Match> matches;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "game_id")
	private Game game;

	@ManyToMany(cascade = {
			CascadeType.PERSIST,
			CascadeType.MERGE
	})
	@JoinTable(name = "leagues_contacts",
			joinColumns = @JoinColumn(name = "league_id"),
			inverseJoinColumns = @JoinColumn(name = "contact_id"))
	private List<Contact> contacts;

	@JsonIgnore
	@JsonProperty(value = "leagueTeams")
	@OneToMany(mappedBy = "league")
	private List<TeamLeague> teams;

	@Override
	public String toString() {
		return "League{" +
				"id=" + id +
				", dateCreated=" + dateCreated +
				", duration=" + duration +
				", endDate=" + endDate +
				", format=" + format +
				", lastUpdated=" + lastUpdated +
				", matchFrequency='" + matchFrequency + '\'' +
				", maxTeams=" + maxTeams +
				", name='" + name + '\'' +
				", password='" + password + '\'' +
				", platform='" + platform + '\'' +
				", rules='" + rules + '\'' +
				", reward='" + reward + '\'' +
				", season=" + season +
				", stage=" + stage +
				", startDate=" + startDate +
				", tournament=" + tournament +
				", game=" + game +
				", contacts=" + contacts +
				'}';
	}
}
