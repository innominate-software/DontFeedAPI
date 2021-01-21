import React from "react";

export default function MatchInfo({duration, matchId, matchDate}) {
    return(
        <div className="row page-container">
            {/*<Duration />*/}
            <div className="col s4">
                <div>match duration</div>
                <h4>{duration}</h4>
            </div>
            {/*<MatchID />*/}
            <div className="col s4">
                <div>match id</div>
                <h4>{matchId}</h4>
            </div>
            {/*<MatchDate />*/}
            <div className="col s4">
                <div>match date</div>
                <h4>{matchDate}</h4>
            </div>
        </div>
    )
}