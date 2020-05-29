import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { HomePage } from "./components/home/HomePage";
import { CreateLeague } from "./components/Leagues/CreateLeague";
import { Leagues } from "./components/Leagues/Leagues";
import { Match } from "./components/Matches/Match";
import { Register } from "./components/Register/Register";
import { CreateTeam } from "./components/Teams/CreateTeam";
import { Teams } from "./components/Teams/Teams";
import { Tournament } from "./components/Tournaments/Tournament";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/leagues/create" component={CreateLeague} />
                    <Route path="/leagues" component={Leagues} />
                    {/*<Route path="/leagues/:id" component={League}/>*/}
                    <Route path="/teams/create" component={CreateTeam} />
                    <Route path="/teams" component={Teams} />
                    <Route path="/tournaments/:id" component={Tournament} />
                    <Route path="/matches/:id" component={Match} />
                    <Route path="/register" component={Register} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
