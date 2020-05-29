export class League {
    constructor(id, dateCreated, duration, endDate, format, logo, matchFrequency, maxTeams, name, description,
                startDate, passcode, game, tournament, matches, teams){
        this.id = id;
        this.dateCreated = dateCreated;
        this.duration = duration;
        this.endDate = endDate;
        this.format = format;
        this.logo = logo;
        this.matchFrequency = matchFrequency;
        this.maxTeams = maxTeams;
        this.name = name;
        this.description = description;
        this.startDate = startDate;
        this.passcode = passcode;
        this.game = game;
        this.tournament = tournament;
        this.matches = matches;
        this.teams = teams;
    }
}