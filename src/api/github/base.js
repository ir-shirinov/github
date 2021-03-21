import axios from 'axios';

const base = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 1000,
});

export default base;
