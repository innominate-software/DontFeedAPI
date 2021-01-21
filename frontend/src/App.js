import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import HomePage from "./components/HomePage/HomePage";
import LeagueCreationPage from "./components/LeagueCreationPage/LeagueCreationPage";
import MatchInfoPage from "./components/MatchInfoPage/MatchInfoPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import TeamCreationPage from "./components/TeamCreationPage/TeamCreationPage";
import TeamProfilePage from "./components/TeamProfilePage/TeamProfilePage"
import LeagueProfilePage from "./components/LeagueProfilePage/LeagueProfilePage"
import SupportPage from "./components/SupportPage/SupportPage";
import UserProfilePage from "./components/UserProfilePage/UserProfilePage";
import SearchPage from "./components/SearchPage/SearchPage";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/leagues/create" component={LeagueCreationPage} />
                    <Route path="/league/:id" component={LeagueProfilePage} />
                    <Route path="/teams/create" component={TeamCreationPage} />
                    <Route path="/team/:id" component={TeamProfilePage} />
                    <Route path="/match/:id" component={MatchInfoPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/user/:id" component={UserProfilePage} />
                    <Route path="/support" component={SupportPage} />
                    <Route path="/search" component={SearchPage} />
                        {/*this is how to set a route to only be accessed through authenticated means*/}
                        {/*<AuthenticatedRoute path={"/blahlblahba"} component={blahlbabhlbahalbhlabhab} />*/}
                </Switch>
            </Router>
        </div>
    );
}

export default App;
