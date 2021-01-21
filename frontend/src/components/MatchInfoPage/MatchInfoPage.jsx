import React, { Component } from "react";
import M from "materialize-css";
import MainNav from "../utils/MainNav";
import Footer from "../utils/Footer";
import MatchTitle from "./MatchTitle";
import GameBanner from "./GameBanner";
import dota2 from "../../assets/img/games/dota/dota-bg.jpg";
import TeamA from "./TeamA";
import TeamB from "./TeamB";
import MatchInfo from "./MatchInfo";
import MatchPlayers from "./MatchPlayers";


export default class MatchInfoPage extends Component {
    constructor(props) {
        super(props);
        // method binding here
        // ex. this.refreshState = this.refreshState.bind(this);
        this.state = {
            isLoggedIn: true,
        };
    }

    componentDidMount() {
        M.AutoInit();
    }

    render() {
        // const id = this.props.match.params.id
        let isLoggedIn = this.state.isLoggedIn;
        const page = "MatchInfoPage";
        const game = "DOTA2";
        const eventName = "WePlay! Pushka League Season 1: Division 1";
        const victor = "Team Nigma";
        const score = "48-38";
        const teamA = {
            name: "Team Nigma",
            players: [
                {logo: "", username: "Miracle-"},
                {logo: "", username: "w33"},
                {logo: "", username: "MinD_ContRoL"},
                {logo: "", username: "GH"},
                {logo: "", username: "Kuroky"},
            ]
        }
        const teamB = {
            name: "OG Seed",
            players: [
                {logo: "", username: "Madara"},
                {logo: "", username: "Chessie"},
                {logo: "", username: "Xibbe"},
                {logo: "", username: "Zfreek"},
                {logo: "", username: "Peksu"},
            ]
        }
        const duration = "42:34";
        const matchId = "5402204871";
        const matchDate = "05-07-2020";
        let banner;
        if (game === "DOTA2") {
            banner = dota2;
        }
        return (
            <div>
                <main>
                    <div className="app-container container-fluid df-dark-background-2">
                        <MainNav isLoggedIn={isLoggedIn} />
                        <div className="parallax-container">
                            <div className="parallax">
                                <GameBanner banner={banner} game="Dota 2" alt="This is the banner that shows this match was played in " />
                            </div>
                            <div className="parallax-overlay">
                                <div className="row">
                                    <div className="col s2" />
                                    <div className="col s8">
                                        <MatchTitle eventName={eventName} victor={victor} score={score} />
                                    </div>
                                    <div className="col s2" />
                                </div>
                                <div className="row page-container df-light-grey-text">
                                    <div className="col s6">
                                        <TeamA name={teamA.name} />
                                    </div>
                                    <div className="col s6">
                                        <TeamB name={teamB.name} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid df-light-grey-text">
                            <MatchInfo duration={duration} matchId={matchId} matchDate={matchDate} />
                            <MatchPlayers teamA={teamA.players} teamB={teamB.players} page={page} />
                            <div className="row space" />
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}
