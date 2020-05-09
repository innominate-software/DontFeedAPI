package com.dontfeed.Dont.Feed.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import java.time.LocalDate;
import java.util.List;

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

    private LocalDate matchDate;

    private long matchId;

    private String score;

    private long leagueId;

    private long victor;

    // Relationships
    @ManyToOne
    private Game game;

    @ManyToOne
    private League league;

    @ManyToOne
    private Team team_a;

    @ManyToOne
    private Team team_b;

    @ManyToOne
    private Tournament tournament;

    @Override
    public String toString() {
        return "Match{" +
                "id=" + id +
                ", duration=" + duration +
                ", matchDate=" + matchDate +
                ", matchId=" + matchId +
                ", score='" + score + '\'' +
                ", victor=" + victor +
                '}';
    }
}
