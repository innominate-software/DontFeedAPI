package com.dontfeed.Dont.Feed.model;

import com.dontfeed.Dont.Feed.model.enumerator.LeagueFormat;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import java.time.LocalDate;

@Data
@Entity
@NoArgsConstructor
@Table(name = "leagues")
public class League {

    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", updatable = false, nullable = false)
    private long id;

    private LocalDate dateCreated;

    private int duration;

    private LocalDate endDate;

    @Enumerated(EnumType.STRING)
    private LeagueFormat format;

    @Column(name = "game")
    private long gameID;

    private String logo;

    private String matchFrequency;

    private int maxTeams;

    private String name;

    private String description;

    @Override
    public String toString() {
        return "League{" +
                "id=" + id +
                ", dateCreated=" + dateCreated +
                ", duration=" + duration +
                ", endDate=" + endDate +
                ", format=" + format +
                ", game=" + gameID +
                ", logo='" + logo + '\'' +
                ", matchFrequency='" + matchFrequency + '\'' +
                ", maxTeams=" + maxTeams +
                ", name='" + name + '\'' +
                ", startDate=" + startDate +
                ", tournamentId=" + tournamentId +
                ", description= " + description +
                '}';
    }

    @Column(name = "start_date")
    private LocalDate startDate;

    @Column(name = "tournament_id")
    private long tournamentId;


}
