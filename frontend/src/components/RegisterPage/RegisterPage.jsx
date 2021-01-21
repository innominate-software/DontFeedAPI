import React, { Component } from 'react';
import MainNav from '../utils/MainNav';
import Footer from "../utils/Footer";
import FormTextInput from "../utils/Form/FormTextInput";
import FormTitle from "../utils/Form/FormTitle";
import FormSubmitButton from "../utils/Form/FormSubmitButton";
import M from "materialize-css";
import { User } from "../../models/User";

export default class RegisterPage extends Component {

    constructor(props) {
        super(props);
        // method binding here
        // ex. this.refreshState = this.refreshState.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.checkForm = this.checkForm.bind(this);
        this.state = {
            isLoggedIn: true,
            firstName: "",
            lastName: "",
            username: "",
            emailAddress: "",
            password: "",
            confirmPassword: "",
        };
    }

    componentDidMount() {
        M.AutoInit();
    }

    checkForm() {
        //    check password and confirm password match
        let passMatch = this.state.password === this.state.confirmPassword;
        console.log("Passwords match: " + passMatch);

        //    check password fits requirements
        let passPattern = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm);
        let passWorks = this.state.password.match(passPattern) !== null;
        console.log("Password is correct format: " + passWorks)

        //    check username does not already exist

        //    check email
        let emailPattern = new RegExp(/^[A-Za-z0-9_@./#&+-]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/);
        let emailWorks = this.state.emailAddress.match(emailPattern) !== null;
        console.log("Email is correct format: " + emailWorks);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleClick(e) {
        e.preventDefault()
        let newUser = new User();
        this.checkForm();
        // if (this.checkForm()) {
        newUser.firstName = (this.state.firstName !== "") ? this.state.firstName : null;
        newUser.lastName = (this.state.lastName !== "") ? this.state.lastName : null;
        newUser.username = this.state.username;
        newUser.emailAddress = this.state.emailAddress;
        newUser.password = this.state.password
        console.log(newUser);
        // } else {
        // console.log("didnt work")
        // }
    }

    render() {
        let isLoggedIn = this.state.isLoggedIn;
        return (
            <div>
                <main>
                    <div className="app-container container-fluid df-dark-background-2">
                        <MainNav isLoggedIn={isLoggedIn} />
                        <div className="container-fluid page-container">
                            <div className="row">
                                <FormTitle title="Register" />
                            </div>
                            <div className="row">
                                <form className="col s12">
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <FormTextInput type="text" label="First Name" id="first_name"
                                                           name="firstName"
                                                           value={this.state.firstName} handleChange={this.handleChange}
                                                           required={false} />
                                        </div>
                                        <div className="input-field col s6">
                                            <FormTextInput type="text" label="Last Name" id="last_name" name="lastName"
                                                           value={this.state.lastName} handleChange={this.handleChange}
                                                           required={false} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <FormTextInput type="text" label="Username" id="username" name="username"
                                                           value={this.state.username} handleChange={this.handleChange}
                                                           required={true} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <FormTextInput type="email" label="Email Address" id="email_address"
                                                           name="emailAddress" value={this.state.emailAddress}
                                                           handleChange={this.handleChange} required={true} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <FormTextInput type="password" label="Password" id="password"
                                                           name="password"
                                                           value={this.state.password} handleChange={this.handleChange}
                                                           required={true} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <FormTextInput type="password" label="Re-enter Password" id="confirm"
                                                           name="confirmPassword" value={this.state.confirmPassword}
                                                           handleChange={this.handleChange} required={true} />
                                        </div>
                                    </div>
                                    <FormSubmitButton handleClick={this.handleClick} />
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}