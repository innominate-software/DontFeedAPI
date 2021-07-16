import React, {useState} from "react";
import {connect} from "react-redux";
import {useHistory} from "react-router";
import {LoginAuthAction} from "../../redux/actions/AuthActions";

function LoginModal(props) {
    const { login } = props;
    const [loginState, setLoginState] = useState({});
    const history = useHistory();
    // const [errorHandler, setErrorHandler] = useState({
    //     hasError: false,
    //     message: "",
    // })
    return (
        <div id="loginModal" className="modal df-dark-background df-light-grey-text">
            <div className="modal-content">
                <div className="row">
                    <div className="col s-12">
                        <h4 className="login-modal-title">LOGIN</h4>
                    </div>
                </div>
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        login(loginState, history, /*setErrorHandler*/);
                    }}
                >
                    <div className="row">
                        <div className="input-field col s12">
                            <label className="input-label" htmlFor="username">
                                Username
                            </label>
                            <input id="username" type="text" className="validate" onChange={(event) => {const username = event.target.value;setLoginState({ ...loginState, ...{ username } });}} />
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
                </form>
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
