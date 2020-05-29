import React, { Component } from 'react';

class Tournament extends Component{
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const id = this.props.match.params.id
        return (
            <h1>Tournament: {id}</h1>
        );
    }
}

export {Tournament};