import React from 'react';
import LeagueService from "../../services/league.service";
import {League} from "../../models/League";

class LeaguesList extends React.Component{


    constructor(props) {
        super(props);
        this.handleLoad = this.handleLoad.bind(this);

        this.state = {
            newLeague: new League(),
            league: new League('2020-05-15', 4, '2020-05-15', 'PREDETERMINED', null, null,
                16, 'First Created', 'Test', '2020-05-15', '2020-05-15', 1, 'null',
                'asdf', 'asdf')
        };
    }

    getAllLeagues(){
        LeagueService.getAllLeagues().then(data =>{
        })
    }

    updateLeague(){
        LeagueService.updateLeague(League).then(data => {

        })
    }

    createLeague(){
        LeagueService.createLeague(this.state.league).then(data =>{
        })
    }

    deleteLeague(){
        LeagueService.deleteLeague(this.state.league.id).then(data => {
        })
    }

    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
        console.log("DIDMOUNT");
        this.getAllLeagues();
        this.updateLeague(this.state.league);
        // this.createLeague();
        // this.deleteLeague();
    }


    componentWillUnmount() {
        console.log("UNMOUNT");
        window.removeEventListener('load', this.handleLoad)

    }

    handleLoad() {
        console.log("handle");
    }

    render() {
        return (
            <h1>Leagues Page</h1>
        );
    }
}

export {LeaguesList};