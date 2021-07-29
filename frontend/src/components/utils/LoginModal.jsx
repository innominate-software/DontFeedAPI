import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { LoginAuthAction } from "../../redux/actions/AuthActions";

function LoginModal(props) {
	const { login } = props;
	const [loginState, setLoginState] = useState({});
	const history = useHistory();
	const [errorHandler, setErrorHandler] = useState({
		hasError: false,
		message: "",
	})
	return (
		<div className="modal fade df-light-grey-text" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel"
			 aria-hidden="true">
			<div className="modal-dialog">
				<div className="modal-content df-dark-background">
					<div className="modal-header">
						<h5 className="modal-title" id="loginModalLabel">LOGIN</h5>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
					</div>
					<div className="modal-body px-5 pb-4">
						<h5>Not yet a user? <span className="df-pink-text"><a href="" className="df-pink-text"
																			  data-bs-target="#registerModal"
																			  data-bs-toggle="modal"
																			  data-bs-dismiss="modal">Register</a></span>
						</h5>
						<form onSubmit={(event) => {
							event.preventDefault();
							login(loginState, history, setErrorHandler);
						}}>
							<div className="mb-3">
								<label htmlFor="loginUsername" className="col-form-label">Username</label>
								<input type="text" className="form-control" id="loginUsername" onChange={(event) => {
									const username = event.target.value;
									setLoginState({ ...loginState, ...{ username } });
								}} />
							</div>
							<div className="mb-5">
								<label htmlFor="loginPassword" className="col-form-label">Password</label>
								<input type="text" className="form-control" id="loginPassword" onChange={(event) => {
									const password = event.target.value;
									setLoginState({ ...loginState, ...{ password } });
								}} />
							</div>
							<div className="row">
								<div className="col col-8 df-pink-text">
									<p>forgot username/password</p>
								</div>
								<div className="col">
									<div className="d-grid gap-2 d-md-flex justify-content-md-end">
										<button className="btn btn-primary me-md-2" type="submit">Login</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		user: state,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		login: (loginState, history, setErrorHandler) => {
			dispatch(LoginAuthAction(loginState, history, setErrorHandler))
		}
	}
	
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
