package com.dontfeed.Dont.Feed.model.relationship;

import com.dontfeed.Dont.Feed.model.League;
import com.dontfeed.Dont.Feed.model.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Data
@Entity(name = "UserLeague")
@Table(name = "users_leagues")
@NoArgsConstructor
@JsonIgnoreProperties(value = {"userLeague", "hibernateLazyInitializer", "handler"}, allowSetters = true)
public class UserLeague {

	@Id
	@NotNull
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	private String team;

	private int placement;

	private String winLoss;

	// Relationships
	@JsonIgnore
	@JsonProperty(value = "userLeague")
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	private User user;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "league_id")
	private League league;

	@Override
	public String toString() {
		return "UserLeague{" +
				"id=" + id +
				", team='" + team + '\'' +
				", placement=" + placement +
				", winLoss='" + winLoss + '\'' +
				", league=" + league +
				'}';
	}
}
