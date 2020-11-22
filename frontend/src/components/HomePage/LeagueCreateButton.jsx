import React from "react";
import CreateLeagueImage from "../../assets/img/REPLACETHISIMAGE.jpg"

export default function LeagueCreateButton(props) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={CreateLeagueImage} alt="Click here to create a new league" />
                <span className="card-title">Click Here to Create Your Own League</span>
            </div>
        </div>
    )
}

