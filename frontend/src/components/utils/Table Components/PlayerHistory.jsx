import React from "react";
import TableHeader from "../Table/TableHeader";
import TableBody from "../Table/TableBody";

export default function PlayerHistory({exPlayers}) {
    const header = ["Username", "Date Joined", "Date Left"]
    return (
        <div id="player-history" className="col s12">
            <table className="responsive-table striped df-">
                <thead className="df-table-head df-light-grey-text">
                <TableHeader header={header} />
                </thead>
                {exPlayers ? <TableBody body={exPlayers} /> : null}
            </table>
            {/* cant figure this out*/}
            {/*{exPlayers.body ? null : <h3>Current roster is initial roster of "team name"</h3>}*/}
        </div>
    )
}