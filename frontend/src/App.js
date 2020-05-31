import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { HomePage } from "./components/Home/HomePage";
import { CreateLeague } from "./components/Leagues/CreateLeague";
import { LeaguesList } from "./components/Leagues/LeaguesList";
import { Match } from "./components/Matches/Match";
import { Register } from "./components/Register/Register";
import { CreateTeam } from "./components/Teams/CreateTeam";
import { TeamsList } from "./components/Teams/TeamsList";
import { Tournament } from "./components/Tournaments/Tournament";
import { Team } from "./components/Teams/Team"
import { League } from "./components/Leagues/League"

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/leagues/create" component={CreateLeague} />
                    <Route path="/leagues" component={LeaguesList} />
                    <Route path="/league/:id" component={League}/>
                    <Route path="/teams/create" component={CreateTeam} />
                    <Route path="/teams" component={TeamsList} />
                    <Route path="/team/:id" component={Team} />
                    <Route path="/tournaments/:id" component={Tournament} />
                    <Route path="/matches/:id" component={Match} />
                    <Route path="/register" component={Register} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
