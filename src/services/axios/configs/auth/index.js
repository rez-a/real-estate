import axios from 'axios';
import { BASE_URL } from '../baseUrl';

const authInstance = axios.create({
  baseURL: `${BASE_URL}/api/auth`,
  headers: { 'Content-Type': 'application/json' },
  validateStatus: (status) => {
    return status >= 200 && status < 300;
  },
  method: 'post',
});

export default authInstance;
