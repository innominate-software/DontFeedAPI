import React, { Component } from 'react';
import M from "materialize-css";
import MainNav from '../utils/MainNav';
import Footer from "../utils/Footer";
import Tabs from "../utils/Tabs";
import Standings from "../utils/TableComponents/Standings";
import LeagueMatches from "../utils/TableComponents/LeagueMatches";
import Support from "./Support";
import League from "./League";
import GameBanner from "../MatchInfoPage/GameBanner";
import LeagueInfo from "./LeagueInfo";
import leagueService from "../../services/league.service";

export default class LeagueProfilePage extends Component {
    constructor(props) {
        super(props)
        // method binding here
        // ex. this.refreshState = this.refreshState.bind(this);
        this.obtainLeagueFromAPI = this.obtainLeagueFromAPI.bind(this);
        this.joinLeague = this.joinLeague.bind(this);
        this.state = {
            isLoggedIn: true,
            tabs: [
                {
                    href: "#standings",
                    size: 4,
                    text: "Current Standings"
                },
                {
                    href: "#matches",
                    size: 4,
                    text: "Matches"
                },
                {
                    href: "#support",
                    size: 4,
                    text: "Support"
                },
            ]
        }
    }

    componentDidMount() {
        M.AutoInit()
        this.obtainLeagueFromAPI()
            .then(() => {
                M.AutoInit()
            })
    }

    obtainLeagueFromAPI() {
        return leagueService.get(this.props.match.params.id)
            .then(league => {
                console.log(league)
                if (league) {
                    this.setState({
                        ...this.state,
                        league: league
                    })
                }
            })
    }

    joinLeague(e) {
        e.preventDefault();
        console.log("JOINING LEAGUE")
    }

    render() {
        let {isLoggedIn, league} = this.state;
        return (
            <div>
                <main>
                    <div className="app-container container-fluid df-dark-background-2">
                        <MainNav isLoggedIn={isLoggedIn} />
                        <div className="parallax-container">
                            <div className="parallax">
                                <GameBanner game={league?.game?.name}
                                            alt="This is the banner that shows this league plays " />
                            </div>
                            <div className="parallax-overlay">
                                <League logo={league?.logo} name={league?.name} />
                                <div className="row">
                                    <div className="col s2" />
                                    <div className="col s8">
                                        <LeagueInfo reward={league?.reward ?? "UNDECIDED"} stage={league?.stage} season={league?.season}
                                                    joinLeague={this.joinLeague} platform={league?.platform?.toLocaleUpperCase() ?? "UNDECIDED"}
                                                    maxTeams={league?.maxTeams} />
                                    </div>
                                    <div className="col s2" />
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid page-container">
                            <div className="row">
                                <div className="col m12">
                                    <Tabs tabs={this.state.tabs} />
                                </div>
                            </div>
                            <div className="row">
                                <Standings standings={league?.standings} />
                                <LeagueMatches matches={league?.matches} />
                                <Support contacts={league?.contacts} rules={league?.rules} />
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}