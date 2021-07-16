import React from 'react';
import MainNav from '../utils/MainNav';
import NewsCarousel from "./NewsCarousel";
import Footer from "../utils/Footer";
import OnlinePlayers from "./OnlinePlayers";
import LeagueCreateButton from "./LeagueCreateButton";
import LeaguesWithOpenRegistration from "./LeaguesWithOpenRegistration";
import MostRecentLeagues from "./MostRecentLeagues";
import LoginCard from "./LoginCard";
import GameBubbles from "./GameBubbles";
import { useHistory } from "react-router";
import { connect } from "react-redux";

function HomePage(props) {
	const { auth } = props;
	const history = useHistory();
	const sendToLeagueCreate = () => {
		history.push(`/leagues/create`)
	}
	return (
		<div>
			<MainNav />
			<div className="app-container container-fluid df-dark-background-2">
				<GameBubbles />
				<NewsCarousel />
				<div className="content-container container">
					<div className="row">
						<div className="col s8">
							{!auth.isLoggedIn
								? <LoginCard />
								: null
							}
							<MostRecentLeagues />
							<LeaguesWithOpenRegistration />
							<LeagueCreateButton handleClick={sendToLeagueCreate} />
						</div>
						<div className="col s7">
							<OnlinePlayers />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		auth: state,
	}
}

export default connect(mapStateToProps)(HomePage);