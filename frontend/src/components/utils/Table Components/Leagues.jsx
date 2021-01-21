import React from "react";
import TableHeader from "../Table/TableHeader";
import TableBody from "../Table/TableBody";

export default function Leagues({leagues}) {
    const header = ["Game", "Name", "Season", "Dates", "Stage", "Team", "Placement", "W/L/D"]
    return(
        <div id="leagues" className="col s12">
            <table className="responsive-table striped df-">
                <thead className="df-table-head df-light-grey-text">
                <TableHeader header={header} />
                </thead>
                <TableBody body={leagues} />
            </table>
        </div>
    )
}