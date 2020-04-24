package com.dontfeed.Dont.Feed.model;

import com.dontfeed.Dont.Feed.model.enumerator.LeagueFormat;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@Entity
@Table(name = "leagues")
public class League {

    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", updatable = false, nullable = false)
    private long id;

    @Column(name = "date_created")
    private LocalDate dateCreated;

    @Column(name = "duration")
    private int duration;

    @Column(name = "end_date")
    private LocalDate endDate;

    @Enumerated(EnumType.STRING)
    @Column(name = "format")
    private LeagueFormat format;

    @Column(name = "game")
    private long gameID;

    @Column(name = "logo")
    private String logo;

    @Column(name = "match_frequency")
    private String matchFrequency;

    @Column(name = "max_teams")
    private int maxTeams;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
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
