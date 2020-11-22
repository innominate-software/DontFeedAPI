package com.dontfeed.Dont.Feed.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
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

    private String duration;

    private LocalDate matchDate;

    private long matchId;

    private String score;

    // Relationships
    @OneToOne
    private Team team_a;

    @OneToOne
    private Team team_b;

    @OneToOne
    private Team victor;

    @OneToOne
    private Game game;

    @OneToOne
    private League league;

    @OneToOne
    private Tournament tournament;

    @Override
    public String toString() {
        return "MatchInfoPage{" +
                "id=" + id +
                ", duration=" + duration +
                ", matchDate=" + matchDate +
                ", matchId=" + matchId +
                ", score='" + score + '\'' +
                ", victor=" + victor +
                '}';
    }
}
