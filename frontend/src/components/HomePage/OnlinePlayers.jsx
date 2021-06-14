import React from "react";

export default function OnlinePlayers(props) {
    return(
        <ul className="collection">
            <li className="collection-item blue online-players-icon-container">
                <i className="material-icons online-players-icon">people</i><strong>Online
                Players</strong></li>
            <li className="collection-item"><h5>currently no players online</h5></li>
            <li className="collection-item">players online: 0</li>
        </ul>
    )
}