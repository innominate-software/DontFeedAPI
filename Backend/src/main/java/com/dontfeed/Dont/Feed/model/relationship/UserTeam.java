package com.dontfeed.Dont.Feed.model.relationship;

import com.dontfeed.Dont.Feed.model.Team;
import com.dontfeed.Dont.Feed.model.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Data
@Entity(name = "UserTeam")
@Table(name = "users_teams")
@NoArgsConstructor
@JsonIgnoreProperties(value = {"userTeamPlayer", "hibernateLazyInitializer", "handler"}, allowSetters = true)
public class UserTeam {

	@Id
	@NotNull
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	private LocalDate dateJoined;

	private LocalDate dateLeft;

	// Relationships
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "team_id")
	private Team team;

	@JsonIgnore
	@JsonProperty(value = "userTeamPlayer")
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	private User player;

	@Override
	public String toString() {
		return "UserTeam{" +
				"id=" + id +
				", dateJoined=" + dateJoined +
				", dateLeft=" + dateLeft +
				", team=" + team +
				'}';
	}
}
