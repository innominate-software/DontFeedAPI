import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { RegisterAuthAction } from "../../redux/actions/AuthActions";

function RegisterModal(props) {
	const { register } = props;
	const [userState, setUserState] = useState({});
	const history = useHistory();
	const [errorHandler, setErrorHandler] = useState({
		hasError: false,
		message: "",
	})
	return (
		<div className="modal fade df-light-grey-text" id="registerModal" tabIndex="-1"
			 aria-labelledby="registerModalLabel"
			 aria-hidden="true">
			<div className="modal-dialog">
				<div className="modal-content df-dark-background">
					<div className="modal-header">
						<h5 className="modal-title" id="registerModalLabel">REGISTER</h5>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
					</div>
					<div className="modal-body px-5 pb-4">
						<h5>Already a user? <span className="df-pink-text"><a href="" className="df-pink-text" data-bs-target="#loginModal"
											   data-bs-toggle="modal" data-bs-dismiss="modal">Login</a></span></h5>
						<form onSubmit={(event) => {
							event.preventDefault();
							console.log("registering?")
							register(userState, history, setErrorHandler);
						}}>
							<div className="mb-3">
								<label htmlFor="registerEmail" className="col-form-label">Email Address</label>
								<input type="email" className="form-control" id="registerEmail"
									   onChange={(event) => {
										   const email = event.target.value;
										   setUserState({ ...userState, ...{ email } });
									   }} />
							</div>
							<div className="mb-3">
								<label htmlFor="registerUsername" className="col-form-label">Username</label>
								<input type="text" className="form-control" id="registerUsername" onChange={(event) => {
									const username = event.target.value;
									setUserState({ ...userState, ...{ username } });
								}} />
							</div>
							<div className="mb-3">
								<label htmlFor="registerPassword" className="col-form-label">Password</label>
								<input type="text" className="form-control" id="registerPassword" onChange={(event) => {
									const password = event.target.value;
									setUserState({ ...userState, ...{ password } });
								}} />
							</div>
							<div className="mb-5">
								<label htmlFor="registerReEnterPassword" className="col-form-label">Re-enter
									Password</label>
								<input type="text" className="form-control" id="registerReEnterPassword"
									   onChange={(event) => {
										   const confirmPassword = event.target.value;
										   // TODO do confirm password logic
									   }} />
							</div>
							<div className="row">
								<div className="col">
									<div className="d-grid gap-2 d-md-flex justify-content-md-end">
										<button className="btn btn-primary me-md-2" type="submit">Register</button>
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
		register: (userState, history, setErrorHandler) => {
			dispatch(RegisterAuthAction(userState, history, setErrorHandler))
		}
	}
	
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterModal);
