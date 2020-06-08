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
        M.AutoInit();
        M.Carousel.init({
            fullWidth: true,
            indicators: true
          });
    }
    


    render() {
        return (
            <div class="app-container" >
                <nav>
                    <div className="nav-wrapper nav-bar-container green-background">
                        <a href="/" className="brand-logo left black-text">Don't Feed</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><i className="material-icons">search</i></li>
                            <li><Link to="/login" className="black-text">Log In</Link></li>
                            <li><Link to="/register" className="black-text">Sign Up</Link></li>
                        </ul>
                    </div>
                </nav>
                <div class="carousel carousel-slider center">
                    <div class="carousel-fixed-item center">
                        <a class="btn waves-effect white grey-text darken-text-2">Hide</a>
                    </div>
                    <div class="carousel-item white-text news-item-1" href="#one!">
                        <h2>News Thing 1</h2>
                        <p class="white-text">This is your first panel</p>
                    </div>
                    <div class="carousel-item white-text news-item-2" href="#two!">
                        <h2>News Thing 2</h2>
                        <p class="white-text">This is your second panel</p>
                    </div>
                    {/* <div class="carousel-item green white-text" href="#three!">
                        <h2>Third Panel</h2>
                        <p class="white-text">This is your third panel</p>
                    </div>
                    <div class="carousel-item blue white-text" href="#four!">
                        <h2>Fourth Panel</h2>
                        <p class="white-text">This is your fourth panel</p>
                    </div> */}
                </div>
                <div className="content-container container">
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
                            <div className="card-panel login-card">
                                <span>
                                    <h5>You are not logged in!</h5>
                                    Membership is completely free
                                    <div class="row">
                                        <div class="col s6">
                                            <a href="/login" className="waves-effect waves-light btn-small green-background" style={{ margin: '1rem' }}>Log In</a>
                                        </div>
                                        <div class="col s6">
                                            <a href="/register" className="waves-effect waves-light btn-small green-background" style={{ margin: '1rem' }}>Sign Up</a>
                                        </div>
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
                                <li>
                                    <div className="collapsible-header green-background">
                                        <i className="material-icons">expand_more</i>
                                        <div class="league-header-container">
                                            <strong class="league-header-title">National Real League</strong>
                                            <strong class="league-header-location">RU</strong>
                                        </div>

                                    </div>
                                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                                <li>
                                    <div className="collapsible-header green-background">
                                        <i className="material-icons">expand_more</i>
                                        <div class="league-header-container">
                                            <strong class="league-header-title">Global League</strong>
                                            <strong class="league-header-location">International</strong>
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