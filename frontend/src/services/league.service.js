import axios from 'axios';

const API_URL = 'http://localhost:8080/api/leagues'

class LeagueService {

    getAllLeagues(){
        return axios.get(API_URL,{
            headers: {"Content-Type":"application/json; charset=UTF-8"}
        });
    }

    getLeague(id){
        return axios.get(API_URL + '/' + id, {
            headers: {"Content-Type":"application/json; charset=UTF-8"}
        });
    }


}

export default new LeagueService();