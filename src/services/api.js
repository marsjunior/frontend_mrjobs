import axios from 'axios';
import { getToken } from '../services/Auth';
const api = axios.create({
    baseURL: 'http://150.165.44.11:8082/v1/'
});

api.interceptors.request.use(async config => {
    const token = getToken();
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;