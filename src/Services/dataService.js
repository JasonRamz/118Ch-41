import axios from 'axios';

class DataService{
    serverUrl = "http://127.0.0.1:8000"

    async getUsers() {
        let response = await axios.get(this.serverUrl + "/api/user/");
        return response.data;
    }

    async getUser(id) {
        let response = await axios.get(`${this.serverUrl}/api/user/${id}/`);
        return response.data;
    }

    async saveUser(user) {
        let response = await axios.post(this.serverUrl + "/api/user/", user);
        return response.data;
    }
    
}
export default new DataService();