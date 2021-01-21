import React, { Component } from 'react';
import { Link } from "react-router-dom";
import M from "materialize-css";
import LoginModal from "./LoginModal";

export default class MainNav extends Component {
    constructor(props) {
        super(props);
        // method binding here
        // ex. this.refreshState = this.refreshState.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.state = {
            isLoggedIn: this.props.isLoggedIn
        }
    }

    componentDidMount() {
        M.AutoInit();
    }

    login() {
        this.setState({
            isLoggedIn: true
        })
    }

    logout() {
        this.setState({
            isLoggedIn: false
        })
    }

    render() {
        let isLoggedIn = this.state.isLoggedIn;
        return (
            <div>
            <nav>
                <div className="nav-wrapper nav-bar-container df-dark-background">
                    <Link to="/" className="brand-logo left df-light-grey-text left">DON'T FEED</Link>
                    {!isLoggedIn
                        ? <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><i className="material-icons df-light-grey-text">search</i></li>
                            {/*<li><Link to="/login" className="df-light-grey-text">Login</Link></li>*/}
                            <li><a href="#loginModal" className="modal-trigger"><div className="df-light-grey-text">Login</div></a></li>
                            <li><Link to="/register" className="df-light-grey-text">Sign Up</Link></li>
                        </ul>
                        : <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><i className="material-icons df-light-grey-text">search</i></li>
                            {/*<li><Link to="/logoff" className="df-light-grey-text">Logout</Link></li>*/}
                            <li><div className="df-light-grey-text" onClick={this.logout}>Logout</div></li>
                        </ul>
                    }
                </div>
            </nav>
            <LoginModal />
            </div>
        );
    }
}