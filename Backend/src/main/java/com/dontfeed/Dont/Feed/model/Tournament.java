package com.dontfeed.Dont.Feed.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import com.dontfeed.Dont.Feed.model.enumerator.TournamentFormat;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

import java.time.LocalDate;


@Data
@NoArgsConstructor
@Entity
@Table(name = "tournaments")
public class Tournament {

    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", updatable = false, nullable = false)
    private long id;

    @Column(name = "bracket")
    private String bracket;


    @Column(name = "end_date")
    private LocalDate endDate;

    @Enumerated(EnumType.STRING)
    @Column(name = "format")
    private TournamentFormat format;

    @Column(name = "game")
    private long gameID;

    @Column(name = "logo")
    private String logo;

    @Column(name = "name")
    private String name;

    @Column(name = "start_date")
    private LocalDate startDate;

    @Column(name = "league_id")
    private long leagueId;

    @Column(name = "date_created")
    private LocalDate dateCreated;

    @Override
    public String toString() {
        return "Tournament{" +
                "id=" + id +
                ", bracket='" + bracket + '\'' +
                ", endDate=" + endDate +
                ", format=" + format +
                ", game=" + gameID +
                ", logo='" + logo + '\'' +
                ", name='" + name + '\'' +
                ", startDate=" + startDate +
                ", leagueId=" + leagueId +
                '}';
    }
}

