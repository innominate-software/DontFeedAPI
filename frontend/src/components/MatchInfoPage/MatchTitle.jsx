import React from "react";

export default function MatchTitle({eventName, victor, score}) {
    return(
        <div className="row df-light-grey-text match-main-info">
            <div className="row">
                {/*<Event />*/}
                <h5 className="match-league">{eventName}</h5>
            </div>
            <div className="row">
                <div className="col s3" />
                <div className="col s6">
                    {/*<Victor />*/}
                    <h5 className="green-text match-victor">{victor} Victory</h5>
                </div>
                <div className="col s3" />
            </div>
            <div className="row">
                <div className="col s4" />
                <div className="col s4">
                    {/*<Score />*/}
                    <h5 className="match-score">{score}</h5>
                </div>
                <div className="col s4" />
            </div>
        </div>
    )
}