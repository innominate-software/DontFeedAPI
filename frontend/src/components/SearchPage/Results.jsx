import React from "react";
import SearchResultsTable from "./SearchResultsTable";

export default function Results({isLeaguesShown, isTeamsShown, isUsersShown, isMatchesShown, results}) {
    const leaguesHeader = [
        "Game",
        "League Name",
        "Season",
        "Dates",
        "Stage",
        "Platform",
        "Teams",
    ];
    const teamsHeader = [
        "Team Name",
        "Date Created",
        "Last Updated",
        "# of Players",
        "Current Leagues",
        "1st Place Trophies",
    ];
    const usersHeader = [
        "Games",
        "Username",
        "Date Joined",
        "Last Online",
        "Current Leagues",
        "1st Place Trophies",
    ];
    const matchesHeader = [
        "Game",
        "League",
        "Home Team",
        "Away Team",
        "Map",
        "Victor",
        "Score",
        "Date",
    ];
    return (
        <div>
            {isLeaguesShown ? (
                <SearchResultsTable tableId="league" tableTitle="Leagues" header={leaguesHeader}
                                    body={results.leagues} />
            ) : null}
            {isTeamsShown ? (
                <SearchResultsTable tableId="team" tableTitle="Teams" header={teamsHeader}
                                    body={results.teams} />
            ) : null}
            {isUsersShown ? (
                <SearchResultsTable tableId="user" tableTitle="Users" header={usersHeader}
                                    body={results.users} />
            ) : null}
            {isMatchesShown ? (
                <SearchResultsTable tableId="match" tableTitle="Matches" header={matchesHeader}
                                    body={results.matches} />
            ) : null}
            {!isLeaguesShown && !isTeamsShown && !isUsersShown && !isMatchesShown ?
                <h1>No results are showing, click a filter to toggle results</h1> : null}
        </div>
    )
}