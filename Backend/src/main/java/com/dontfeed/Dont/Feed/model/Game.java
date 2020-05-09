package com.dontfeed.Dont.Feed.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@Table(name="games")
@NoArgsConstructor
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String game_title;

    @Override
    public String toString() {
        return "Game{" +
                "id=" + id +
                ", game_title='" + game_title + '\'' +
                '}';
    }
}
