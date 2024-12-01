import { BASE_URL, GITHUB_TOKEN } from '@/config/environments';
import axios from 'axios';

export const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    if (!config.headers['Authorization']) {
      config.headers['Authorization'] = `token ${GITHUB_TOKEN}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    const remaining = response.headers['x-ratelimit-remaining'];
    if (remaining && remaining === '0') {
      const resetTime = response.headers['x-ratelimit-reset'];
      console.log(
        `Limite de requisições atingido. Reset em: ${new Date(resetTime * 1000)}`,
      );
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);
