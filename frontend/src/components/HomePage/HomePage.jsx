import React from 'react';
import M from "materialize-css";
import MainNav from '../utils/MainNav';
import NewsCarousel from "./NewsCarousel";
import Footer from "../utils/Footer";
import OnlinePlayers from "./OnlinePlayers";
import LeagueCreateButton from "./LeagueCreateButton";
import LeaguesWithOpenRegistration from "./LeaguesWithOpenRegistration";
import MostPopularLeagues from "./MostPopularLeagues";
import SideNav from "./SideNav";
import LoginCard from "./LoginCard";
import GameBubbles from "./GameBubbles";

export default class HomePage extends React.Component {

    constructor(props) {
        super(props);
        // method binding here
        // ex. this.refreshState = this.refreshState.bind(this);
        this.state = {
            isLoggedIn: true
        };
    }

    componentDidMount() {
        M.AutoInit();
        M.Carousel.init({
            fullWidth: true,
            indicators: true
        });
    }

    render() {
        let isLoggedIn = this.state.isLoggedIn;
        return (
            <div className="app-container container-fluid df-dark-background-2">
                <MainNav isLoggedIn={isLoggedIn} />
                <GameBubbles />
                <NewsCarousel />
                <div className="content-container container">
                    <div className="row">
                        <div className="col s3">
                            <SideNav />
                        </div>
                        <div className="col s6">
                            {!isLoggedIn ? <LoginCard /> : null}
                            <MostPopularLeagues />
                            <LeaguesWithOpenRegistration />
                            <LeagueCreateButton />
                        </div>
                        <div className="col s3">
                            <OnlinePlayers />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}