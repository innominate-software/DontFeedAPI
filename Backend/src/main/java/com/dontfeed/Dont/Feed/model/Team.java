package com.dontfeed.Dont.Feed.model;

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
@Table(name = "teams")
public class Team {

    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private long id;

    private LocalDate dateCreated;

    private String logo;

    private String motto;

    private String name;

    private String passcode;

    //Relationships
    @JsonIgnore
    @ManyToMany(fetch = FetchType.LAZY)
    private List<League> leagues;

    @JsonIgnore
    @ManyToMany(fetch = FetchType.LAZY)
    private List<Match> matches;

    @JsonIgnore
    @ManyToMany(fetch = FetchType.LAZY)
    private List<Tournament> tournaments;

    @JsonIgnore
    @ManyToMany(mappedBy = "teams", fetch = FetchType.LAZY)
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
