import React from 'react';
import { Link } from "react-router-dom";
import M from "materialize-css";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // method binding here
    // ex. this.refreshState = this.refreshState.bind(this);

    componentDidMount() {
        let collapsibles = document.querySelectorAll('.collapsible');
        M.Collapsible.init(collapsibles, {});
    }


    render() {
        return (
            <div class="app-container" >
                <nav>
                    <div className="nav-wrapper nav-bar-container">
                        <a href="/" className="brand-logo left black-text">Don't Feed</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><i className="material-icons">search</i></li>
                            <li><Link to="/login" className="black-text">Log In</Link></li>
                            <li><Link to="/register" className="black-text">Sign Up</Link></li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col s6">We have 70 players, and 0 of them are online RIGHT NOW</div>
                        <div className="col s4 offset-s2">[INSERT SOCIAL LINKS HERE I GUESS]</div>
                    </div>
                    <div className="row">
                        <div className="col s3">
                            <ul className="collapsible">
                                <li>
                                    <div className="collapsible-header green-background">
                                        <i className="material-icons">expand_more</i><strong>Leagues</strong>
                                    </div>
                                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                                <li>
                                    <div className="collapsible-header green-background">
                                        <i className="material-icons">expand_more</i><strong>Teams</strong>
                                    </div>
                                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                                <li>
                                    <div className="collapsible-header green-background">
                                        <i className="material-icons">expand_more</i><strong>Players</strong>
                                    </div>
                                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                                <li>
                                    <div className="collapsible-header green-background">
                                        <i className="material-icons">expand_more</i><strong>Matches</strong>
                                    </div>
                                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                                <li>
                                    <div className="collapsible-header green-background">
                                        <i className="material-icons">expand_more</i><strong>Support</strong>
                                    </div>
                                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                            </ul>
                        </div>
                        <div className="col s6">
                            <div className="card-panel">
                                <span className="">
                                    <h5>You are not logged in!</h5>
                                    Membership is completely free
                                    <div>
                                        <a href="/login" className="waves-effect waves-light btn-large" style={{ margin: '1rem' }}>Log In</a>
                                        <a href="/register" className="waves-effect waves-light btn-large" style={{ margin: '1rem' }}>Sign Up</a>
                                    </div>
                                </span>
                            </div>

                            <ul className="collapsible">
                                <li>
                                    <div className="collapsible-header green-background">
                                        <i className="material-icons">expand_more</i>
                                        <div class="league-header-container">
                                            <strong class="league-header-title">Madeup League</strong>
                                            <strong class="league-header-location">Texas | USA</strong>
                                        </div>

                                    </div>
                                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                                <li>
                                    <div className="collapsible-header green-background">
                                        <i className="material-icons">expand_more</i>
                                        <div class="league-header-container">
                                            <strong class="league-header-title">Fake League</strong>
                                            <strong class="league-header-location">Peruville | PE</strong>
                                        </div>

                                    </div>
                                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                                <li>
                                    <div className="collapsible-header green-background">
                                        <i className="material-icons">expand_more</i>
                                        <div class="league-header-container">
                                            <strong class="league-header-title">Not Real League</strong>
                                            <strong class="league-header-location">Chinatown | CN</strong>
                                        </div>

                                    </div>
                                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                               
                            </ul>

                        </div>
                        <div className="col s3">
                            <ul className="collection">
                                <li className="collection-item blue" style={{ display: "flex" }}>
                                    <i className="material-icons" style={{ marginRight: 1 + 'rem' }}>people</i><strong>Online Players</strong>                                </li>
                                <li className="collection-item"><h5>currently no players online</h5></li>
                                <li className="collection-item">players online: 0</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { HomePage };