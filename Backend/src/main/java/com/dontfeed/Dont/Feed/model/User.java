package com.dontfeed.Dont.Feed.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import java.time.LocalDate;
import java.util.List;

@Data
@Entity
@Table(name = "users")
@NoArgsConstructor
public class User {

    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private LocalDate birthDate;

    @CreationTimestamp
    private LocalDate dateJoined;

    private String emailAddress;

    private String firstName;

    private String lastName;

    private String password;

    private String username;

    // Relationships

    @ManyToMany(fetch = FetchType.LAZY)
    private List<League> leagues;

    @ManyToMany(fetch = FetchType.LAZY)
    private List<Team> teams;

    @ManyToMany(fetch = FetchType.LAZY)
    private List<Tournament> tournaments;

    // token for authentication
    @Transient
    private String token;
    
    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", birthDate=" + birthDate +
                ", dateJoined=" + dateJoined +
                ", emailAddress='" + emailAddress + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", password='" + password + '\'' +
                ", username='" + username + '\'' +
                '}';
    }
}
