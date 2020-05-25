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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private long id;

    private float duration;

    private LocalDate matchDate;

    private long matchId;

    private String score;

    // Relationships
    @ManyToOne(fetch = FetchType.LAZY)
    private Game game;

    @ManyToOne(fetch = FetchType.LAZY)
    private League league;

    @ManyToOne(fetch = FetchType.LAZY)
    private Team team_a;

    @ManyToOne(fetch = FetchType.LAZY)
    private Team team_b;

    @ManyToOne(fetch = FetchType.LAZY)
    private Team victor;

    @ManyToOne(fetch = FetchType.LAZY)
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
