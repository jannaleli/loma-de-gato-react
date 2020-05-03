import axios from 'axios';

const instance = axios.create({
    baseURL: ' https://mjdjlvb5x9.execute-api.ap-southeast-1.amazonaws.com/prod';
});

export default instance;