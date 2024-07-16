import axios from 'axios';
import { supabaseKey } from '../utils/supabase/supabase-client';

const BASE_API_URL = 'https://nbpdygiwxlsthzeqqugs.supabase.co/rest/v1/';

const apiClient = axios.create({
  baseURL: BASE_API_URL,
});

apiClient.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = `Bearer ${supabaseKey}`;
    config.headers['apiKey'] = supabaseKey;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
