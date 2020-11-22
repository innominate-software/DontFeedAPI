import React, { Component } from 'react';
import TeamService from "../../services/team.service";
import { Link } from "react-router-dom";

class TeamProfilePage extends Component {

    getTeam(id) {
        TeamService.getTeam(id).then(data => {
            console.log("Data: ", data.data);
        })
    }

    componentDidMount() {
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
        return (
            <div style={{background: "#1f2833", color: "white"}}>
                <nav>
                    <div className="nav-wrapper nav-bar-container df-dark-background">
                        <Link to="/" className="brand-logo left black-text">Don't Feed</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><i className="material-icons">search</i></li>
                            <li><Link to="/login" className="black-text">Log In</Link></li>
                            <li><Link to="/register" className="black-text">Sign Up</Link></li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    <div className="row team-title" style={{marginTop: 2 + "em"}}>
                        <div className="col s4">
                            <img src={process.env.PUBLIC_URL + '/images/default-team.jpg'} alt="TeamProfilePage Logo" />
                        </div>
                        <div className="col s8">
                            <div>TeamProfilePage Secret</div>
                            <div>Game: <img src={process.env.PUBLIC_URL + '/images/dota2.jpg'} alt="Dota 2" /></div>
                            <div>maybe we can have some buttons that here like challenge to a match? or something</div>
                        </div>
                    </div>
                    <div className="row mb-0" style={{color: "#1f2833"}}>
                        <div className="col s8">
                            <div className="row">
                                <div className="col s12">
                                    <div className="card-panel" style={{float: "left"}}>
                                        <h3 style={{marginTop: 0}}>TeamProfilePage Roster</h3>
                                        <hr />
                                        <div style={{float: "left", width: 6 + "em", margin: 1 + "em"}}>
                                        <span className="dot" style={{
                                            height: 6 + "em",
                                            width: 6 + "em",
                                            backgroundColor: "#bbb",
                                            borderRadius: 20 + "%",
                                            display: "inline-block"
                                        }} /><span><p>Matumbaman</p></span>
                                        </div>
                                        <div style={{float: "left", width: 6 + "em", margin: 1 + "em"}}>
                                        <span className="dot" style={{
                                            height: 6 + "em",
                                            width: 6 + "em",
                                            backgroundColor: "#bbb",
                                            borderRadius: 20 + "%",
                                            display: "inline-block"
                                        }} /><span><p>Nisha</p></span>
                                        </div>
                                        <div style={{float: "left", width: 6 + "em", margin: 1 + "em"}}>
                                        <span className="dot" style={{
                                            height: 6 + "em",
                                            width: 6 + "em",
                                            backgroundColor: "#bbb",
                                            borderRadius: 20 + "%",
                                            display: "inline-block"
                                        }} /><span><p>zai</p></span>
                                        </div>
                                        <div style={{float: "left", width: 6 + "em", margin: 1 + "em"}}>
                                        <span className="dot" style={{
                                            height: 6 + "em",
                                            width: 6 + "em",
                                            backgroundColor: "#bbb",
                                            borderRadius: 20 + "%",
                                            display: "inline-block"
                                        }} /><span><p>Yapzor</p></span>
                                        </div>
                                        <div style={{float: "left", width: 6 + "em", margin: 1 + "em"}}>
                                        <span className="dot" style={{
                                            height: 6 + "em",
                                            width: 6 + "em",
                                            backgroundColor: "#bbb",
                                            borderRadius: 20 + "%",
                                            display: "inline-block"
                                        }} /><span><p>Puppey</p></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12">
                                    <div className="card-panel">
                                        <h3 style={{marginTop: 0}}>League Records</h3>
                                        <table>
                                            <thead>
                                            <tr>
                                                <th>League</th>
                                                <th>Placing</th>
                                                <th>Win/Loss</th>
                                                <th>Best Streak</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>WePlay! Pushka League Season 1: Division 1</td>
                                                <td>1st</td>
                                                <td>20/3 | ~87%</td>
                                                <td>13w</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12 ">
                                    <div className="card-panel">
                                        <h3 style={{marginTop: 0}}>Matches</h3>
                                        <h5>Upcoming matches</h5>
                                        <p>There are currently no upcomming matches for this team</p>
                                        <hr />
                                        <h5>Previous Matches</h5>
                                        <p>Will create table later</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s4">
                            <div>
                                <div className="row">
                                    <div className="col s12">
                                        <div className="card-panel">
                                            <h5 style={{marginTop: 0}}>About TeamProfilePage Secret</h5>
                                            <hr />
                                            <p>TeamProfilePage ID: 2</p>
                                            <p>Date Joined: some date idr</p>
                                            <p>Motto: do the thing, and things will be done</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s12">
                                        <div className="card-panel">
                                            <h5>Join TeamProfilePage Secret</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export { TeamProfilePage };
