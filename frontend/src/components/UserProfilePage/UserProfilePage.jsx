import React, { Component } from "react";
import MainNav from "../utils/MainNav";
import Footer from "../utils/Footer";
import M from "materialize-css";
import User from "./User";
import UserInfo from "./UserInfo";
import Tabs from "../utils/Tabs";
import Games from "./Games";
import Teams from "./Teams";
import Matches from "../utils/TableComponents/Matches";
import Leagues from "../utils/TableComponents/Leagues";
import userService from "../../services/user.service";

export default class UserProfilePage extends Component {

    constructor(props) {
        super(props);
        // method binding here
        // ex. this.refreshState = this.refreshState.bind(this);
        this.obtainUserFromAPI = this.obtainUserFromAPI.bind(this);
        this.state = {
            isLoggedIn: true,
            tabs: [
                {
                    href: "#games",
                    size: 3,
                    text: "Games"
                },
                {
                    href: "#teams",
                    size: 3,
                    text: "Teams"
                },
                {
                    href: "#matches",
                    size: 3,
                    text: "Matches"
                },
                {
                    href: "#leagues",
                    size: 3,
                    text: "Leagues"
                },
            ],
        };
    }

    componentDidMount() {
        M.AutoInit();
        this.obtainUserFromAPI()
            .then(() => {
                M.AutoInit();
            })
    }

    obtainUserFromAPI = () => {
        return userService.get(this.props.match.params.id)
            .then(user => {
            if (user) {
                console.log(user);
                this.setState({
                    ...this.state,
                    user: user
                })
            }
        })
    }

    render() {
        let {isLoggedIn, user} = this.state;
        return (
            <div>
                <main>
                    <div className="app-container container-fluid df-dark-background-2">
                        <MainNav isLoggedIn={isLoggedIn} />
                        <div className="container-fluid page-container">
                            <div className="row user-info">
                                <User profilePic={user?.profilePic} username={user?.username} teams={user?.teams} />
                                <UserInfo dateJoined={user?.dateJoined} lastOnline={"upcoming with Security Update"}
                                          numberOfActiveLeagues={user?.activeLeagues}
                                          numberOfFirstPlaceTrophies={user?.numberOfFirstPlaceTrophies ?? "not yet calculating"} />
                            </div>
                            <div className="row">
                                <div className="row">
                                    <div className="col s12">
                                        <Tabs tabs={this.state.tabs} />
                                    </div>
                                    <Games username={user?.username} games={user?.games} />
                                    <Teams teams={user?.teams} />
                                    <Matches matches={user?.matches} />
                                    <Leagues leagues={user?.leagues} />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}
