import React from "react";
import defaultUser from "../../assets/img/default_profile_pic.jpeg"

export default function User({profilePic, username}) {
    return (
        <div className="col s6">
            <div className="row">
                <div className="col s3">
                    <img src={profilePic ? profilePic : defaultUser} className="picture" alt={username} />
                </div>
                <div className="col s9 left-align player-names-info df-light-grey-text">
                    <h4 className="player-name">{username}</h4>
                    {/* here we will touch on having more than one active team using a for loop or a map or some shit */}
                    <h6 className="team-player">team.{username}</h6>
                </div>
            </div>
        </div>
    )
}