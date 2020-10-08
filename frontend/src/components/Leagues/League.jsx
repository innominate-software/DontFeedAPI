import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LeagueService from '../../services/league.service';
import M from "materialize-css";
import MainNav from '../MainNav';

import parallaxImg from '../../assets/img/dota-bg.jpg';

/*
* This is the Page that generates for looking at a single League
* */

class League extends Component {

    getLeague(id) {
        LeagueService.getLeague(id).then(data => {
            console.log("Data: ", data.data);
        })
    }

    componentDidMount() {
        M.AutoInit();
        window.addEventListener('load', this.handleLoad);
        console.log("DID MOUNT");
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.parallax');
            var instances = M.Parallax.init(elems, {});
        });
    }

    componentWillUnmount() {
        console.log("UNMOUNT");
        window.removeEventListener('load', this.handleLoad)
    }

    handleLoad() {
        console.log("handle");
    }

    render() {
        return (
            <div className="app-container container-fluid df-dark-background-2">
                <MainNav />
                <div class="parallax-container">
                    <div className="parallax-overlay">
                        <img className="parallax-league-img" src={process.env.PUBLIC_URL + '/games/dota/cover.jpg'} />
                        <h1 className="parallax-title">WePlay! Pushka League</h1>
                        <p className="parallax-subtitle">Season 1</p>
                        <a class="grey-btn btn"><i class="material-icons right">group_add</i>Join League</a>
                    </div>

                    <div class="parallax">
                        <img src={parallaxImg} />
                    </div>
                </div>
                <div className="page-container">
                    <div className="row" style={{ margin: "2em" }}>
                        <div className="col m2">
                            {/* <img src={process.env.PUBLIC_URL + '/games/dota/cover.jpg'} alt="Dota 2" width="100"
                                height="120" /> */}
                        </div>
                        <div className="col m12">
                            {/* <div className="row">League - Season 1 - Dota 2</div>
                            <div className="row">WePlay! Pushka League: Division 1</div> */}
                            <div className="row">
                                <ul className="tabs">

                                    <li className="tab col s3 df-tab df-dark-background df-light-grey-text"><a className="active df-light-grey-text" href="#standings">Current
                                        Standings</a></li>
                                    <li className="tab col s3 df-tab df-dark-background df-light-grey-text"><a className="active df-light-grey-text" href="#matches">Matches</a></li>
                                    <li className="tab col s3 df-tab df-dark-background df-light-grey-text"><a className="active df-light-grey-text" href="#info">Info</a></li>
                                    <li className="tab col s3 df-dark-background df-light-grey-text"><a className="active df-light-grey-text" href="#support">Support</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/*Info Tab Content*/}
                        <div id="info" className="col s12">
                            <div>Price - Free</div>
                            <div>Region - North America</div>
                            <div>Platform - PC</div>
                            <div>Team Size - n/a</div>
                            <div>Total Team - 14</div>
                            <div>Current Season - 2020</div>
                            <div>Season Ends - May 12, 2020</div>
                        </div>
                        {/*Standings Tab Content*/}
                        <div id="standings" className="col s12">
                            <table className="highlight responsive-table df-">
                                <thead  className="df-table-head df-light-grey-text">
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
                                {/*
                             Team Nigma
                             OG
                             Team Liquid
                             Ninjas in Pyjamas
                             OG.Seed
                             Natus Vincere
                             Virtus.pro
                             B8
                             FlyToMoon
                             Team Spirit
                             VP.Prodigy
                             */}
                            </table>
                        </div>
                        {/*Matches Tab Content*/}
                        <div id="matches" className="col s12">
                            <ul className="collapsible pink-text">
                                <li className="active">
                                    <div className="collapsible-header">Today's Matches</div>
                                    <div className="collapsible-body pink-text">
                                        <span>There are no more matches today</span></div>
                                </li>
                                <li>
                                    <div className="collapsible-header">Future Scheduled Matches</div>
                                    <div className="collapsible-body pink-text">
                                        <span>There are no matches scheduled</span></div>
                                </li>
                                <li>
                                    <div className="collapsible-header">Previous Matches</div>
                                    <div className="collapsible-body pink-text"><span>I dont wanna write them all out and come up with the way should look yet so just make it pretty and ill come back in later and figure it out</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/*Support Tab Content*/}
                        <div id="support" className="col s12">
                            rules <br />
                            contacts <br />
                            forum link/discord/group contact method <br />
                            FAQ
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export { League };
