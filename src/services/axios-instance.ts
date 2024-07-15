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

// const updateHeader = async () => {
//   try {
//     await useAuthStore.getState().fetchSession();
//     const session = useAuthStore.getState().session;

//     if (session?.access_token) {
//       apiClient.defaults.headers.common[
//         'Authorization'
//       ] = `Bearer ${session.access_token}`;
//       apiClient.defaults.headers.common['apiKey'] = session.access_token;
//     } else {
//       delete apiClient.defaults.headers.common['Authorization'];
//       delete apiClient.defaults.headers.common['apiKey'];
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// updateHeader();

// useAuthStore.subscribe(updateHeader);
