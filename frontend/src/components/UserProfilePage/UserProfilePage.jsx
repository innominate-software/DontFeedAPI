import React from "react";
import MainNav from "../utils/MainNav";
import Footer from "../utils/Footer";
import User from "./User";
import UserInfo from "./UserInfo";
import Tabs from "../utils/Tabs";
import Games from "./Games";
import Teams from "./Teams";
import Matches from "../utils/TableComponents/Matches";
import Leagues from "../utils/TableComponents/Leagues";

function UserProfilePage(props) {
    const { auth, user } = props;
    return (
        <div>
            <main>
                <div className="app-container container-fluid df-dark-background-2">
                    <MainNav isLoggedIn={auth.isLoggedIn} />
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

export default UserProfilePage;