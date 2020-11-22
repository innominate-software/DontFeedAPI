import React from "react";

export default function MostPopularLeagues(props) {
    return (
        <div>
            <h3>Most Popular Leagues</h3>
            <ul className="collapsible">
                <li>
                    <div className="collapsible-header df-dark-background df-light-grey-text">
                        <i className="material-icons ">expand_more</i>
                        <div className="league-header-container">
                            <strong className="league-header-title">Madeup League</strong>
                            <strong className="league-header-location">Texas | USA</strong>
                        </div>
                    </div>
                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
                <li>
                    <div className="collapsible-header df-dark-background df-light-grey-text">
                        <i className="material-icons">expand_more</i>
                        <div className="league-header-container">
                            <strong className="league-header-title">Fake League</strong>
                            <strong className="league-header-location">Peruville | PE</strong>
                        </div>
                    </div>
                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
                <li>
                    <div className="collapsible-header df-dark-background df-light-grey-text">
                        <i className="material-icons">expand_more</i>
                        <div className="league-header-container">
                            <strong className="league-header-title">Not Real League</strong>
                            <strong className="league-header-location">Chinatown | CN</strong>
                        </div>
                    </div>
                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
                <li>
                    <div className="collapsible-header df-dark-background df-light-grey-text">
                        <i className="material-icons">expand_more</i>
                        <div className="league-header-container">
                            <strong className="league-header-title">National Real League</strong>
                            <strong className="league-header-location">RU</strong>
                        </div>
                    </div>
                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
                <li>
                    <div className="collapsible-header df-dark-background df-light-grey-text">
                        <i className="material-icons">expand_more</i>
                        <div className="league-header-container">
                            <strong className="league-header-title">Global League</strong>
                            <strong className="league-header-location">International</strong>
                        </div>
                    </div>
                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
            </ul>
        </div>
    )
}
