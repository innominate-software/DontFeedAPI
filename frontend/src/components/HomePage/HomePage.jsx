import React from 'react';
import M from "materialize-css";
import MainNav from '../utils/MainNav';
import NewsCarousel from "./NewsCarousel";
import Footer from "../utils/Footer";
import OnlinePlayers from "./OnlinePlayers";
import LeagueCreateButton from "./LeagueCreateButton";
import LeaguesWithOpenRegistration from "./LeaguesWithOpenRegistration";
import MostRecentLeagues from "./MostRecentLeagues";
import SideNav from "./SideNav";
import LoginCard from "./LoginCard";
import GameBubbles from "./GameBubbles";

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        // method binding here
        // ex. this.refreshState = this.refreshState.bind(this);
        this.sendToLeagueCreate = this.sendToLeagueCreate.bind(this);
        this.state = {
            isLoggedIn: false
        };
    }

    componentDidMount() {
        M.AutoInit();
        M.Carousel.init({
            fullWidth: true,
            indicators: true
        });
    }

    sendToLeagueCreate() {
        this.props.history.push(`/leagues/create`)
    }

    render() {
        let {isLoggedIn} = this.state;
        const page = "HomePage"
        return (
            <div>
                <main>
                    <div className="app-container container-fluid df-dark-background-2">
                        <MainNav page={page} isLoggedIn={isLoggedIn} logout={this.logOut} />
                        <GameBubbles />
                        <NewsCarousel />
                        <div className="content-container container">
                            <div className="row">
                                <div className="col s3">
                                    <SideNav />
                                </div>
                                <div className="col s6">
                                    {
                                        !isLoggedIn
                                            ? <LoginCard />
                                            : null
                                    }
                                    <MostRecentLeagues />
                                    <LeaguesWithOpenRegistration />
                                    <LeagueCreateButton handleClick={this.sendToLeagueCreate} />
                                </div>
                                <div className="col s3">
                                    <OnlinePlayers />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default HomePage;