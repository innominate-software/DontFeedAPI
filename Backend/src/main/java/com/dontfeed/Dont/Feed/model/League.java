package com.dontfeed.Dont.Feed.model;

import com.dontfeed.Dont.Feed.model.enumerator.LeagueFormat;
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
    @GeneratedValue(strategy = GenerationType.AUTO)
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

    // Relationships
    @ManyToOne
    private Game game;

    @OneToOne
    private Tournament tournament;

    @OneToMany
    private List<Match> matches;

    @ManyToMany
    private List<Team> teams;

    @ManyToMany
    private List<User> players;

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
