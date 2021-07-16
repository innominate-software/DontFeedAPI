import React, { Component } from "react";
import MainNav from "../utils/MainNav";
import Footer from "../utils/Footer";
import Results from "./Results";
import Filters from "./Filters";
import SearchBar from "./SearchBar";

class SearchPage extends Component {
    constructor(props) {
        super(props);
        // method binding here
        // ex. this.refreshState = this.refreshState.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.toggleTable = this.toggleTable.bind(this);
        this.state = {
            isLoggedIn: true,
            isLeaguesShown: true,
            isTeamsShown: true,
            isUsersShown: true,
            isMatchesShown: true,
            searchTerm: "",
        };
    }


    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        });
    }

    handleClick(e) {
        e.preventDefault();
    }

    toggleTable(e) {
        let el = e.target.querySelector(".toggle-box-title");
        let table;
        if (el) {
            table = el.innerText;
        } else {
            table = e.target.innerText;
        }
        switch (table) {
            case "Leagues":
                let leagues = this.state.isLeaguesShown;
                this.setState({
                    ...this.state,
                    isLeaguesShown: !leagues,
                });
                break;
            case "Teams":
                let teams = this.state.isTeamsShown;
                this.setState({
                    ...this.state,
                    isTeamsShown: !teams,
                });
                break;
            case "Users":
                let users = this.state.isUsersShown;
                this.setState({
                    ...this.state,
                    isUsersShown: !users,
                });
                break;
            case "Matches":
                let matches = this.state.isMatchesShown;
                this.setState({
                    ...this.state,
                    isMatchesShown: !matches,
                });
                break;
            default:
                console.log("DOING NOTHING");
                break;
        }
    }

    render() {
        const results = {
            leagues: [
                [
                    {className: "", text: "Dota 2"},
                    {className: "", text: "WePlay! Pushka League"},
                    {className: "", text: "1"},
                    {className: "", text: "00-00-00 - 00-00-00"},
                    {className: "", text: "Ended"},
                    {className: "", text: "PC"},
                    {classname: "", text: "14/14"},
                ],
            ],
            teams: [
                [
                    {className: "", text: "Team Name"},
                    {className: "", text: "00-00-00"},
                    {className: "", text: "00-00-00"},
                    {className: "", text: "5"},
                    {className: "", text: "0"},
                    {className: "", text: "0"},
                ],
            ],
            users: [
                [
                    {className: "", text: "[Games]"},
                    {className: "", text: "username"},
                    {className: "", text: "00-00-00"},
                    {className: "", text: "00-00-00"},
                    {className: "", text: "0"},
                    {className: "", text: "0"},
                ],
                [
                    {className: "", text: "[Games]"},
                    {className: "", text: "username"},
                    {className: "", text: "00-00-00"},
                    {className: "", text: "00-00-00"},
                    {className: "", text: "0"},
                    {className: "", text: "0"},
                ],
                [
                    {className: "", text: "[Games]"},
                    {className: "", text: "username"},
                    {className: "", text: "00-00-00"},
                    {className: "", text: "00-00-00"},
                    {className: "", text: "0"},
                    {className: "", text: "0"},
                ],
            ],
            matches: [
                [
                    {className: "", text: "Dota 2"},
                    {className: "", text: "WePlay! Pushka League"},
                    {className: "", text: "Team Name"},
                    {className: "", text: "Team Name"},
                    {className: "", text: "-"},
                    {className: "green-text", text: "Team Name"},
                    {className: "", text: "41 - 10"},
                    {className: "", text: "00-00-00"},
                ],
                [
                    {className: "", text: "Dota 2"},
                    {className: "", text: "WePlay! Pushka League"},
                    {className: "", text: "Team Name"},
                    {className: "", text: "Team Name"},
                    {className: "", text: "-"},
                    {className: "green-text", text: "Team Name"},
                    {className: "", text: "41 - 10"},
                    {className: "", text: "00-00-00"},
                ],
                [
                    {className: "", text: "Dota 2"},
                    {className: "", text: "WePlay! Pushka League"},
                    {className: "", text: "Team Name"},
                    {className: "", text: "Team Name"},
                    {className: "", text: "-"},
                    {className: "red-text", text: "Team Name"},
                    {className: "", text: "41 - 10"},
                    {className: "", text: "00-00-00"},
                ],
            ]
        }
        return (
            <div>
                <main>
                    <div className="app-container container-fluid df-dark-background-2">
                        <MainNav isLoggedIn={this.state.isLoggedIn} />
                        <div className="container-fluid page-container search-page">
                            <SearchBar searchTerm={this.state.searchTerm} handleChange={this.handleChange}
                                       handleClick={this.handleClick} />
                            <Filters toggleTable={this.toggleTable} />
                            <Results isLeaguesShown={this.state.isLeaguesShown} isTeamsShown={this.state.isTeamsShown}
                                     isUsersShown={this.state.isUsersShown} isMatchesShown={this.state.isMatchesShown}
                                     results={results} />
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default SearchPage;