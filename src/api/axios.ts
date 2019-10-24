import Axios from 'axios';

const axios = Axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    Accept: 'application/json',
    'X-RECHAT-BRAND': process.env.BRAND,
    Authorization: `Bearer ${process.env.AUTH}`
  }
});

export default axios;
