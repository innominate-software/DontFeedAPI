import React from "react";
import TableHeader from "../Table/TableHeader";
import TableBody from "../Table/TableBody";

export default function Matches({matches}) {
    const header = ["Game", "Event", "Home Team", "Away Team", "Map", "Result", "Score", "Date"]
    return (
        <div id="matches" className="col s12">
            <table className="responsive-table striped df-">
                <thead className="df-table-head df-light-grey-text">
                <TableHeader header={header} />
                </thead>
                <TableBody body={matches} />
            </table>
        </div>
    )
}