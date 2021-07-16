import React from "react";
import "./HomePage/NewsImages.css";

function Test(props) {
	return (
		<div>
			{/*NAV*/}
			<nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">Navbar</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
							aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Link</a>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
								   data-bs-toggle="dropdown" aria-expanded="false">
									Dropdown
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
							<li className="nav-item">
								<a className="nav-link disabled" href="#" tabIndex="-1"
								   aria-disabled="true">Disabled</a>
							</li>
						</ul>
						<form className="d-flex">
							<input className="form-control me-2" type="search" placeholder="Search"
								   aria-label="Search" />
							<button className="btn btn-outline-success" type="submit">Search</button>
						</form>
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
				<div className="row">
					{/*COLUMN ONE*/}
					<div className="col col-9 m-3">
						{/*RECENT LEAGUES*/}
						<div className="card">
							<div className="card-body">
								This is some text within a card body.
							</div>
						</div>
						{/*RECENT LEAGUES*/}
						{/*OPEN LEAGUES*/}
						<div className="card">
							<div className="card-body">
								This is some text within a card body.
							</div>
						</div>
						{/*OPEN LEAGUES*/}
						{/*CREATE LEAGUE*/}
						<div className="card">
							<div className="card-body">
								This is some text within a card body.
							</div>
						</div>
						{/*CREATE LEAGUE*/}
					</div>
					{/*COLUMN ONE*/}
					{/*COLUMN TWO*/}
					<div className="col d-none d-md-block info">
						{/*ONLINE PLAYERS*/}
						<div className="card">
							<div className="card-body">
								This is some text within a card body.
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