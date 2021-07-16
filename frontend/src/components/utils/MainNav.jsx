import React from 'react';
import { Link, useHistory } from "react-router-dom";
import LoginModal from "./LoginModal";
import ExtraNav from "./ExtraNav";
import { connect } from "react-redux";
import { LogOutAuthAction } from "../../redux/actions/AuthActions";

function MainNav(props) {
	const { auth, logout, errorHandler } = props;
	const history = useHistory();
	// let navLinks = [];
	// let links = [
	// 	["Leagues", "leaguesDropdown"],
	// 	["Teams", "teamsDropdown"],
	// 	["Players", "playersDropdown"],
	// 	["Matches", "matchesDropdown"],
	// 	["Support", "supportDropdown"]
	// ]
	// if (page !== "HomePage" || page !== "RegisterPage") {
	// 	navLinks = links.map((link, index) => <li key={index}><a className="dropdown-trigger" href="#!"
	// 															 data-target={link[1]}>{link[0]}<i
	// 		className="material-icons right">arrow_drop_down</i></a></li>)
	// }
	return (
		<React.Fragment>
			<nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
				{/*<div className="df-dark-background">*/}
				<div className="container-fluid">
					<Link to="/" className="navbar-brand brand-logo df-light-grey-text" href="#">DON'T FEED</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
							aria-expanded="false" aria-label="Toggle navigation" />
					<span className="navbar-toggler-icon" />
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active df-light-grey-text" aria-current="page" href="#">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link df-light-grey-text" href="#">Link</a>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle df-light-grey-text" href="#" id="navbarDropdown"
							   role="button"
							   data-bs-toggle="dropdown" aria-expanded="false">
								Dropdown
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><a className="dropdown-item df-light-grey-text" href="#">Action</a></li>
								<li><a className="dropdown-item df-light-grey-text" href="#">Another action</a></li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li><a className="dropdown-item df-light-grey-text" href="#">Something else here</a>
								</li>
							</ul>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
						</li>
					</ul>
					<form className="d-flex">
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
						<button className="btn btn-outline-success" type="submit">Search</button>
					</form>
				</div>
			</nav>
			<LoginModal />
			{/*<ExtraNav />*/}
		</React.Fragment>
	);
}

const mapStateToProps = (state) => {
	return {
		auth: state,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		logout: (history) => {
			dispatch(LogOutAuthAction(history));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNav);