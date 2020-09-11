import React, { Component } from 'react';
import { Link } from "react-router-dom";

class CreateTeam extends Component {

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
                <div className="container">
                    <h1>Create Team Page</h1>
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s5">
                                    <input placeholder="Logo" id="logo" type="file" />
                                    <label htmlFor="logo">Logo</label>
                                </div>
                                <div className="input-field col s7">
                                    <input id="team_name" type="text" className="validate" />
                                    <label htmlFor="team_name">Team Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="motto" type="text" />
                                    <label htmlFor="motto">Motto</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s8">
                                    <input id="passcode" type="password" className="validate" />
                                    <label htmlFor="passcode">PassCode</label>
                                </div>
                                <div className="input-field col s4">
                                    <a className="btn-large">Create</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12">

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export { CreateTeam };