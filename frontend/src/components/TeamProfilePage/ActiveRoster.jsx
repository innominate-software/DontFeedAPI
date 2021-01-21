import React from "react";
import ActivePlayers from "./ActivePlayers";

export default function ActiveRoster({players, page}) {
    let rows = [];
    for (let i = Math.ceil(players.length / 6); i > 0; i--) {
        let rowOfPlayers = [];
        if (players.length > 6) {
            rowOfPlayers = players.splice(0,6);
        } else {
            rowOfPlayers = players;
        }
        rows.push(<ActivePlayers key={i} players={rowOfPlayers} page={page} />)
    }
        return (
            <div id="active-roster" className="col s12">
                <h1 className="df-light-grey-text">Active Roster</h1>
                {rows}
            </div>
        )
}