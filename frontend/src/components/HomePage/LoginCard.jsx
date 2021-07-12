import React from "react";
import connect from "react-redux/lib/connect/connect";

function LoginCard(props) {
    return (
        <div className="card-panel login-card df-pink-background">
            <span>
                <h5>You are not logged in!</h5>
                Membership is completely free
                <div className="row">
                    <div className="col s6">
                        <a href="#loginModal"
                           className="modal-trigger btn-small df-dark-background df-light-grey-text">Login</a>
                    </div>
                    <div className="col s6">
                        <a href="/register"
                           className="btn-small df-dark-background df-light-grey-text">Sign Up</a>
                    </div>
                </div>
            </span>
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         user: state,
//     };
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         login: (loginState, history, setErrorHandler) => {
//             dispatch(LoginAuthAction(loginState, history, setErrorHandler));
//         },
//     };
// };

export default /*connect(mapStateToProps, mapDispatchToProps)(*/LoginCard/*)*/;