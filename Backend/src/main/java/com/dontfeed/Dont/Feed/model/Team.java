package com.dontfeed.Dont.Feed.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@Entity
@Table(name = "teams")
public class Team {

    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", updatable = false, nullable = false)
    private long id;

    @Column(name = "date_created")
    private LocalDate dateCreated;

    @Column(name = "logo")
    private String logo;

    @Column(name = "motto")
    private String motto;

    @Column(name = "name")
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
