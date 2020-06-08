import React from 'react';
import TeamService from "../../services/team.service";
// import {Team} from "../../models/Team";

class TeamsList extends React.Component{

    getAllTeams(){
        TeamService.getAllTeams().then(data =>{
            console.log("Data: ", data.data);
        })
    }

    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
        console.log("DIDMOUNT");
        this.getAllTeams();
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
            <h1>Teams</h1>
        );
    }
}

export {TeamsList};