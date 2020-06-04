import React, { Component } from 'react';
import LeagueService from "../../services/league.service";

class League extends Component {

    getLeague(id){
        LeagueService.getLeague(id).then(data =>{
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

export {League};
