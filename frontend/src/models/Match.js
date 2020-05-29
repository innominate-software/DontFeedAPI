export class Match{
    constructor(id, duration, matchDate, matchId, score, game, league, team_a, team_b, victor, tournament) {
        this.id = id;
        this.duration = duration;
        this.matchDate = matchDate;
        this.matchId = matchId;
        this.score = score;
        this.game = game;
        this.league = league;
        this.team_a = team_a;
        this.team_b = team_b;
        this.victor = victor;
        this.tournament = tournament;
    }
}