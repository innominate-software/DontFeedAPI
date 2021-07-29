import React from "react";
import createLeagueImage from "../../assets/img/REPLACETHISIMAGE.jpg";
import { useHistory } from "react-router-dom";

function LeagueCreateButton(props) {
	const history = useHistory();
	return (
		<a href="" className="card bg-dark text-white my-3" onClick={() => {
			history.push("/leagues/create")
		}}>
			<img src={createLeagueImage} className="card-img" alt="..." />
			<div className="card-img-overlay">
				<h2 className="card-title my-5 py-5" style={{ top: "45%" }}>
					Click Here To Create Your Own League</h2>
			</div>
		</a>
	)
}

export default LeagueCreateButton;