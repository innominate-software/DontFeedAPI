import React, { Component } from 'react';
import M from "materialize-css";
import MainNav from "../utils/MainNav";
import FormTitle from "../utils/Form/FormTitle";
import FormTextInput from "../utils/Form/FormTextInput";
import FormTextAreaInput from "../utils/Form/FormTextAreaInput";
import FormSubmitButton from "../utils/Form/FormSubmitButton";
import Footer from "../utils/Footer";

import teamService from "../../services/team.service"

export default class TeamCreationPage extends Component {

    constructor(props) {
        super(props);
        // method binding here
        // ex. this.refreshState = this.refreshState.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.checkForm = this.checkForm.bind(this);
        this.state = {
            isLoggedIn: true,
            selectedFile: null,
            logo: "",
            name: "",
            teamPassword: "",
            motto: "",
        };
    }

    componentDidMount() {
        M.AutoInit();
    }

    checkForm() {
        //    check team name does not already exist
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
        // check the form for problems!!!
        let newTeam = {
            logoFilePath: null,
            name: this.state.name,
            password: this.state.teamPassword,
            teamInfo: this.state.motto
        }
        teamService.create(newTeam)
            .then(response => {
                return response.data;
            }).then(team => {
                this.props.history.push(`/team/${team.id}`)
            })
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
                                <FormTitle title="Create a Team" />
                            </div>
                            <div className="row">
                                <form className="col s12">
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <FormTextInput type="text" label="Logo" id="logo" name="logo"
                                                           value={this.state.logo} handleChange={this.handleChange}
                                                           required={false} disabled={true} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <FormTextInput type="text" label="Team Name" id="name" name="name"
                                                           value={this.state.name} handleChange={this.handleChange}
                                                           required={true} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <FormTextInput type="password" label="Password" id="teamPassword"
                                                           name="teamPassword"
                                                           value={this.state.password} handleChange={this.handleChange}
                                                           required={true} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <FormTextAreaInput label="Team Info" id="motto"
                                                               name="motto" value={this.state.motto}
                                                               handleChange={this.handleChange} required={false} />
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