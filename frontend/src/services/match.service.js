import axios from 'axios';

const API_URL = 'http://localhost:8080/api/matches'

class MatchService {

    getMatch(id) {
        return axios.get(API_URL + '/' + id, {
            headers: {"Content-Type": "application/json; charset=UTF-8"}
        });
    }

    updateMatch(Match) {
        return axios.put(API_URL + "/update", JSON.stringify(Match),
            {headers: {"Content-Type": "application/json; charset=UTF-8"}});
    }

}
export default new MatchService();