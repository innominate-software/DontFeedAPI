package com.dontfeed.Dont.Feed.model.relationship;

import com.dontfeed.Dont.Feed.model.League;
import com.dontfeed.Dont.Feed.model.Team;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Data
@Entity(name = "TeamLeague")
@Table(name = "teams_leagues")
@NoArgsConstructor
@JsonIgnoreProperties(value = {"teamLeague", "hibernateLazyInitializer", "handler"}, allowSetters = true)
public class TeamLeague {

	@Id
	@NotNull
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	private String originalName;

	private int placement;

	private String winLoss;

	// Relationships
	@JsonIgnore
	@JsonProperty(value = "teamLeague")
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "team_id")
	private Team team;


	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "league_id")
	private League league;

	@Override
	public String toString() {
		return "TeamLeague{" +
				"id=" + id +
				", originalName='" + originalName + '\'' +
				", placement=" + placement +
				", winLoss='" + winLoss + '\'' +
				", league=" + league +
				'}';
	}
}
