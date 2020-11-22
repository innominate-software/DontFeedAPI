import React from 'react';
import { Link } from "react-router-dom";

export default function MainNav({isLoggedIn}) {

    return (
        <nav>
            <div className="nav-wrapper nav-bar-container df-dark-background">
                <Link to="/" className="brand-logo left df-light-grey-text left">DON'T FEED</Link>
                {!isLoggedIn
                    ? <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><i className="material-icons df-light-grey-text">search</i></li>
                        <li><Link to="/login" className="df-light-grey-text">Login</Link></li>
                        <li><Link to="/register" className="df-light-grey-text">Sign Up</Link></li>
                    </ul>
                    : <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><i className="material-icons df-light-grey-text">search</i></li>
                        <li><Link to="/logoff" className="df-light-grey-text">Logout</Link></li>
                    </ul>
                }
            </div>
        </nav>
    );

}