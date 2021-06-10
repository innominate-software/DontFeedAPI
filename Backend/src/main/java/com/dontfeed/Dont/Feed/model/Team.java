package com.dontfeed.Dont.Feed.model;

import com.dontfeed.Dont.Feed.model.relationship.TeamLeague;
import com.dontfeed.Dont.Feed.model.relationship.UserTeam;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@Entity(name = "Team")
@Table(name = "teams")
@JsonIgnoreProperties(value = {"teamMatches", "teamPlayers", "hibernateLazyInitializer", "handler"}, allowSetters = true)
public class Team {

	@Id
	@NotNull
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", updatable = false, nullable = false)
	private long id;

	@CreationTimestamp
	private LocalDate dateCreated;

	@UpdateTimestamp
	private LocalDate LastUpdated;

	private String logoFilePath;

	private String teamInfo;

	private String name;

	@JsonIgnore
	private String password;

	//Relationships

	@JsonIgnore
	@JsonProperty(value = "teamPlayers")
	@OneToMany(mappedBy = "player",
			cascade = CascadeType.ALL,
			orphanRemoval = true)
	private List<UserTeam> players;

	@OneToMany(cascade = {
			CascadeType.PERSIST,
			CascadeType.MERGE
	})
	@JoinTable(name = "teams_leagues",
			joinColumns = @JoinColumn(name = "team_id"),
			inverseJoinColumns = @JoinColumn(name = "league_id"))
	private List<TeamLeague> leagues;

	@ManyToMany(cascade = {
			CascadeType.PERSIST,
			CascadeType.MERGE
	})
	@JoinTable(name = "teams_tournaments",
			joinColumns = @JoinColumn(name = "team_id"),
			inverseJoinColumns = @JoinColumn(name = "tournament_id"))
	private List<Tournament> tournaments;

	@JsonIgnore
	@JsonProperty(value = "teamMatches")
	@ManyToMany(cascade = {
			CascadeType.PERSIST,
			CascadeType.MERGE
	})
	@JoinTable(name = "teams_matches",
			joinColumns = @JoinColumn(name = "team_id"),
			inverseJoinColumns = @JoinColumn(name = "match_id"))
	private List<Match> matches;

	@Override
	public String toString() {
		return "Team{" +
				"id=" + id +
				", dateCreated=" + dateCreated +
				", logoFilePath='" + logoFilePath + '\'' +
				", teamInfo='" + teamInfo + '\'' +
				", name='" + name + '\'' +
				", password='" + password + '\'' +
				", leagues=" + leagues +
				", tournaments=" + tournaments +
				'}';
	}
}
