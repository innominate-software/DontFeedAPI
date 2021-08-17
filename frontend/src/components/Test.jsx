import React from "react";
import "./HomePage/NewsImages.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import userDataService from "../services/user.service";

function Test(props) {
	return (
		<Container fluid className="app-container df-dark-background-2">
			<Row>
				<Col className="my-5">
					<h1 className="page-title">CREATE A LEAGUE</h1>
				</Col>
			</Row>
			<Row className="px-5">
				<Form onSubmit={event => {
					event.preventDefault();
					//todo redux the league actions/reducers
				}}>
					<Row>
						<Form.Group as={Col} className="mb-3" controlId="leagueCreateName">
							<Form.Label className="ms-3">League Name</Form.Label>
							<Form.Control type="text" placeholder="League Name" />
						</Form.Group>
						<Form.Group as={Col} className="mb-3" controlId="leagueCreateLogo">
							<Form.Label className="ms-3">Logo</Form.Label>
							<Form.Control type="file" onChange={(event) => {
								//todo create functionality for uploading a image
							}} />
						</Form.Group>
					</Row>
					<Row>
						<Form.Group as={Col} className="mb-3" controlId="leagueCreateGame">
							<Form.Label>Game</Form.Label>
							<Form.Select>
								<option value={"DOTA2"}>Dota 2</option>
								<option value={"LEAGUEOFLEGENDS"}>League of Legends</option>
								<option value={"SMASHBROSULTIMATE"}>Smash Bros. Ultimate</option>
								<option value={"OVERWATCH"}>Overwatch</option>
								<option value={"MADDEN21"}>Madden 21</option>
							</Form.Select>
						</Form.Group>
						<Form.Group as={Col} className="mb-3" controlId="leagueCreateFormat">
							<Form.Label>League Format</Form.Label>
							<Form.Select>
								<option value={"RANDOMEVERYWEEK"}>Random Every Week</option>
								<option value={"PERFORMANCEBASED"}>Performance Based</option>
								<option value={"PREDETERMINED"}>Predetermined</option>
							</Form.Select>
						</Form.Group>
						{/* todo only show this if format is not set to PREDETERMINED*/}
						<Form.Group as={Col} className="mb-3" controlId="leagueCreateMatchFrequencyMatches">
							<Form.Label>Number of matches</Form.Label>
							<Form.Select>
								<option value={1}>1</option>
								<option value={2}>2</option>
								<option value={3}>3</option>
								<option value={4}>4</option>
								<option value={5}>5</option>
								<option value={6}>6</option>
							</Form.Select>
						</Form.Group>
						<Form.Group as={Col} className="mb-3" controlId="leagueCreateMatchFrequencyMatchesPer">
							<Form.Label as="legend" column sm={2}>
								per
							</Form.Label>
							<Form.Check
								inline
								type="radio"
								label="Day"
								name="leagueCreateMatchFrequencyPerRadios"
								id="leagueCreateMatchFrequencyPerDay"
							/>
							<Form.Check
								inline
								type="radio"
								label="Week"
								name="leagueCreateMatchFrequencyPerRadios"
								id="leagueCreateMatchFrequencyPerWeek"
							/>
						</Form.Group>
					</Row>
					<Row>
						{/* todo turn into date pickers*/}
						<Form.Group as={Col} className="mb-3" controlId="leagueCreateStartDate">
							<Form.Label className="ms-3">Start Date</Form.Label>
							<Form.Control type="text" placeholder="Start Date" />
						</Form.Group>
						<Form.Group as={Col} className="mb-3" controlId="leagueCreateEndDate">
							<Form.Label className="ms-3">End Date</Form.Label>
							<Form.Control type="text" placeholder="End Date" />
						</Form.Group>
						<Form.Group as={Col} className="mb-3" controlId="leagueCreatePassword">
							<Form.Label className="ms-3">Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
					</Row>
					<Row>
						<Form.Group className="mb-3" controlId="leagueCreateRules">
							<Form.Label>Rules</Form.Label>
							<Form.Control as="textarea" rows={5} />
						</Form.Group>
					</Row>
					<Button size="lg" variant="primary" type="submit">
						Create League
					</Button>
				</Form>
			</Row>
		</Container>
	)
}

export default Test;