package com.dontfeed.Dont.Feed.model;

import com.dontfeed.Dont.Feed.model.enumerator.LeagueFormat;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
@Table(name = "leagues")
@JsonIgnoreProperties(value={ "leagueMatches", "leagueTeams" }, allowSetters= true)
public class League {

    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private long id;

    private LocalDate dateCreated;

    private int duration;

    private LocalDate endDate;

    @Enumerated(EnumType.STRING)
    private LeagueFormat format;

    private String logo;

    private String matchFrequency;

    private int maxTeams;

    @Column(unique = true)
    private String name;

    private String description;

    private LocalDate startDate;

    private String passcode;

    // Relationships
    @OneToOne
    private Game game;

    @OneToOne
    private Tournament tournament;

    @JsonIgnore
    @JsonProperty(value = "leagueMatches")
    @OneToMany
    private List<Match> matches;

    @JsonIgnore
    @JsonProperty(value = "leagueTeams")
    @ManyToMany(mappedBy = "leagues")
    private List<Team> teams;

    @Override
    public String toString() {
        return "League{" +
                "id=" + id +
                ", dateCreated=" + dateCreated +
                ", duration=" + duration +
                ", endDate=" + endDate +
                ", format=" + format +
                ", logo='" + logo + '\'' +
                ", matchFrequency='" + matchFrequency + '\'' +
                ", maxTeams=" + maxTeams +
                ", name='" + name + '\'' +
                ", startDate=" + startDate +
                ", description= " + description +
                '}';
    }
}
