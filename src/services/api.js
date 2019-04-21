import axios from 'axios';

const api = axios.create({
    baseURL: 'https://clone-dropbox-backend1.herokuapp.com'
});

export default api;
