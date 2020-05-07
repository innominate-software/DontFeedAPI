package com.dontfeed.Dont.Feed.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import java.time.LocalDate;

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
