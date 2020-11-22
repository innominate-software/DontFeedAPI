import React from "react";

export default function OnlinePlayers(props) {
    return(
        <ul className="collection">
            <li className="collection-item blue" style={{display: "flex"}}>
                <i className="material-icons" style={{marginRight: 1 + 'rem'}}>people</i><strong>Online
                Players</strong></li>
            <li className="collection-item"><h5>currently no players online</h5></li>
            <li className="collection-item">players online: 0</li>
        </ul>
    )
}