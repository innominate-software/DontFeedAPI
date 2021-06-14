import React, { Component } from 'react';
import MainNav from "../utils/MainNav";
import FormTitle from "../utils/Form/FormTitle";
import FormTextInput from "../utils/Form/FormTextInput";
import FormSelectInput from "../utils/Form/FormSelectInput";
import FormTextAreaInput from "../utils/Form/FormTextAreaInput";
import FormSubmitButton from "../utils/Form/FormSubmitButton";
import Footer from "../utils/Footer";
import M from "materialize-css";
import leagueService from "../../services/league.service";

export default class LeagueCreationPage extends Component {

    constructor(props) {
        super(props);
        // method binding here
        // ex. this.refreshState = this.refreshState.bind(this);
        this.checkForm = this.checkForm.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
        this.state = {
            isLoggedIn: true,
            selectedFile: null,
            logo: "",
            name: "",
            format: "RANDOMEVERYWEEK",
            game: "DOTA2",
            startDate: "",
            endDate: "",
            leaguePassword: "",
            matchFrequency: "",
            rules: ""
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
        let {game} = this.state;
        console.log(game)
        switch (game) {
            case "DOTA2":
                game = {id: 1, name: "DOTA2"}
                break;
            case "LEAGUEOFLEGENDS":
                game = {id: 2, name: "LEAGUEOFLEGENDS"}
                break;
            case "OVERWATCH":
                game = {id: 3, name: "OVERWATCH"}
                break;
            case "SMASHBROSULTIMATE":
                game = {id: 4, name: "SMASHBROSULTIMATE"}
                break;
            case "MADDEN21":
                game = {id: 5, name: "MADDEN21"}
                break;
            default:
                //throw error or something
        }
        let newLeague = {
            logo: this.state.logo,
            name: this.state.name,
            format: this.state.format,
            game: game,
            season: 1,
            stage: "CREATED",
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            password: this.state.leaguePassword,
            matchFrequency: this.state.matchFrequency,
            rules: this.state.rules,
        }
        leagueService.create(newLeague)
            .then(response => {
                return response.data;
            }).then(league => {
            this.props.history.push(`/league/${league.id}`)
        })
    }


    fileSelectedHandler(e) {
        console.log(e.target.files[0]);
    }

    render() {
        let isLoggedIn = this.state.isLoggedIn;
        const leagueFormat = {
            options: ["Random Every Week", "Performance Based", "Predetermined"],
            values: ["RANDOMEVERYWEEK", "PERFORMANCEBASED", "PREDETERMINED"]
        }
        const games = {
            options: ["Dota 2", "League of Legends", "Super Smash Bros. Ultimate", "Overwatch", "Madden 21"],
            values: ["DOTA2", "LEAGUEOFLEGENDS", "SMASHBROSULTIMATE", "OVERWATCH", "MADDEN21"]
        }
        return (
            <div>
                <main>
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
                                            <FormTextInput type="text" label="Logo" id="logo" name="logo"
                                                           value={this.state.logo} handleChange={this.handleChange}
                                                           required={false} disabled={true} />
                                        </div>
                                        <div className="col s2" />
                                        <div className="col s1">
                                            <input style={{display: "none"}} type="file"
                                                   onChange={this.fileSelectedHandler}
                                                   ref={fileInput => this.fileInput = fileInput} />
                                            <button className="grey-btn btn right" onClick={(e) => {
                                                e.preventDefault();
                                                this.fileInput.click();
                                            }}>Browse
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <FormTextInput type="text" label="League Name" id="name" name="name"
                                                           value={this.state.name} handleChange={this.handleChange}
                                                           required={true} disabled={false} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <FormSelectInput label="League Format" id="league_format" name="format"
                                                             value={this.state.format} handleChange={this.handleChange}
                                                             options={leagueFormat.options} values={leagueFormat.values}
                                                             required={true} />
                                        </div>
                                        <div className="input-field col s6">
                                            <FormSelectInput label="Game" id="game" name="game" value={this.state.game}
                                                             handleChange={this.handleChange} options={games.options}
                                                             values={games.values} required={true} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <FormTextInput type="date" label="Start Date" id="start_date"
                                                           name="startDate"
                                                           value={this.state.startDate} handleChange={this.handleChange}
                                                           required={true} />
                                        </div>
                                        <div className="input-field col s6">
                                            <FormTextInput type="date" label="End Date" id="end_date" name="endDate"
                                                           value={this.state.endDate} handleChange={this.handleChange}
                                                           required={true} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <FormTextInput type="password" label="Password" id="leaguePassword"
                                                           name="leaguePassword"
                                                           value={this.state.leaguePassword} handleChange={this.handleChange}
                                                           required={true} />
                                        </div>
                                        <div className="input-field col s6">
                                            <FormTextInput type="number" label="Match Frequency" id="match_frequency"
                                                           name="matchFrequency" value={this.state.matchFrequency}
                                                           handleChange={this.handleChange} required={true} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <FormTextAreaInput label="Rules" id="rules" name="rules"
                                                               value={this.state.rules} handleChange={this.handleChange}
                                                               required={false} />
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