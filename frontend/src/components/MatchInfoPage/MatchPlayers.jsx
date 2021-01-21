import React from "react";
import ActivePlayers from "../TeamProfilePage/ActivePlayers";

export default function MatchPlayers({teamA, teamB, page}) {
    return(
        <div className="row match-players">
            {/*<Players />*/}
            <h4>Players</h4>
            <div className="row">
                <div className="col s6">
                    <ActivePlayers players={teamA} page={page} />
                </div>
                <div className="col s6">
                    <ActivePlayers players={teamB} page={page} />
                </div>
            </div>
        </div>
    )
}