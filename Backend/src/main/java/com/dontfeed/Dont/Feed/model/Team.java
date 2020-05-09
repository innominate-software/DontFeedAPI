package com.dontfeed.Dont.Feed.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import java.time.LocalDate;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@Table(name = "teams")
public class Team {

    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", updatable = false, nullable = false)
    private long id;

    private LocalDate dateCreated;

    private String logo;

    private String motto;

    private String name;

    //Relationships
    @ManyToMany
    private List<League> leagues;

    @ManyToMany
    private List<Match> matches;

    @ManyToMany
    private List<Tournament> tournaments;

    @ManyToMany
    private List<User> players;

    @Override
    public String toString() {
        return "Team{" +
                "id=" + id +
                ", dateCreated=" + dateCreated +
                ", logo='" + logo + '\'' +
                ", motto='" + motto + '\'' +
                ", name='" + name + '\'' +
                '}';
    }
}
