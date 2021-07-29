import React from 'react';
import NewsCarousel from "./NewsCarousel";
import OnlinePlayers from "./OnlinePlayers";
import LeagueCreateButton from "./LeagueCreateButton";
import LeaguesWithOpenRegistration from "./LeaguesWithOpenRegistration";
import MostRecentLeagues from "./MostRecentLeagues";
import LoginCard from "./LoginCard";
import GameBubbles from "./GameBubbles";
import { connect } from "react-redux";

function HomePage(props) {
	const { auth } = props;
	return (
		<div className="app-container df-dark-background-2">
			<div className="row">
				<GameBubbles />
				<NewsCarousel />
				<div className="row p-3">
					<div className="col col-2" />
					<div className="col col-7 m-3">
						{!auth.isLoggedIn
							? <LoginCard />
							: null
						}
						<MostRecentLeagues />
						<LeaguesWithOpenRegistration />
						<LeagueCreateButton />
					</div>
					<div className="col d-none d-md-block info m-3">
						<OnlinePlayers />
					</div>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		auth: state.authState,
	}
}

export default connect(mapStateToProps)(HomePage);