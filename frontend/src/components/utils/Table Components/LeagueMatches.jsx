import React from "react";
import TableHeader from "../Table/TableHeader";
import TableBody from "../Table/TableBody";

export default function LeagueMatches({matches}) {
    const header = ["Home Team", "Away Team", "Map", "Date"];
    const header2 = ["Game", "Event", "Home Team", "Away Team", "Map", "Victor", "Score", "Date"]

    return (
        <div id="matches" className="col s12 df-light-grey-text">
            <div className="row">
                <div className="col s5">
                    <h4>Today's Matches</h4>
                    <table className="responsive-table striped df-">
                        <thead className="df-table-head df-light-grey-text">
                        <TableHeader header={header} />
                        </thead>
                        <TableBody body={matches.todaysMatches} />
                    </table>
                </div>
                <div className="col s2" />
                <div className="col s5">
                    <h4>Future Matches</h4>
                    <table className="responsive-table striped df-">
                        <thead className="df-table-head df-light-grey-text">
                        <TableHeader header={header} />
                        </thead>
                        <TableBody body={matches.futureMatches} />
                    </table>
                </div>
            </div>
            <ul className="collapsible previous-matches">
                <li>
                    <div className="collapsible-header df-dark-background">Previous Matches</div>
                    <div className="collapsible-body">
                        <table className="responsive-table striped df-">
                            <thead className="df-table-head df-light-grey-text">
                            <TableHeader header={header2} />
                            </thead>
                            <TableBody body={matches.previousMatches} />
                        </table>
                    </div>
                </li>
            </ul>
        </div>
    )
}