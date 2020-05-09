package com.dontfeed.Dont.Feed.model;

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
    @GeneratedValue(strategy = GenerationType.AUTO)
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

    // Relationship
    @OneToOne
    private League league;

    @ManyToOne
    private Game game;

    @ManyToMany
    private List<Match> matches;

    @ManyToMany
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

