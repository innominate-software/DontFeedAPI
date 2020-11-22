package com.dontfeed.Dont.Feed.model;

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
@Table(name = "teams")
@JsonIgnoreProperties(value={ "teamMatches", "teamPlayers" }, allowSetters= true)
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
    @ManyToMany
    private List<League> leagues;

    @JsonIgnore
    @JsonProperty(value = "teamMatches")
    @ManyToMany
    private List<Match> matches;

    @ManyToMany
    private List<Tournament> tournaments;

    @JsonIgnore
    @JsonProperty(value = "teamPlayers")
    @ManyToMany(mappedBy = "teams")
    private List<User> players;

    @Override
    public String toString() {
        return "TeamProfilePage{" +
                "id=" + id +
                ", dateCreated=" + dateCreated +
                ", logo='" + logo + '\'' +
                ", motto='" + motto + '\'' +
                ", name='" + name + '\'' +
                '}';
    }
}
