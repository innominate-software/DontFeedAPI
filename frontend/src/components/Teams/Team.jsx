import React, { Component } from 'react';
import TeamService from "../../services/team.service";

class team extends Component {

    getTeam(id){
        TeamService.getTeam(id).then(data =>{
            console.log("Data: ", data.data);
        })
    }

    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
        console.log("DIDMOUNT");


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
            <h1>Individual Team</h1>
        );
    }

}

export {team}