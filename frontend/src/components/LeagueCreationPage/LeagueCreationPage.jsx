import React from 'react';
import FormTextInput from "../utils/Form/FormTextInput";
import FormSelectInput from "../utils/Form/FormSelectInput";
import FormTextAreaInput from "../utils/Form/FormTextAreaInput";
import FormSubmitButton from "../utils/Form/FormSubmitButton";
import Row from "react-bootstrap/Row"
import { connect } from "react-redux";

function LeagueCreationPage(props) {
	const { auth, league } = props;
	
	const fileSelectedHandler = (event) => {
		console.log(event.target.files[0]);
	}
	
	const leagueFormat = {
		options: ["Random Every Week", "Performance Based", "Predetermined"],
		values: ["RANDOMEVERYWEEK", "PERFORMANCEBASED", "PREDETERMINED"]
	}
	const games = {
		options: ["Dota 2", "League of Legends", "Super Smash Bros. Ultimate", "Overwatch", "Madden 21"],
		values: ["DOTA2", "LEAGUEOFLEGENDS", "SMASHBROSULTIMATE", "OVERWATCH", "MADDEN21"]
	}
	return (
		<div className="app-container container-fluid df-dark-background-2">
			<div className="container-fluid page-container">
				<Row>
					<div className="col s12">
						<h1 className="page-title">CREATE A LEAGUE</h1>
					</div>
				</Row>
				<div className="row">
					<form className="col s12" onSubmit={e => {
					e.preventDefault()}
					}>
						<div className="row">
							<div className="input-field col s6">
								<FormTextInput type="text" label="Logo" id="logo" name="logo"
											   value={props.logo} handleChange={this.handleChange}
											   required={false} disabled={true} />
							</div>
							<div className="col s2" />
							<div className="col s1">
								<input style={{ display: "none" }} type="file"
									   ref={fileInput => this.fileInput = fileInput} />
								<button className="grey-btn btn right" onClick={(e) => {
									e.preventDefault();
									this.fileInput.click();
								}}>Browse
								</button>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<FormTextInput type="text" label="League Name" id="name" name="name"
											   value={this.state.name} handleChange={this.handleChange}
											   required={true} disabled={false} />
							</div>
						</div>
						<div className="row">
							<div className="input-field col s6">
								<FormSelectInput label="League Format" id="league_format" name="format"
												 value={this.state.format} handleChange={this.handleChange}
												 options={leagueFormat.options} values={leagueFormat.values}
												 required={true} />
							</div>
							<div className="input-field col s6">
								<FormSelectInput label="Game" id="game" name="game"
												 value={this.state.game} handleChange={this.handleChange} options={games.options}
												 values={games.values} required={true} />
							</div>
						</div>
						<div className="row">
							<div className="input-field col s6">
								<FormTextInput type="date" label="Start Date" id="start_date"
											   name="startDate"
											   value={this.state.startDate} handleChange={this.handleChange}
											   required={true} />
							</div>
							<div className="input-field col s6">
								<FormTextInput type="date" label="End Date" id="end_date" name="endDate"
											   value={this.state.endDate} handleChange={this.handleChange}
											   required={true} />
							</div>
						</div>
						<div className="row">
							<div className="input-field col s6">
								<FormTextInput type="password" label="Password" id="leaguePassword"
											   name="leaguePassword"
											   value={this.state.leaguePassword}
											   handleChange={this.handleChange}
											   required={true} />
							</div>
							<div className="input-field col s6">
								<FormTextInput type="number" label="Match Frequency" id="match_frequency"
											   name="matchFrequency" value={this.state.matchFrequency}
											   handleChange={this.handleChange} required={true}
								/>
							</div>
						</div>
						<div className="row">
							<div className="input-field col s12">
								<FormTextAreaInput label="Rules" id="rules" name="rules"
												   value={this.state.rules} handleChange={this.handleChange}
												   required={false} />
							</div>
						</div>
						<FormSubmitButton />
					</form>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		auth: state.authState
	};
};

export default connect(mapStateToProps)(LeagueCreationPage);