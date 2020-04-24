package com.dontfeed.Dont.Feed.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@Entity
@Table(name = "matches")
public class Match {

    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", updatable = false, nullable = false)
    private long id;

    @Column(name = "duration")
    private int duration;

    @Column(name = "gameID")
    private int gameID;

    @Column(name = "match_date")
    private LocalDate matchDate;

    @Column(name = "match_id")
    private long matchId;

    @Column(name = "score")
    private String score;

    @Column(name = "team_A")
    private long team_A;

    @Column(name = "league_id")
    private long leagueId;

    @Column(name = "team_B")
    private long team_B;

    @Column(name = "tournament_id")
    private long tournament;

    @Column(name = "victor_id")
    private long victor;

    @Override
    public String toString() {
        return "DotaMatch{" +
                "id=" + id +
                ", duration=" + duration +
                ", matchDate=" + matchDate +
                ", matchId=" + matchId +
                ", score='" + score + '\'' +
                ", team A=" + team_A +
                ", leagueId=" + leagueId +
                ", team B=" + team_B +
                ", tournament=" + tournament +
                ", victor=" + victor +
                '}';
    }
}
