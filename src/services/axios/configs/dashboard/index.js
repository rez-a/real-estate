import axios from 'axios';
import { BASE_URL } from '../baseUrl';

const dashboardInstance = axios.create({
  baseURL: `${BASE_URL}/api/dashboard`,
  headers: { 'Content-Type': 'application/json' },
  validateStatus: (status) => {
    return status >= 200 && status < 300;
  },
  method: 'get',
});

export default dashboardInstance;
