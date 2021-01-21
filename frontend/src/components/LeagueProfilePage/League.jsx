import React from "react";
import dota2 from "../../assets/img/games/dota/cover.jpg";

export default function League({logo, name}) {
    return (
        <div>
            <img className="parallax-league-img" src={logo ? logo : dota2} alt="This is the logo for the league" />
            <h1 className="parallax-title">{name}</h1>
        </div>
    )
}