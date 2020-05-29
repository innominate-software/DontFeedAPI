import React from 'react';

class Match extends React.Component{
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const id = this.props.match.params.id
        return (
            <h1>Match: {id}</h1>
        );
    }
}

export {Match};