import React, { Component } from 'react';
import MainNav from "../utils/MainNav";
import FormTitle from "../utils/FormTitle";
import FormTextInput from "../utils/FormTextInput";
import FormSelectInput from "../utils/FormSelectInput";
import FormTextAreaInput from "../utils/FormTextAreaInput";
import FormSubmitButton from "../utils/FormSubmitButton";
import Footer from "../utils/Footer";
import M from "materialize-css";

export default class LeagueCreationPage extends Component {

    constructor(props) {
        super(props);
        // method binding here
        // ex. this.refreshState = this.refreshState.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.fileSelectedHandler = this.fileSelectedHandler.bind(this)
        this.state = {
            isLoggedIn: true,
        };
    }

    componentDidMount() {
        M.AutoInit();
    }

    handleClick(e) {
        e.preventDefault()
    }

    fileSelectedHandler(e) {
        console.log(e.target.files[0]);
    }

    render() {
        let isLoggedIn = this.state.isLoggedIn;
        return (
            <div className="app-container container-fluid df-dark-background-2">
                <MainNav isLoggedIn={isLoggedIn} />
                <div className="container-fluid page-container">
                    <div className="row">
                        <FormTitle title="CREATE A LEAGUE" />
                    </div>
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <FormTextInput label="Logo" id="logo" validate={false} disabled={true} />
                                </div>
                                <div className="col s2" />
                                <div className="col s1">
                                    <input style={{display: "none"}} type="file" onChange={this.fileSelectedHandler}
                                           ref={fileInput => this.fileInput = fileInput} />
                                    <button onClick={(e) => {
                                        e.preventDefault();
                                        this.fileInput.click();
                                    }}
                                    >browse
                                    </button>

                                </div>
                                <div className="col s3">
                                    <h1>yerp</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <FormTextInput label="League Name" id="name" validate={true} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <FormSelectInput label="League Format" id="league-format" required={true} />
                                </div>
                                <div className="input-field col s6">
                                    <FormSelectInput label="Game" id="game" required={true} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <FormTextInput label="Start Date" id="start-date" validate={true} />
                                </div>
                                <div className="input-field col s6">
                                    <FormTextInput label="End Date" id="endDate" validate={true} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <FormTextInput label="Password" id="password" validate={true} />
                                </div>
                                <div className="input-field col s6">
                                    <FormTextInput label="Match Frequency" id="frequency" validate={true} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <FormTextAreaInput label="Rules" id="rules" validate={false} />
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