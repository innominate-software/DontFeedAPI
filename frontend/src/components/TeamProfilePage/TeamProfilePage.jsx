import React, { Component } from 'react';
import MainNav from "../utils/MainNav";
import Footer from "../utils/Footer";
import M from "materialize-css";
import Tabs from "../utils/Tabs";
import Team from "./Team";
import TeamInfo from "./TeamInfo";
import ActiveRoster from "./ActiveRoster";
import Matches from "../utils/Table Components/Matches";
import Leagues from "../utils/Table Components/Leagues";
import PlayerHistory from "../utils/Table Components/PlayerHistory";

export default class TeamProfilePage extends Component {
    constructor(props) {
        super(props);
        // method binding here
        // ex. this.refreshState = this.refreshState.bind(this);
        this.state = {
            isLoggedIn: true,
            tabs: [
                {
                    href: "#active-roster",
                    size: 3,
                    text: "Active Roster"
                },
                {
                    href: "#matches",
                    size: 3,
                    text: "Matches"
                },
                {
                    href: "#leagues",
                    size: 3,
                    text: "Leagues"
                },
                {
                    href: "#player-history",
                    size: 3,
                    text: "Player History"
                },
            ]
        };
    }

    componentDidMount() {
        M.AutoInit();
        window.addEventListener('load', this.handleLoad);
        console.log("DIDMOUNT");
    }

    componentWillUnmount() {
        console.log("UNMOUNT");
        window.removeEventListener('load', this.handleLoad)
    }

    handleLoad() {
        console.log("handle");
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        const teamLogo = null;
        const teamName = "Team Name";
        const dateCreated = "10/10/20";
        const lastUpdated = "12/06/20";
        const numberOfActiveLeagues = 0;
        const numberOfFirstPlaceTrophies = 0;
        const players = [
            {profilePic: null, username: "username"}, {profilePic: null, username: "username"},
            {profilePic: null, username: "username"}, {profilePic: null, username: "username"},
            {profilePic: null, username: "username"}, {profilePic: null, username: "username"},
            {profilePic: null, username: "username"}, {profilePic: null, username: "username"},
            {profilePic: null, username: "username"}, {profilePic: null, username: "username"},
            {profilePic: null, username: "username"}, {profilePic: null, username: "username"},
            {profilePic: null, username: "username"}, {profilePic: null, username: "username"},
            {profilePic: null, username: "username"},
        ]
        const matches = [
            [
                {className: "", text: "Dota 2"}, {className: "", text: "WePlay! Pushka League"},
                {className: "", text: "Team Name"}, {className: "", text: "Team Name"},
                {className: "", text: "-"}, {className: "green-text", text: "Win"},
                {className: "", text: "41 - 10"}, {className: "", text: "00-00-00"}
            ],
            [
                {className: "", text: "Dota 2"}, {className: "", text: "WePlay! Pushka League"},
                {className: "", text: "Team Name"}, {className: "", text: "Team Name"},
                {className: "", text: "-"}, {className: "green-text", text: "Win"},
                {className: "", text: "41 - 10"}, {className: "", text: "00-00-00"}
            ],
            [
                {className: "", text: "Dota 2"}, {className: "", text: "WePlay! Pushka League"},
                {className: "", text: "Team Name"}, {className: "", text: "Team Name"},
                {className: "", text: "-"}, {className: "red-text", text: "Loss"},
                {className: "", text: "41 - 10"}, {className: "", text: "00-00-00"}
            ],
        ]
        const leagues = [
            [
                {className: "", text: "Dota 2"}, {className: "", text: "WePlay! Pushka League"},
                {className: "", text: "1"}, {className: "", text: "00-00-00 - 00-00-00"},
                {className: "", text: "Ended"}, {className: "", text: "Team Name"},
                {className: "", text: "nth"}, {className: "", text: "x/x/x"}
            ]
        ]
        const exPlayers = [
            [
                {className: "", text: "username"}, {className: "", text: "00-00-00"},
                {className: "", text: "00-00-00"}
            ],
            [
                {className: "", text: "username"}, {className: "", text: "00-00-00"},
                {className: "", text: "00-00-00"}
            ],
            [
                {className: "", text: "username"}, {className: "", text: "00-00-00"},
                {className: "", text: "00-00-00"}
            ]
        ]
        return (
            <div>
                <main>
                    <div className="app-container container-fluid df-dark-background-2">
                        <MainNav isLoggedIn={isLoggedIn} />
                        <div className="container-fluid page-container">
                            <div className="row team-info">
                                <Team teamLogo={teamLogo} teamName={teamName} />
                                <TeamInfo dateCreated={dateCreated} lastUpdated={lastUpdated}
                                          numberOfActiveLeagues={numberOfActiveLeagues}
                                          numberOfFirstPlaceTrophies={numberOfFirstPlaceTrophies} />
                            </div>
                            <div className="row">
                                <div className="col s12">
                                    <Tabs tabs={this.state.tabs} />
                                </div>
                                <ActiveRoster players={players} page="TeamProfilePage" />
                                <Matches matches={matches} />
                                <Leagues leagues={leagues} />
                                <PlayerHistory exPlayers={exPlayers} />
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}