import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LeagueService from '../../services/league.service';
import M from "materialize-css";

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
            <div>
                {/* main nav */}
                <nav>
                    <div className="nav-wrapper nav-bar-container green-background">
                        <Link to="/" className="brand-logo left black-text">Don't Feed</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><i className="material-icons">search</i></li>
                            <li><Link to="/login" className="black-text">Log In</Link></li>
                            <li><Link to="/register" className="black-text">Sign Up</Link></li>
                        </ul>
                    </div>
                </nav>
                {/* league info nav */}
                <div className="container">
                    {/*col(logo) col(3 rows(season/name/infoTabs) col(request join button)*/}
                    <div className="row" style={{ margin: "2em"}}>
                        <div className="col m2">
                            <img src={process.env.PUBLIC_URL + '/games/dota/cover.jpg'} alt="Dota 2" width="100" height="120" />
                        </div>
                        <div className="col m8">
                            <div className="row">League - Season 1</div>
                            <div className="row">WePlay! Pushka League Season 1: Division 1</div>
                            <div className="row">
                                <ul className="tabs">
                                    <li className="tab col s3"><a className="active" href="#info">Info</a></li>
                                    <li className="tab col s3"><a className="active" href="#standings">Current Standings</a></li>
                                    <li className="tab col s3"><a className="active" href="#matches">Matches</a></li>
                                    <li className="tab col s3"><a className="active" href="#support">Support</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col m2">
                            <a className="btn-large">Join</a>
                        </div>
                    </div>
                    <div className="row pink">
                        <div id="info" className="col s12">Info</div>
                        <div id="standings" className="col s12">standings</div>
                        <div id="matches" className="col s12">matches</div>
                        <div id="support" className="col s12">support</div>
                    </div>
                </div>
                
            </div>
        )
    }

}

export { League };
