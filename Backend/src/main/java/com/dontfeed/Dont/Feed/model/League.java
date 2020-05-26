package com.dontfeed.Dont.Feed.model;

import com.dontfeed.Dont.Feed.model.enumerator.LeagueFormat;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY)
    private Game game;

    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY)
    private Tournament tournament;

    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY)
    private List<Match> matches;

    @JsonIgnore
    @ManyToMany(mappedBy = "leagues", fetch = FetchType.LAZY)
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
