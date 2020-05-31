import axios from 'axios';

const API_URL = 'http://localhost:8080/api/tournaments'

class TournamentService{

    getTournament(id){
        return axios.get(API_URL + '/' + id, {
            headers: {"Content-Type":"application/json; charset=UTF-8"}
        });
    }

    updateTournament(tournament) {
        return axios.put(API_URL + "/update", JSON.stringify(tournament),
            {headers: {"Content-Type":"application/json; charset=UTF-8"}});
    }
}

export default new TournamentService();