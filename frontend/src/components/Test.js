import React from "react";
import "./HomePage/NewsImages.css";
import createLeagueImage from "../assets/img/REPLACETHISIMAGE.jpg"

function Test(props) {
    return (
        <div>
            {/*NAV*/}
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">DON'T FEED</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    Teams
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    Leagues
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    Players
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    Matches
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    Support
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex w-auto">
                            <input className="form-control me-2" type="search" placeholder="Search"
                                   aria-label="Search" />
                        </form>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end mx-3">
                            <button className="btn btn-primary me-md-2" type="button">Button</button>
                            <button className="btn btn-primary" type="button">Button</button>
                        </div>
                    </div>
                </div>
            </nav>
            {/*NAV*/}
            {/*CONTENT*/}
            <div className="row">
                {/*CAROUSEL*/}
                <div className="carousel slide px-0" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                aria-label="Slide 2" />
                    </div>
                    <div className="carousel-inner news-carousel">
                        <div className="carousel-item news-item-1 active">
                            <div className="carousel-caption d-none d-md-block">
                                <h5>News Story 1</h5>
                                <p>Insert some bullshit story about our website</p>
                            </div>
                        </div>
                        <div className="carousel-item news-item-2">
                            <div className="carousel-caption d-none d-md-block">
                                <h5>News Story 2</h5>
                                <p>Insert some bullshit story about esports.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*CAROUSEL*/}
                {/*MAIN COLUMNS*/}
                <div className="row p-3">
                    <div className="col col-2" />
                    {/*COLUMN ONE*/}
                    <div className="col col-7 m-3">
                        {/*RECENT LEAGUES*/}
                        <div className="card">
                            <div className="card-body">
                                <h2>You are not logged in!</h2>
                                <p>Membership is completely free</p>
                                <button type="button" className="btn btn-primary btn-lg me-5">Login</button>
                                <button type="button" className="btn btn-secondary btn-lg ms-5">Sign up</button>
                            </div>
                        </div>
                        {/*RECENT LEAGUES*/}
                        {/*RECENT LEAGUES*/}
                        <h2 className="my-3">Most Recent Leagues</h2>
                        <div className="card">
                            <div className="card-body">
                                <div className="accordion" id="accordionPanelsStayOpenExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                                    aria-controls="panelsStayOpen-collapseOne">
                                                [INSERT LEAGUE NAME HERE]
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseOne"
                                             className="accordion-collapse collapse show"
                                             aria-labelledby="panelsStayOpen-headingOne">
                                            <div className="accordion-body">
                                                [INSERT LEAGUE INFO HERE]
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                                    aria-controls="panelsStayOpen-collapseTwo">
                                                [INSERT LEAGUE NAME HERE]
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                                             aria-labelledby="panelsStayOpen-headingTwo">
                                            <div className="accordion-body">
                                                [INSERT LEAGUE INFO HERE]
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                            <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                                    aria-controls="panelsStayOpen-collapseThree">
                                                [INSERT LEAGUE NAME HERE]
                                            </button>
                                        </h2>
                                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                                             aria-labelledby="panelsStayOpen-headingThree">
                                            <div className="accordion-body">
                                                [INSERT LEAGUE INFO HERE]
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*RECENT LEAGUES*/}
                        {/*OPEN LEAGUES*/}
                        <h2 className="my-3">Leagues with Open Registration</h2>
                        <div className="card">
                            <div className="card-body">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="accordion" id="accordionPanelsStayOpenExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                                    <button className="accordion-button" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#panelsStayOpen-collapseOne"
                                                            aria-expanded="true"
                                                            aria-controls="panelsStayOpen-collapseOne">
                                                        [INSERT LEAGUE NAME HERE]
                                                    </button>
                                                </h2>
                                                <div id="panelsStayOpen-collapseOne"
                                                     className="accordion-collapse collapse"
                                                     aria-labelledby="panelsStayOpen-headingOne">
                                                    <div className="accordion-body">
                                                        [INSERT LEAGUE INFO HERE]
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                                    <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#panelsStayOpen-collapseTwo"
                                                            aria-expanded="false"
                                                            aria-controls="panelsStayOpen-collapseTwo">
                                                        [INSERT LEAGUE NAME HERE]
                                                    </button>
                                                </h2>
                                                <div id="panelsStayOpen-collapseTwo"
                                                     className="accordion-collapse collapse"
                                                     aria-labelledby="panelsStayOpen-headingTwo">
                                                    <div className="accordion-body">
                                                        [INSERT LEAGUE INFO HERE]
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                                    <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#panelsStayOpen-collapseThree"
                                                            aria-expanded="false"
                                                            aria-controls="panelsStayOpen-collapseThree">
                                                        [INSERT LEAGUE NAME HERE]
                                                    </button>
                                                </h2>
                                                <div id="panelsStayOpen-collapseThree"
                                                     className="accordion-collapse collapse"
                                                     aria-labelledby="panelsStayOpen-headingThree">
                                                    <div className="accordion-body">
                                                        [INSERT LEAGUE INFO HERE]
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*OPEN LEAGUES*/}
                        {/*CREATE LEAGUE*/}
                        <div className="card bg-dark text-white my-3">
                            <img src={createLeagueImage} className="card-img" alt="..." />
                            <div className="card-img-overlay">
                                <h2 className="card-title my-5 py-5" style={{top: "45%"}}>Click Here To Create Your Own
                                    League</h2>
                            </div>
                        </div>
                        {/*CREATE LEAGUE*/}
                    </div>
                    {/*COLUMN ONE*/}
                    {/*COLUMN TWO*/}
                    <div className="col d-none d-md-block info m-3">
                        {/*ONLINE PLAYERS*/}
                        <div className="card">
                            <div className="card-body">
                                how many players are online.
                            </div>
                        </div>
                        {/*ONLINE PLAYERS*/}
                    </div>
                    {/*COLUMN TWO*/}
                </div>
                {/*MAIN COLUMNS*/}
            </div>
            {/*CONTENT*/}
        </div>
    )
}

export default Test;