import React from "react";

export default function LeagueInfo({reward, stage, season, joinLeague, platform, maxTeams}) {
    return(
        <div className="row league-info">
            <div className="col s4">
                <p>Reward: {reward}</p>
                <p>Stage: {stage}</p>
            </div>
            <div className="col s4">
                <p>Season {season}</p>
                <button className="grey-btn btn join-league" onClick={joinLeague}>
                    <i className="material-icons right">group_add</i>Join League
                </button>
            </div>
            <div className="col s4">
                <p>Platform: {platform}</p>
                <p>Max Teams: {maxTeams}</p>
            </div>
        </div>
    )
}