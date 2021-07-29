import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import LoginModal from "./LoginModal";
import { connect } from "react-redux";
import { LoginAuthAction, LogOutAuthAction, RegisterAuthAction } from "../../redux/actions/AuthActions";
import RegisterModal from "./RegisterModal";

function MainNav(props) {
	const { auth, logout, login, register } = props;
	const history = useHistory();
	const [errorHandler, setErrorHandler] = useState({
		hasError: false,
		message: "",
	})
	return (
		<React.Fragment>
			<nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark f-dark-background">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand df-light-grey-text">DON'T FEED</Link>
					<button className=" custom-toggler navbar-toggler" type="button" data-bs-toggle="collapse"
							data-bs-target="#navItems" aria-controls="navItems"
							aria-expanded="false" aria-label="Toggle navigation">
						<span className="custom-toggler navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navItems">
						<ul className="navbar-nav mb-2 mx-5 mb-lg-0">
							<li className="nav-item dropdown mx-3">
								<a className="nav-link dropdown-toggle" href="#" id="teamsDropdown" role="button"
								   data-bs-toggle="dropdown" aria-expanded="false">
									Teams
								</a>
								<ul className="dropdown-menu" aria-labelledby="teamsDropdown">
									<li><a className="dropdown-item" href="#">Action</a></li>
									<li><a className="dropdown-item" href="#">Another action</a></li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li><a className="dropdown-item" href="#">Something else here</a></li>
								</ul>
							</li>
							<li className="nav-item dropdown mx-3">
								<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
								   data-bs-toggle="dropdown" aria-expanded="false">
									Leagues
								</a>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li><a className="dropdown-item" href="#">poop</a></li>
									<li><a className="dropdown-item" href="#">Another poop</a></li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li><a className="dropdown-item" href="#">Something poop here</a></li>
								</ul>
							</li>
							<li className="nav-item dropdown mx-3">
								<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
								   data-bs-toggle="dropdown" aria-expanded="false">
									Players
								</a>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li><a className="dropdown-item" href="#">Action</a></li>
									<li><a className="dropdown-item" href="#">Another action</a></li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li><a className="dropdown-item" href="#">Something else here</a></li>
								</ul>
							</li>
							<li className="nav-item dropdown mx-3">
								<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
								   data-bs-toggle="dropdown" aria-expanded="false">
									Matches
								</a>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li><a className="dropdown-item" href="#">Action</a></li>
									<li><a className="dropdown-item" href="#">Another action</a></li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li><a className="dropdown-item" href="#">Something else here</a></li>
								</ul>
							</li>
							<li className="nav-item dropdown mx-3">
								<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
								   data-bs-toggle="dropdown" aria-expanded="false">
									Support
								</a>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li><a className="dropdown-item" href="#">Action</a></li>
									<li><a className="dropdown-item" href="#">Another action</a></li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li><a className="dropdown-item" href="#">Something else here</a></li>
								</ul>
							</li>
						</ul>
						<form className="d-flex w-100 me-auto">
							<input className="form-control df-light-grey-text df-dark-background" type="search"
								   placeholder="Search"
								   aria-label="Search" />
						</form>
						<div className="d-grid gap-2 d-md-flex justify-content-md-end mx-3">
							{auth.isLoggedIn ?
								<h5 className="m-auto df-pink-text"><Link to={`/user/${auth.user.id}`} className="df-pink-text">{auth.user.username}</Link></h5>
								:
								<button className="btn btn-primary me-md-2" data-bs-toggle="modal"
										data-bs-target="#loginModal">Login</button>
							}
							{auth.isLoggedIn ?
								<button className="btn btn-primary me-md-2" onClick={() => {
								logout(auth, history)}
								}>Logout</button>
								:
								<button className="btn btn-secondary" type="button" data-bs-toggle="modal"
										data-bs-target="#registerModal">Signup</button>
							}
						</div>
					</div>
				</div>
			</nav>
			<LoginModal />
			<RegisterModal />
		</React.Fragment>
	);
}

const mapStateToProps = (state) => {
	return {
		auth: state.authState,
		user: state.user,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		logout: (userState, history) => {
			dispatch(LogOutAuthAction(userState, history));
		},
		
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNav);