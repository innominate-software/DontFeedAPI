package com.dontfeed.Dont.Feed.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import java.time.LocalDate;

@Data
@Entity
@NoArgsConstructor
@Table(name = "matches")
public class Match {

    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", updatable = false, nullable = false)
    private long id;

    private int duration;

    @Column(name = "game")
    private int gameID;

    private LocalDate matchDate;

    private long matchId;

    private String score;

    private long team_A;

    private long leagueId;

    private long team_B;

    private long tournament;

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
