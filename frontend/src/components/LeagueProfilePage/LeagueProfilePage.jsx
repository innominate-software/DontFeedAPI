import React, { Component } from 'react';
import M from "materialize-css";
import MainNav from '../utils/MainNav';
import dota2 from '../../assets/img/games/dota/dota-bg.jpg';
import Footer from "../utils/Footer";
import Tabs from "../utils/Tabs";
import Standings from "../utils/Table Components/Standings";
import LeagueMatches from "../utils/Table Components/LeagueMatches";
import Support from "./Support";
import League from "./League";
import GameBanner from "../MatchInfoPage/GameBanner";
import LeagueInfo from "./LeagueInfo";

export default class LeagueProfilePage extends Component {
    constructor(props) {
        super(props)
        // method binding here
        // ex. this.refreshState = this.refreshState.bind(this);
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
        M.AutoInit();
        window.addEventListener('load', this.handleLoad);
        console.log("DID MOUNT");
        document.addEventListener('DOMContentLoaded', function () {
            // var elems = document.querySelectorAll('.parallax');
            // var instances = M.Parallax.init(elems, {});
        });
    }

    componentWillUnmount() {
        console.log("UNMOUNT");
        window.removeEventListener('load', this.handleLoad)
    }

    handleLoad() {
        console.log("handle");
    }

    joinLeague(e) {
        e.preventDefault();
        console.log("JOINING LEAGUE")
    }

    render() {
        let isLoggedIn = this.state.isLoggedIn;
        const name = "WePlay! Pushka League";
        const standings = [
            [
                {className: "", text: "1st"}, {className: "", text: "Team Secret"},
                {className: "", text: "11"}, {className: "", text: "3"},
                {className: "", text: "0.785"}, {className: "green-text", text: "4W"},
            ],
            [
                {className: "", text: "2nd"}, {className: "", text: "HellRaisers"},
                {className: "", text: "11"}, {className: "", text: "4"},
                {className: "", text: "0.733"}, {className: "green-text", text: "1W"},
            ],
            [
                {className: "", text: "3rd"}, {className: "", text: "Alliance"},
                {className: "", text: "10"}, {className: "", text: "5"},
                {className: "", text: "0.666"}, {className: "green-text", text: "6W"},
            ],
            [
                {className: "", text: "4th"}, {className: "", text: "Virtus.pro"},
                {className: "", text: "10"}, {className: "", text: "6"},
                {className: "", text: "0.625"}, {className: "green-text", text: "1W"},
            ],
            [
                {className: "", text: "5th"}, {className: "", text: "Team Liquid"},
                {className: "", text: "9"}, {className: "", text: "6"},
                {className: "", text: "0.600"}, {className: "green-text", text: "5W"},
            ],
            [
                {className: "", text: "6th"}, {className: "", text: "VP.Prodigy"},
                {className: "", text: "9"}, {className: "", text: "6"},
                {className: "", text: "0.600"}, {className: "red-text", text: "2L"},
            ],
            [
                {className: "", text: "7th"}, {className: "", text: "Natus Vincere"},
                {className: "", text: "9"}, {className: "", text: "7"},
                {className: "", text: "0.562"}, {className: "red-text", text: "1L"},
            ],
            [
                {className: "", text: "8th"}, {className: "", text: "FlyToMoon"},
                {className: "", text: "8"}, {className: "", text: "8"},
                {className: "", text: "0.500"}, {className: "green-text", text: "3W"},
            ],
            [
                {className: "", text: "9th"}, {className: "", text: "Ninjas in Pyjamas"},
                {className: "", text: "7"}, {className: "", text: "7"},
                {className: "", text: "0.500"}, {className: "red-text", text: "2L"},
            ],
            [
                {className: "", text: "10th"}, {className: "", text: "OG"},
                {className: "", text: "7"}, {className: "", text: "9"},
                {className: "", text: "0.437"}, {className: "green-text", text: "2W"},
            ],
            [
                {className: "", text: "11th"}, {className: "", text: "Team Spirit"},
                {className: "", text: "6"}, {className: "", text: "10"},
                {className: "", text: "0.375"}, {className: "red-text", text: "1L"},
            ],
            [
                {className: "", text: "12th"}, {className: "", text: "OG Seed"},
                {className: "", text: "6"}, {className: "", text: "11"},
                {className: "", text: "0.352"}, {className: "red-text", text: "3L"},
            ],
            [
                {className: "", text: "13th"}, {className: "", text: "Team Nigma"},
                {className: "", text: "4"}, {className: "", text: "11"},
                {className: "", text: "0.266"}, {className: "green-text", text: "1W"},
            ],
            [
                {className: "", text: "14th"}, {className: "", text: "B8"},
                {className: "", text: "0"}, {className: "", text: "12"},
                {className: "", text: "0.000"}, {className: "red-text", text: "12L"},
            ],
        ];
        const matches = {
            todaysMatches: [
                [
                    {className: "", text: "Team Name"}, {className: "", text: "Team Name"},
                    {className: "", text: "-"}, {className: "", text: "00-00-00"}
                ],
                [
                    {className: "", text: "Team Name"}, {className: "", text: "Team Name"},
                    {className: "", text: "-"}, {className: "", text: "00-00-00"}
                ]
            ],
            futureMatches: [
                [
                    {className: "", text: "Team Name"}, {className: "", text: "Team Name"},
                    {className: "", text: "-"}, {className: "", text: "00-00-00"}
                ],
                [
                    {className: "", text: "Team Name"}, {className: "", text: "Team Name"},
                    {className: "", text: "-"}, {className: "", text: "00-00-00"}
                ]
            ],
            previousMatches: [
                [
                    {className: "", text: "Dota 2"}, {className: "", text: "WePlay! Pushka League"},
                    {className: "", text: "Team Name"}, {className: "", text: "Team Name"},
                    {className: "", text: "-"}, {className: "green-text", text: "Team Name"},
                    {className: "", text: "41 - 10"}, {className: "", text: "00-00-00"}
                ],
                [
                    {className: "", text: "Dota 2"}, {className: "", text: "WePlay! Pushka League"},
                    {className: "", text: "Team Name"}, {className: "", text: "Team Name"},
                    {className: "", text: "-"}, {className: "green-text", text: "Team Name"},
                    {className: "", text: "41 - 10"}, {className: "", text: "00-00-00"}
                ],
                [
                    {className: "", text: "Dota 2"}, {className: "", text: "WePlay! Pushka League"},
                    {className: "", text: "Team Name"}, {className: "", text: "Team Name"},
                    {className: "", text: "-"}, {className: "red-text", text: "Team Name"},
                    {className: "", text: "41 - 10"}, {className: "", text: "00-00-00"}
                ],
            ]
        };
        const contacts = [
            {
                name: "Dewie",
                job: "CTO",
                contact:
                    {
                        email: "dewie@innominatesoftware.com"
                    }
            },
            {
                name: "Janethan Doerty",
                job: "Don't Feed Rep.",
                contact:
                    {
                        phone: "(555) 555-5555",
                        email: "email@example.com",
                        facebook: "/Janethan-Doerty"
                    }
            },
            {
                name: "Johnathan Doe",
                job: "League Coordinator",
                contact:
                    {
                        phone: "(555) 555-5555",
                        email: "email@example.com",
                        facebook: "/Johnathan-Doe",
                        discord: "JohnathanDiscord#0000"
                    }
            }
        ];
        const rules = "[insert rules here]";
        return (
            <div>
                <main>
                    <div className="app-container container-fluid df-dark-background-2">
                        <MainNav isLoggedIn={isLoggedIn} />
                        <div className="parallax-container">
                            <div className="parallax">
                                <GameBanner banner={dota2} game="Dota 2" alt="This is the banner that shows this league plays " />
                            </div>
                            <div className="parallax-overlay">
                                <League logo={null} name={name} />
                                <div className="row">
                                    <div className="col s2" />
                                    <div className="col s8">
                                        <LeagueInfo reward="0" stage="Completed" season="1"
                                                    joinLeague={this.joinLeague} platform="PC"
                                                    maxTeams="14" />
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
                                <Standings standings={standings} />
                                <LeagueMatches matches={matches} />
                                <Support contacts={contacts} rules={rules} />
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}