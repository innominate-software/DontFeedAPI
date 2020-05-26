package com.dontfeed.Dont.Feed.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY)
    private League league;

    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY)
    private Game game;

    @JsonIgnore
    @ManyToMany(fetch = FetchType.LAZY)
    private List<Match> matches;

    @JsonIgnore
    @ManyToMany(mappedBy = "tournaments", fetch = FetchType.LAZY)
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

