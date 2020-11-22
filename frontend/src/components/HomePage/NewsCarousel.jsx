import React from "react";

export default function NewsCarousel(props) {
    return(
        <div className="container-fluid">
            <div id="newsCarousel" className="carousel carousel-slider center ">
                <div className="carousel-item white-text news-item-1">
                    <div className="news-title-container">
                        <h1 className="news-header-text">Gambit Esports bets on VulkanBet as title sponsor</h1>
                        <p className="white-text text-thin news-text">Russian organization Gambit Esports has announced Maltese esports betting platform VulkanBet as the title sponsor for three of its rosters.</p>
                    </div>

                </div>
                <div className="carousel-item white-text news-item-2">
                    <div className="news-title-container">
                        <h1 className="news-header-text">Virtus.pro and VP.Prodigy will play in LOOT.BET/CS Season 8</h1>
                        <p className="white-text text-thin news-text">The Virtus.Pro CS:GO rosters will play in  LOOT.BET/CS Season 8. Closed qualifier for the tournament starts October 1st, the Grand Final day is November 3rd.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}