import axios from 'axios';
const instance = axios.create({
    //The API (cloud function) URL
    baseURL: 'http://127.0.0.1:10000'
});

export default instance