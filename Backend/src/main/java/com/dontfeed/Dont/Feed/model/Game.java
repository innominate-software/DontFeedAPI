package com.dontfeed.Dont.Feed.model;

import lombok.Data;
import javax.persistence.*;

@Data
@Entity
@Table(name="Games")
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="Game Title")
    private String game_title;

}
