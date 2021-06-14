import React from "react";

export default function LoginModal(props) {
    return (
        <div id="loginModal" className="modal df-dark-background df-light-grey-text">
            <div className="modal-content">
                <div className="row">
                    <div className="col s-12">
                        <h4 className="login-modal-title">LOGIN</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <label className="input-label" htmlFor="username-or-email">
                            Username or Email
                        </label>
                        <input id="username-or-email" type="text" className="validate" />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <label className="input-label" htmlFor="password">
                            Password
                        </label>
                        <input id="password" type="password" className="validate" />
                        <a href="!#">
                            <p className="forgot-password-text">Forgot password?</p>
                        </a>
                    </div>
                    <a href="#!" className=" modal-close grey-btn btn right"><i
                        className="material-icons right">chevron_right</i>LOGIN</a>
                </div>
            </div>
        </div>
    )
}