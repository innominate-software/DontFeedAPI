package com.dontfeed.Dont.Feed.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.dontfeed.Dont.Feed.model.enumerator.TournamentFormat;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

import java.time.LocalDate;
import java.util.List;


@Data
@Entity
@NoArgsConstructor
@Table(name = "tournaments")
@JsonIgnoreProperties(value={ "tournamentTeams", "tournamentMatches" }, allowSetters= true)
public class Tournament {

    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private long id;

    private String bracket;

    private LocalDate endDate;

    @Enumerated(EnumType.STRING)
    private TournamentFormat format;

    private String logo;

    @Column(unique = true)
    private String name;

    private LocalDate startDate;

    private LocalDate dateCreated;

    private String passcode;

    // Relationship
    @OneToOne
    private League league;

    @OneToOne
    private Game game;

    @JsonIgnore
    @JsonProperty(value = "tournamentMatches")
    @ManyToMany
    private List<Match> matches;

    @JsonIgnore
    @JsonProperty(value = "tournamentTeams")
    @ManyToMany(mappedBy = "tournaments")
    private List<Team> teams;

    @Override
    public String toString() {
        return "Tournament{" +
                "id=" + id +
                ", bracket='" + bracket + '\'' +
                ", endDate=" + endDate +
                ", format=" + format +
                ", logo='" + logo + '\'' +
                ", name='" + name + '\'' +
                ", startDate=" + startDate +
                '}';
    }
}

