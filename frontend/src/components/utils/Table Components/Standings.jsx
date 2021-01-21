import React from "react";
import TableHeader from "../Table/TableHeader";
import TableBody from "../Table/TableBody";

export default function Standings({standings}) {
    const header = ["Standing", "Team", "Wins", "Losses", "Win Ratio", "Streak"]
    return (
        <div id="standings" className="col s12">
            <table className="responsive-table striped df-">
                <thead className="df-table-head df-light-grey-text">
                <TableHeader header={header} />
                </thead>
                <TableBody body={standings} />
            </table>
        </div>
    )
}