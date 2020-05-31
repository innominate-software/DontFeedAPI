import axios from 'axios'

const API_URL = 'http://localhost:8080/api/teams'

class TeamService {

    getAllTeams(){
        return axios.get(API_URL,{
            headers: {"Content-Type":"application/json; charset=UTF-8"}
        });
    }

    getTeam(id){
        return axios.get(API_URL + '/' + id, {
            headers: {"Content-Type":"application/json; charset=UTF-8"}
        });
    }

    createTeam(Team) {
        return axios.post(API_URL + "/createTeam", JSON.stringify(Team),
            { headers: {"Content-Type":"application/json; charset=UTF-8"}});
    }

    deleteTeam(id) {
        return axios.post(API_URL + "/deleteTeam/" + id, JSON.stringify(id), {headers: {"Content-Type":"application/json; charset=UTF-8"}});
    }

    updateTeam(team) {
        return axios.put(API_URL + "/update", JSON.stringify(team),
            {headers: {"Content-Type":"application/json; charset=UTF-8"}});
    }

}

export default new TeamService();