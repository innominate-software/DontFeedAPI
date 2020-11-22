import React, { Component } from 'react';
import MainNav from "../utils/MainNav";
import Footer from "../utils/Footer";

export default class MatchInfoPage extends Component {
    constructor(props) {
        super(props)
        // method binding here
        // ex. this.refreshState = this.refreshState.bind(this);
        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        // const id = this.props.match.params.id
        let isLoggedIn = this.state.isLoggedIn;
        return (
            <div className="app-container container-fluid df-dark-background-2">
                <MainNav isLoggedIn={isLoggedIn} />
                {/*<GameBanner />*/}
                <div className="container-fluid page-container">
                    <div className="row">
                        <div className="col s12">
                            {/*<Event />*/}
                            <h5>WePlay! Pushka League Season 1: Division 1</h5>
                            {/*<Victor />*/}
                            <h5>Team Nigma Victory</h5>
                            {/*<Score />*/}
                            <h5>48-38</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s6">
                            {/*<TeamA />*/}
                            <span>Team Nigma</span>
                        </div>
                        <div className="col s6">
                            {/*<TeamB />*/}
                            <span>OG Seed</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s4">
                            {/*<Duration />*/}
                            <div>match duration</div>
                            <div>42:34</div>
                        </div>
                        <div className="col s4">
                            {/*<MatchID />*/}
                            <div>match id</div>
                            <div>5402204871</div>
                        </div>
                        <div className="col s4">
                            {/*<MatchDate />*/}
                            <div>match date</div>
                            <div>05-07-2020</div>
                        </div>
                    </div>
                    <div className="row">
                        {/*<Players />*/}
                        <span>Players</span>
                        <div className="row">
                            <div className="col s6">
                                <div className="row">
                                    <div className="col s2">
                                        <span>miracle</span>
                                    </div>
                                    <div className="col s2">
                                        <span>wee</span>
                                    </div>
                                    <div className="col s2">
                                        <span>mindcontrol</span>
                                    </div>
                                    <div className="col s2">
                                        <span>gh</span>
                                    </div>
                                    <div className="col s2">
                                        <span>kuroky</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col s6">
                                <div className="row">
                                    <div className="col s2">
                                        <span>Madara</span>
                                    </div>
                                    <div className="col s2">
                                        <span>Chessie</span>
                                    </div>
                                    <div className="col s2">
                                        <span>Xibbe</span>
                                    </div>
                                    <div className="col s2">
                                        <span>Zfreek</span>
                                    </div>
                                    <div className="col s2">
                                        <span>Peksu</span>
                                    </div>
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