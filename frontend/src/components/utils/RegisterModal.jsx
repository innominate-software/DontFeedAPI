import React, { useState } from "react";
import { connect } from "react-redux";
import { RegisterAuthAction } from "../../redux/actions/AuthActions";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import userDataService from "../../services/user.service"

function RegisterModal(props) {
	const { register, show, setShow, setLoginShow, setErrorHandler } = props;
	const handleClose = () => setShow(false);
	const handleLoginShow = () => {
		setShow(false);
		setLoginShow(true);
	}
	const [userState, setUserState] = useState({});
	const [formValidation, setFormValidation] = useState({})
	const emailValidationRegex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
	const passwordValidationRegex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/);
	let confirmPass = "";
	return (
		<Modal show={show} onHide={handleClose} className="df-light-grey-text">
			<Modal.Header closeButton className="df-dark-background">
				<Modal.Title>Register</Modal.Title>
			</Modal.Header>
			<Modal.Body className="df-dark-background">
				<h5 className="text-center">Already a user?
					<span className="df-pink-text ms-1" onClick={handleLoginShow} style={{ cursor: "pointer" }}>
						 Login
					</span>
				</h5>
				<Form onSubmit={(event) => {
					event.preventDefault();
					register(userState, setErrorHandler);
					// todo allow for error or create a modal for informing of validation email
					setShow(false);
				}}>
					<Form.Group className="mb-3" controlId="registerUsername">
						<Form.Label className="ms-3">Username</Form.Label>
						<Form.Control type="text" placeholder="Username" onBlur={(event) => {
							const username = event.target.value;
							setUserState({ ...userState, ...{ username } });
							userDataService.existsByUsername(username)
								.then( response => {
									console.log(response.data)
									setFormValidation({ ...formValidation, ...{ validUsername: !response.data } })
								})
						}} />
						<Form.Text
							className={userState.username ? formValidation.validUsername ? "valid" : "invalid" : "text-muted"}>
							Must be unique
						</Form.Text>
					</Form.Group>
					<Form.Group className="mb-3" controlId="registerEmail">
						<Form.Label className="ms-3">Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" onBlur={(event) => {
							const email = event.target.value;
							setUserState({ ...userState, ...{ email } });
							userDataService.existsByEmail(email)
								.then( response => {
									console.log(response.data)
									setFormValidation({ ...formValidation, ...{ validEmail: !response.data } })
								})
						}} />
						<Form.Text
							className={userState.email ? formValidation.validEmail ? "valid" : "invalid" : "text-muted"}>
							Must be validated to login
						</Form.Text>
					</Form.Group>
					<Form.Group className="mb-3" controlId="registerPassword">
						<Form.Label className="ms-3">Password</Form.Label>
						<Form.Control type="password" placeholder="Password" onChange={(event) => {
							const password = event.target.value;
							setUserState({ ...userState, ...{ password } });
							setFormValidation({ ...formValidation, ...{ validPassword: passwordValidationRegex.test(password) } })
						}} />
						<Form.Text
							className={userState.password ? formValidation.validPassword ? "valid" : "invalid" : "text-muted"}>
							Must be at least 8 characters and have 1 capitalized letter and number
						</Form.Text>
					</Form.Group>
					<Form.Group className="mb-3" controlId="confirmPassword">
						<Form.Label className="ms-3">Confirm Password</Form.Label>
						<Form.Control type="password" placeholder=" Confirm Password" onChange={(event) => {
							confirmPass = event.target.value;
							setFormValidation({ ...formValidation, ...{ confirmPassword: confirmPass === userState.password } })
						}} />
						<Form.Text className={formValidation.confirmPassword ? "valid" : "invalid"}>
							Must match password
						</Form.Text>
					</Form.Group>
					{(formValidation.validUsername && formValidation.validEmail && formValidation.validPassword && formValidation.confirmPassword) ?
						<div className="d-grid gap-2">
							<Button size="lg" variant="primary" type="submit">
								Register
							</Button>
						</div>
						:
						<div className="d-grid gap-2">
							<Button size="lg" variant="secondary" className="df-light-grey-text">
								Finish Registration Form
							</Button>
						</div>
					}
				</Form>
			</Modal.Body>
		</Modal>
		
		// <div className="modal fade df-light-grey-text" id="registerModal" tabIndex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
		//    <div className="modal-dialog">
		//        <div className="modal-content df-dark-background">
		//            <div className="modal-header">
		//                <h5 className="modal-title" id="registerModalLabel">REGISTER</h5>
		//                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
		//            </div>
		//            <div className="modal-body px-5 pb-4">
		//                <h5>Already a user? <span className="df-pink-text"><a href="" className="df-pink-text" data-bs-target="#loginModal"
		// 									   data-bs-toggle="modal" data-bs-dismiss="modal">Login</a></span></h5>
		// 				<form onSubmit={(event) => {
		// 					event.preventDefault();
		// 					console.log("registering?")
		// 					register(userState, history, setErrorHandler);
		// 				}}>
		// 					<div className="mb-3">
		// 						<label htmlFor="registerEmail" className="col-form-label">Email Address</label>
		// 						<input type="email" className="form-control" id="registerEmail"
		// 							   onChange={(event) => {
		// 								   const email = event.target.value;
		// 								   setUserState({ ...userState, ...{ email } });
		// 							   }} />
		// 					</div>
		// 					<div className="mb-3">
		// 						<label htmlFor="registerUsername" className="col-form-label">Username</label>
		// 						<input type="text" className="form-control" id="registerUsername" onChange={(event) => {
		// 							const username = event.target.value;
		// 							setUserState({ ...userState, ...{ username } });
		// 						}} />
		// 					</div>
		// 					<div className="mb-3">
		// 						<label htmlFor="registerPassword" className="col-form-label">Password</label>
		// 						<input type="text" className="form-control" id="registerPassword" onChange={(event) => {
		// 							const password = event.target.value;
		// 							setUserState({ ...userState, ...{ password } });
		// 						}} />
		// 					</div>
		// 					<div className="mb-5">
		// 						<label htmlFor="registerReEnterPassword" className="col-form-label">Re-enter
		// 							Password</label>
		// 						<input type="text" className="form-control" id="registerReEnterPassword"
		// 							   onChange={(event) => {
		// 								   const confirmPassword = event.target.value;
		// 								   // TODO do confirm password logic
		// 							   }} />
		// 					</div>
		// 					<div className="row">
		// 						<div className="col">
		// 							<div className="d-grid gap-2 d-md-flex justify-content-md-end">
		// 								<button className="btn btn-primary me-md-2" type="submit">Register</button>
		// 							</div>
		// 						</div>
		// 					</div>
		// 				</form>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	)
}

const mapStateToProps = (state) => {
	return {
		user: state,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		register: (userState, setErrorHandler) => {
			dispatch(RegisterAuthAction(userState, setErrorHandler))
		}
	}
	
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterModal);
