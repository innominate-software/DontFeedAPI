import React from 'react';
import { Link, Switch } from "react-router-dom";
import M from "materialize-css";
import MainNav from '../MainNav';

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newsToggle: true
        };
        this.toggleNews = this.toggleNews.bind(this)
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

    toggleNews() {
        console.log(this.state.newsToggle);
        this.setState(prevState => ({
            newsToggle: !prevState.newsToggle
        }));
        if (this.state.newsToggle) {
            var element = document.getElementById("newsCarousel");
            element.classList.add("news-close");
        } else {
            var element = document.getElementById("newsCarousel");
            element.classList.remove("news-close");
        }

    }


    render() {
        return (
            <div className="app-container container-fluid df-dark-background-2" >
                <MainNav />
                <div className="container-fluid">
                    <div id="newsCarousel" class="carousel carousel-slider center ">
                        <div class="carousel-fixed-item center">
                            <button class="hidden">Hide</button>
                        </div>
                        <div class="carousel-item white-text news-item-1" href="#one!">
                            <div className="news-title-container">
                                <h1 className="news-header-text">Gambit Esports bets on VulkanBet as title sponsor</h1>
                                <p class="white-text text-thin news-text">Russian organization Gambit Esports has announced Maltese esports betting platform VulkanBet as the title sponsor for three of its rosters.</p>
                                {/* <a class="red-btn btn"><i class="material-icons right">chevron_right</i>view more</a> */}
                            </div>

                        </div>
                        <div class="carousel-item white-text news-item-2" href="#one!">
                            <div className="news-title-container">
                                <h1 className="news-header-text">Virtus.pro and VP.Prodigy will play in LOOT.BET/CS Season 8</h1>
                                <p class="white-text text-thin news-text">The Virtus Pro CS:GO rosters will play in  LOOT.BET/CS Season 8. Closed qualifier for the tournament starts October 1st, the Grand Final day is November 3rd.</p>
                                {/* <a class="red-btn btn"><i class="material-icons right">chevron_right</i>view more</a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <a onClick={this.toggleNews} class="btn-floating btn-large df-dark-background news-button df-light-grey-text">
                        {this.state.newsToggle ? <i class="material-icons df-pink-text">expand_less</i> : <i class="material-icons df-pink-text">expand_more</i>}
                    </a>
                </div>
                <div className="content-container container">
                    <div className="row">
                        {/* <div className="col s6">We have 70 players, and 0 of them are online RIGHT NOW</div>
                        <div className="col s4 offset-s2">[INSERT SOCIAL LINKS HERE I GUESS]</div> */}
                    </div>
                    <div className="row">
                        <div className="col s3">
                            <ul className="collapsible">
                                <li>
                                    <div className="collapsible-header df-dark-background">
                                        <i className="material-icons df-light-grey-text">expand_more</i><strong className="df-light-grey-text">Leagues</strong>
                                    </div>
                                    <div className="collapsible-body">
                                        <ul>
                                            <li>
                                                <Link to="/league/1">WePlay! Pushka League Season 1: Division 1</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="collapsible-header df-dark-background">
                                        <i className="material-icons df-light-grey-text">expand_more</i><strong className="df-light-grey-text">Teams</strong>
                                    </div>
                                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                                <li>
                                    <div className="collapsible-header df-dark-background">
                                        <i className="material-icons df-light-grey-text">expand_more</i><strong className="df-light-grey-text">Players</strong>
                                    </div>
                                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                                <li>
                                    <div className="collapsible-header df-dark-background">
                                        <i className="material-icons df-light-grey-text">expand_more</i><strong className="df-light-grey-text">Matches</strong>
                                    </div>
                                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                                <li>
                                    <div className="collapsible-header df-dark-background">
                                        <i className="material-icons df-light-grey-text">expand_more</i><strong className="df-light-grey-text">Support</strong>
                                    </div>
                                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                            </ul>
                        </div>
                        <div className="col s6">
                            <div className="card-panel login-card df-pink-background">
                                <span>
                                    <h5>You are not logged in!</h5>
                                    Membership is completely free
                                    <div class="row">
                                        <div class="col s6">
                                            <a href="#modal1" className="modal-trigger btn-small df-dark-background df-light-grey-text" style={{ margin: '1rem' }}>Login</a>
                                        </div>
                                        <div class="col s6">
                                            <a href="/register" className="btn-small df-dark-background df-light-grey-text" style={{ margin: '1rem' }}>Sign Up</a>
                                        </div>
                                    </div>
                                </span>
                                <div id="modal1" class="modal df-dark-background df-light-grey-text">
                                    <div class="modal-content">
                                        <div className="row">
                                            <div className="col s-12">
                                                <h4 className="login-modal-title">LOGIN</h4>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="input-field col s12">
                                                <label className="input-label" for="password">
                                                    Username/Email
                                        <i class="material-icons input-valid ">check_circle</i>
                                                </label>
                                                <input id="password" type="text" class="validate" />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="input-field col s12">
                                                <label className="input-label" for="password">
                                                    Password
                                        <i class="material-icons input-valid ">check_circle</i>
                                                </label>
                                                <input id="password" type="password" class="validate" />
                                                <a href="!#">
                                                    <p className="forgot-password-text">Forgot password?</p>
                                                </a>
                                            </div>
                                            <a href="#!" class=" modal-close grey-btn btn right"><i class="material-icons right">chevron_right</i>LOGIN</a>
                                        </div>

                                    </div>


                                </div>
                            </div>

                            <ul className="collapsible">
                                <li>
                                    <div className="collapsible-header df-dark-background df-light-grey-text">
                                        <i className="material-icons ">expand_more</i>
                                        <div class="league-header-container">
                                            <strong class="league-header-title">Madeup League</strong>
                                            <strong class="league-header-location">Texas | USA</strong>
                                        </div>

                                    </div>
                                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                                <li>
                                    <div className="collapsible-header df-dark-background df-light-grey-text">
                                        <i className="material-icons">expand_more</i>
                                        <div class="league-header-container">
                                            <strong class="league-header-title">Fake League</strong>
                                            <strong class="league-header-location">Peruville | PE</strong>
                                        </div>

                                    </div>
                                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                                <li>
                                    <div className="collapsible-header df-dark-background df-light-grey-text">
                                        <i className="material-icons">expand_more</i>
                                        <div class="league-header-container">
                                            <strong class="league-header-title">Not Real League</strong>
                                            <strong class="league-header-location">Chinatown | CN</strong>
                                        </div>

                                    </div>
                                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                                <li>
                                    <div className="collapsible-header df-dark-background df-light-grey-text">
                                        <i className="material-icons">expand_more</i>
                                        <div class="league-header-container">
                                            <strong class="league-header-title">National Real League</strong>
                                            <strong class="league-header-location">RU</strong>
                                        </div>

                                    </div>
                                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                </li>
                                <li>
                                    <div className="collapsible-header df-dark-background df-light-grey-text">
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