import React from "react";

export default function SideNav(props) {
    return (
        <ul className="collapsible">
            <li>
                <div className="collapsible-header df-dark-background">
                    <i className="material-icons df-light-grey-text">expand_more</i><strong
                    className="df-light-grey-text">Leagues</strong>
                </div>
                <div className="collapsible-body">
                    <span>Here is where we will place the leagues that you are apart of
                    and maybe other things</span>
                </div>
            </li>
            <li>
                <div className="collapsible-header df-dark-background">
                    <i className="material-icons df-light-grey-text">expand_more</i><strong
                    className="df-light-grey-text">Teams</strong>
                </div>
                <div className="collapsible-body"><span>Here is where we will put the teams you are apart of and maybe other things</span></div>
            </li>
            <li>
                <div className="collapsible-header df-dark-background">
                    <i className="material-icons df-light-grey-text">expand_more</i><strong
                    className="df-light-grey-text">Players</strong>
                </div>
                <div className="collapsible-body"><span>Here is where we will put your friends?IDK</span></div>
            </li>
            <li>
                <div className="collapsible-header df-dark-background">
                    <i className="material-icons df-light-grey-text">expand_more</i><strong
                    className="df-light-grey-text">Matches</strong>
                </div>
                <div className="collapsible-body"><span>Here is where we will put all the upcoming matches that your teams are in</span></div>
            </li>
            <li>
                <div className="collapsible-header df-dark-background">
                    <i className="material-icons df-light-grey-text">expand_more</i><strong
                    className="df-light-grey-text">Support</strong>
                </div>
                <div className="collapsible-body"><span>Here is where we will put all the links related to support(ex. support page/contact page)</span></div>
            </li>
        </ul>
    )
}