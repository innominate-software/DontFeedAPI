import React, { Component } from "react";
import MainNav from "../utils/MainNav";
import Footer from "../utils/Footer";
import M from "materialize-css";
import User from "./User";
import UserInfo from "./UserInfo";
import Tabs from "../utils/Tabs";
import Games from "./Games";
import Teams from "./Teams";
import Matches from "../utils/Table Components/Matches";
import Leagues from "../utils/Table Components/Leagues";

export default class UserProfilePage extends Component {

    constructor(props) {
        super(props);
        // method binding here
        // ex. this.refreshState = this.refreshState.bind(this);
        this.state = {
            isLoggedIn: true,
            tabs: [
                {
                    href: "#games",
                    size: 3,
                    text: "Games"
                },
                {
                    href: "#teams",
                    size: 3,
                    text: "Teams"
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
            ]
        };
    }

    componentDidMount() {
        M.AutoInit();
    }

    render() {
        let isLoggedIn = this.state.isLoggedIn;
        const username = "Dewie";
        const dateJoined = "10/10/20";
        const lastOnline = "12/06/20";
        const numberOfActiveLeagues = 0;
        const numberOfFirstPlaceTrophies = 0;
        const games = ["LOL", "OW", "SMASH", "MADDEN"]
        const teams = {
            activeTeams: [
                {
                    teamLogo: null,
                    teamName: "teamName",
                    startDate: "00-00-00"
                },
                {
                    teamLogo: null,
                    teamName: "teamName",
                    startDate: "00-00-00"
                }
            ],
            previousTeams: [
                {
                    teamLogo: null,
                    teamName: "teamName",
                    startDate: "00-00-00",
                    endDate: "00-00-00"
                },
                {
                    teamLogo: null,
                    teamName: "teamName",
                    startDate: "00-00-00",
                    endDate: "00-00-00"
                },
                {
                    teamLogo: null,
                    teamName: "teamName",
                    startDate: "00-00-00",
                    endDate: "00-00-00"
                },
                {
                    teamLogo: null,
                    teamName: "teamName",
                    startDate: "00-00-00",
                    endDate: "00-00-00"
                }
            ]
        }
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
        return (
            <div>
                <main>
                    <div className="app-container container-fluid df-dark-background-2">
                        <MainNav isLoggedIn={isLoggedIn} />
                        <div className="container-fluid page-container">
                            <div className="row user-info">
                                <User profilePic={null} username={username} />
                                <UserInfo dateJoined={dateJoined} lastOnline={lastOnline}
                                          numberOfActiveLeagues={numberOfActiveLeagues}
                                          numberOfFirstPlaceTrophies={numberOfFirstPlaceTrophies} />
                            </div>
                            <div className="row">
                                <div className="row">
                                    <div className="col s12">
                                        <Tabs tabs={this.state.tabs} />
                                    </div>
                                    <Games username={username} games={games} />
                                    <Teams teams={teams} />
                                    <Matches matches={matches} />
                                    <Leagues leagues={leagues} />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}
