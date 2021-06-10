import React, { Component } from 'react';
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import ExtraNav from "./ExtraNav";

export default class MainNav extends Component {

    constructor(props) {
        super(props);
        // method binding here
        // ex. this.refreshState = this.refreshState.bind(this);
        this.logOut = this.logout.bind(this);
        this.state = {
            isLoggedIn: true
        };
    }

    logout() {
        this.setState({
            ...this.state,
            isLoggedIn: false
        });
    }

    // Leagues
    // expand_more
    // Teams
    // expand_more
    // Players
    // expand_more
    // Matches
    // expand_more
    // Support

    render() {
        let {page, isLoggedIn, logout} = this.props;
        let navLinks = [];
        let links = [
            ["Leagues", "leaguesDropdown"],
            ["Teams", "teamsDropdown"],
            ["Players", "playersDropdown"],
            ["Matches", "matchesDropdown"],
            ["Support", "supportDropdown"]
        ]
        if (page !== "HomePage") {
            navLinks = links.map((link, index) => <li key={index}><a className="dropdown-trigger" href="#!" data-target={link[1]}>{link[0]}<i
                className="material-icons right">arrow_drop_down</i></a></li>)
        }
        return (
            <div>
                <nav>
                    <div className="nav-wrapper nav-bar-container df-dark-background">
                        <Link to="/" className="brand-logo left df-light-grey-text left">DON'T FEED</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            {navLinks}
                            <li><i className="material-icons df-light-grey-text">search</i></li>
                            {!isLoggedIn
                                ? <li><a href="#loginModal" className="modal-trigger">
                                    <div className="df-light-grey-text">Login</div>
                                </a></li>
                                :
                                <li>
                                    <div className="df-light-grey-text" onClick={logout}>Logout</div>
                                </li>
                            }
                            {!isLoggedIn
                                ? <li><Link to="/register" className="df-light-grey-text">Sign Up</Link></li>
                                : null
                            }
                        </ul>
                    </div>
                </nav>
                <LoginModal />
                <ExtraNav />
            </div>
        );
    }
}