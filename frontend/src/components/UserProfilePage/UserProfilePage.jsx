import React, { Component } from "react";
import MainNav from "../utils/MainNav";
import Footer from "../utils/Footer";
import M from "materialize-css";

export default class UserProfilePage extends Component {

    constructor(props) {
        super(props);
        // method binding here
        // ex. this.refreshState = this.refreshState.bind(this);
        this.state = {
            isLoggedIn: true
        };
    }

    componentDidMount() {
        M.AutoInit();
    }

    render() {
        let isLoggedIn = this.state.isLoggedIn;
        return (
            <div className="app-container container-fluid df-dark-background-2">
                <MainNav isLoggedIn={isLoggedIn} />
                <div className="container-fluid page-container">
                    <div className="row">
                        <div className="col s5"><h1>Name</h1></div>
                        <div className="col s7"><h1>Info</h1></div>
                    </div>
                    <div className="row">
                        <div className="row">
                            <div className="col s12">
                                <ul className="tabs">
                                    <li className="tab col s3"><a href="#games">Games</a></li>
                                    <li className="tab col s3"><a href="#teams">Teams</a></li>
                                    <li className="tab col s3"><a href="#matches">Matches</a></li>
                                    <li className="tab col s3"><a href="#leagues">Leagues</a></li>
                                </ul>
                            </div>
                            <div id="games" className="col s12">
                                <h1>GAME BUBBLES</h1>
                            </div>
                            <div id="teams" className="col s12">
                                <span>Active Teams</span>
                                <span>Previous Teams</span>
                            </div>
                            <div id="matches" className="col s12">
                                <table className="highlight responsive-table df-">
                                    <thead>
                                    <tr>
                                        <th>Home Team</th>
                                        <th>Away Team</th>
                                        <th>Map</th>
                                        <th>Result</th>
                                        <th>Score</th>
                                        <th>Date</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="df-light-grey-text df-table-tr">
                                        <td>14th</td>
                                        <td>B8</td>
                                        <td>0</td>
                                        <td>12</td>
                                        <td>0.000</td>
                                        <td>0W</td>
                                    </tr>
                                    <tr className="df-light-grey-text df-table-tr">
                                        <td>14th</td>
                                        <td>B8</td>
                                        <td>0</td>
                                        <td>12</td>
                                        <td>0.000</td>
                                        <td>0W</td>
                                    </tr>
                                    <tr className="df-light-grey-text df-table-tr">
                                        <td>14th</td>
                                        <td>B8</td>
                                        <td>0</td>
                                        <td>12</td>
                                        <td>0.000</td>
                                        <td>0W</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div id="leagues" className="col s12">
                                <table className="highlight responsive-table df-">
                                    <thead className="df-table-head df-light-grey-text">
                                    <tr>
                                        <th>Standing</th>
                                        <th>Team</th>
                                        <th>Wins</th>
                                        <th>Losses</th>
                                        <th>%</th>
                                        <th>Streak</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="df-light-grey-text df-table-tr">
                                        <td>1st</td>
                                        <td>Team Secret</td>
                                        <td>11</td>
                                        <td>3</td>
                                        <td>0.785</td>
                                        <td>4W</td>
                                    </tr>
                                    <tr className="df-light-grey-text df-table-tr">
                                        <td>2nd</td>
                                        <td>HellRaisers</td>
                                        <td>11</td>
                                        <td>4</td>
                                        <td>0.733</td>
                                        <td>1W</td>
                                    </tr>
                                    <tr className="df-light-grey-text df-table-tr">
                                        <td>3rd</td>
                                        <td>Alliance</td>
                                        <td>10</td>
                                        <td>5</td>
                                        <td>0.666</td>
                                        <td>6W</td>
                                    </tr>
                                    <tr className="df-light-grey-text df-table-tr">
                                        <td>4th</td>
                                        <td>Virtus.pro</td>
                                        <td>10</td>
                                        <td>6</td>
                                        <td>0.625</td>
                                        <td>1W</td>
                                    </tr>
                                    <tr className="df-light-grey-text df-table-tr">
                                        <td>5th</td>
                                        <td>Team Liquid</td>
                                        <td>9</td>
                                        <td>6</td>
                                        <td>0.600</td>
                                        <td>5W</td>
                                    </tr>
                                    <tr className="df-light-grey-text df-table-tr">
                                        <td>6th</td>
                                        <td>VP.Prodigy</td>
                                        <td>9</td>
                                        <td>6</td>
                                        <td>0.600</td>
                                        <td>0W</td>
                                    </tr>
                                    <tr className="df-light-grey-text df-table-tr">
                                        <td>7th</td>
                                        <td>Natus Vincere</td>
                                        <td>9</td>
                                        <td>7</td>
                                        <td>0.562</td>
                                        <td>0W</td>
                                    </tr>
                                    <tr className="df-light-grey-text df-table-tr">
                                        <td>8th</td>
                                        <td>FlyToMoon</td>
                                        <td>8</td>
                                        <td>8</td>
                                        <td>0.500</td>
                                        <td>3W</td>
                                    </tr>
                                    <tr className="df-light-grey-text df-table-tr">
                                        <td>9th</td>
                                        <td>Ninjas in Pyjamas</td>
                                        <td>7</td>
                                        <td>7</td>
                                        <td>0.500</td>
                                        <td>0W</td>
                                    </tr>
                                    <tr className="df-light-grey-text df-table-tr">
                                        <td>10th</td>
                                        <td>OG</td>
                                        <td>7</td>
                                        <td>9</td>
                                        <td>0.437</td>
                                        <td>2W</td>
                                    </tr>
                                    <tr className="df-light-grey-text df-table-tr">
                                        <td>11th</td>
                                        <td>Team Spirit</td>
                                        <td>6</td>
                                        <td>10</td>
                                        <td>0.375</td>
                                        <td>0W</td>
                                    </tr>
                                    <tr className="df-light-grey-text df-table-tr">
                                        <td>12th</td>
                                        <td>OG Seed</td>
                                        <td>6</td>
                                        <td>11</td>
                                        <td>0.352</td>
                                        <td>0W</td>
                                    </tr>
                                    <tr className="df-light-grey-text df-table-tr">
                                        <td>13th</td>
                                        <td>Team Nigma</td>
                                        <td>4</td>
                                        <td>11</td>
                                        <td>0.266</td>
                                        <td>1W</td>
                                    </tr>
                                    <tr className="df-light-grey-text df-table-tr">
                                        <td>14th</td>
                                        <td>B8</td>
                                        <td>0</td>
                                        <td>12</td>
                                        <td>0.000</td>
                                        <td>0W</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
