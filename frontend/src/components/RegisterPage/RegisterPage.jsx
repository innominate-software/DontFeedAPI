import React, { Component } from 'react';
import MainNav from '../utils/MainNav';
import Footer from "../utils/Footer";
import FormTextInput from "../utils/FormTextInput";
import FormTitle from "../utils/FormTitle";
import FormSubmitButton from "../utils/FormSubmitButton";
import M from "materialize-css";

class RegisterPage extends Component {

    constructor(props) {
        super(props);
        // method binding here
        // ex. this.refreshState = this.refreshState.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isLoggedIn: true
        };
    }

    componentDidMount() {
        M.AutoInit();
    }

    handleClick(e) {
        e.preventDefault()
    }

    render() {
        let isLoggedIn = this.state.isLoggedIn;
        return (
            <div className="app-container container-fluid df-dark-background-2">
                <MainNav isLoggedIn={isLoggedIn}/>
                <div className="container-fluid page-container">
                    <div className="row">
                        <FormTitle title="Register"/>
                    </div>
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                <FormTextInput label="First Name" id="first_name" validate={false} />
                                </div>
                                <div className="input-field col s6">
                                    <FormTextInput label="Last Name" id="last_name" validate={false} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <FormTextInput label="Username" id="username" validate={true} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <FormTextInput label="Email" id="email" validate={true} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <FormTextInput label="Password" id="password" validate={true} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <FormTextInput label="Confirm Password" id="confirm" validate={true} />
                                </div>
                            </div>
                            <FormSubmitButton handleClick={this.handleClick} />
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export { RegisterPage };