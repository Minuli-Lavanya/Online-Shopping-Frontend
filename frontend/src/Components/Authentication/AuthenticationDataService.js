import axios from 'axios'

class AthenticationDataService{

    getUser(userId){
        return axios.get(`http://localhost:8081/hotel/login/${userId}`);
    }

}

export default new AthenticationDataService();