import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api-v2-sg-staging.42race.com',
  headers: {
    accept: 'application/json',
  },
});

export default API;
