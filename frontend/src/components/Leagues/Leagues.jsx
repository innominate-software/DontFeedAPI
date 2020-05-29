import React from 'react';
import LeagueService from "../../services/league.service";
// import League from ""

class Leagues extends React.Component{

    constructor(props) {
        super(props);
        this.handleLoad = this.handleLoad.bind(this);
    }

    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
        console.log("DIDMOUNT");
        LeagueService.getAllLeagues().then(data =>{
            console.log("Data: ", data.data);
        })
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

export {Leagues};