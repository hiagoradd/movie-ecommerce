import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://wefit-movies.vercel.app/'
});

export default axiosInstance;