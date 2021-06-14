import React, { Component } from 'react';
import MainNav from "../utils/MainNav";
import Footer from "../utils/Footer";
import M from "materialize-css";
import Tabs from "../utils/Tabs";
import Team from "./Team";
import TeamInfo from "./TeamInfo";
import TeamInfoCard from "./TeamInfoCard"
import ActiveRoster from "./ActiveRoster";
import Matches from "../utils/TableComponents/Matches";
import Leagues from "../utils/TableComponents/Leagues";
import PlayerHistory from "../utils/TableComponents/PlayerHistory";
import teamService from "../../services/team.service";

export default class TeamProfilePage extends Component {
    constructor(props) {
        super(props);
        // method binding here
        // ex. this.refreshState = this.refreshState.bind(this);
        this.obtainTeamFromAPI = this.obtainTeamFromAPI.bind(this);
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
        this.obtainTeamFromAPI()
            .then(() => {
                M.AutoInit();
            })
    }

    obtainTeamFromAPI() {
        return teamService.get(this.props.match.params.id)
            .then(team => {
                if (team) {
                    this.setState({
                        ...this.state,
                        team: team
                    })
                }
            })
    }

    render() {
        let {isLoggedIn, team, tabs} = this.state;
        return (
            <div>
                <main>
                    <div className="app-container container-fluid df-dark-background-2">
                        <MainNav isLoggedIn={isLoggedIn} />
                        <div className="container-fluid page-container">
                            <div className="row team-info">
                                <Team teamLogo={team?.logoFilePath} teamName={team?.name} />
                                <TeamInfo dateCreated={team?.dateCreated} lastUpdated={team?.lastUpdated}
                                          numberOfActiveLeagues={team?.activeLeagues}
                                          numberOfFirstPlaceTrophies={team?.firstPlaceTrophies} />
                            </div>
                            {team?.teamInfo ? <TeamInfoCard teamInfo={team?.teamInfo} /> : null}
                            <div className="row">
                                <div className="col s12">
                                    <Tabs tabs={tabs} />
                                </div>
                                <ActiveRoster players={team?.activeRoster} page="TeamProfilePage" />
                                <Matches matches={team?.matches} />
                                <Leagues leagues={team?.leagues} />
                                <PlayerHistory exPlayers={team?.playerHistory} />
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}