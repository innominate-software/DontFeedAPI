import React, { Component } from "react";
import MainNav from "../utils/MainNav";
import Footer from "../utils/Footer";

export default class SupportPage extends Component {

    constructor(props) {
        super(props);
        // method binding here
        // ex. this.refreshState = this.refreshState.bind(this);
        this.state = {
            isLoggedIn: true
        };
    }

    render() {
        let isLoggedIn = this.state.isLoggedIn;
        return (
            <div className="app-container container-fluid df-dark-background-2">
                <MainNav isLoggedIn={isLoggedIn} />
                <div className="container-fluid page-container">
                    <div className="row">
                        <div className="col s2 ">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">Submit a Ticket</span>
                                </div>
                            </div>
                        </div>
                        <div className="col s1" />
                        <div className="col s2 ">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">Request a Feature</span>
                                </div>
                            </div>
                        </div>
                        <div className="col s2"/>
                        <div className="col s2 ">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">Report Cheater</span>
                                </div>
                            </div>
                        </div>
                        <div className="col s1" />
                        <div className="col s2 ">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">Change Password</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">FAQ's</span>

                                    <ul className="collapsible">
                                        <li>
                                            <div className="collapsible-header black-text">Question 1</div>
                                            <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="collapsible-header black-text">Question 2</div>
                                            <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="collapsible-header black-text">Question 3</div>
                                            <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="collapsible-header black-text">Question 4</div>
                                            <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="collapsible-header black-text">Question 5</div>
                                            <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="collapsible-header black-text">Question 6</div>
                                            <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="collapsible-header black-text">Question 7</div>
                                            <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="collapsible-header black-text">Question 8</div>
                                            <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="collapsible-header black-text">Question 9</div>
                                            <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-action">
                                    <span>If you don’t see your question here, feel free to submit it in a ticket</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
