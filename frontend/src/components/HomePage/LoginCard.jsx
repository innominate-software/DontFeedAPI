import React from "react";

export default function LoginCard(props) {
    return (
        <div className="card-panel login-card df-pink-background">
            <span>
                <h5>You are not logged in!</h5>
                Membership is completely free
                <div className="row">
                    <div className="col s6">
                        <a href="#modal1"
                           className="modal-trigger btn-small df-dark-background df-light-grey-text">Login</a>
                    </div>
                    <div className="col s6">
                        <a href="/register"
                           className="btn-small df-dark-background df-light-grey-text">Sign Up</a>
                    </div>
                </div>
            </span>
            <div id="modal1" className="modal df-dark-background df-light-grey-text">
                <div className="modal-content">
                    <div className="row">
                        <div className="col s-12">
                            <h4 className="login-modal-title">LOGIN</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <label className="input-label" htmlFor="password">
                                Username/Email
                                <i className="material-icons input-valid ">check_circle</i>
                            </label>
                            <input id="password" type="text" className="validate" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <label className="input-label" htmlFor="password">
                                Password
                                <i className="material-icons input-valid ">check_circle</i>
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
        </div>
    )
}