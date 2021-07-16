import React, { useState } from 'react';
import MainNav from '../utils/MainNav';
import Footer from "../utils/Footer";
import FormTitle from "../utils/Form/FormTitle";
import { RegisterAuthAction } from "../../redux/actions/AuthActions";
import { connect } from "react-redux";
import { useHistory } from "react-router";

function RegisterPage(props) {
    const { register } = props;
    const [userState, setUserState] = useState({});
    const history = useHistory();
    // const [errorHandler, setErrorHandler] = useState({
    //     hasError: false,
    //     message: "",
    // })
    return (
        <div>
            <main>
                <div className="app-container container-fluid df-dark-background-2">
                    <MainNav isLoggedIn={false} />
                    <div className="container-fluid page-container">
                        <div className="row">
                            <FormTitle title="Register" />
                        </div>
                        <div className="row">
                            <form className="col s12" onSubmit={(event) => {
                                event.preventDefault();
                                register(userState, history/*, setErrorHandler*/)
                            }}>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <label className="input-label">First Name
                                            <input type="text" id="first_name" name="firstName"
                                                   onChange={(event) => {
                                                       const firstName = event.target.value;
                                                       setUserState({ ...userState, ...{ firstName } });
                                                   }} />
                                        </label>
                                    </div>
                                    <div className="input-field col s6">
                                        <label className="input-label">Last Name
                                            <input type="text" id="last_name" name="lastName"
                                                   onChange={(event) => {
                                                       const lastName = event.target.value;
                                                       setUserState({ ...userState, ...{ lastName } });
                                                   }} />
                                        </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <label className="input-label">Username<span className="required">*</span>
                                            <i className="material-icons input-valid ">check_circle</i>
                                            <input type="text" id="username" name="username" required={true}
                                                   onChange={(event) => {
                                                       const username = event.target.value;
                                                       setUserState({ ...userState, ...{ username } });
                                                   }} />
                                        </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <label className="input-label">Email Address<span
                                            className="required">*</span>
                                            <i className="material-icons input-valid ">check_circle</i>
                                            <input type="email" id="email_address" name="emailAddress"
                                                   required={true}
                                                   onChange={(event) => {
                                                       const email = event.target.value;
                                                       setUserState({ ...userState, ...{ email } });
                                                   }} />
                                        </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <label className="input-label">Password<span
                                            className="required">*</span>
                                            <i className="material-icons input-valid ">check_circle</i>
                                            <input type="password" id="password" name="password"
                                                   required={true}
                                                   onChange={(event) => {
                                                       const password = event.target.value;
                                                       setUserState({ ...userState, ...{ password } });
                                                   }} />
                                        </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <label className="input-label">Re-enter Password<span
                                            className="required">*</span>
                                            <i className="material-icons input-valid ">check_circle</i>
                                            <input type="password" id="confirmPassword" name="confirmPassword"
                                                   required={true}
                                                // onChange={(event) => {
                                                // const confirmPassword = event.target.value;
                                                // TODO do confirm password logic}*/}
                                            />
                                        </label>
                                    </div>
                                </div>
                                <button className="grey-btn btn right" ><i className="material-icons right">chevron_right</i>Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);