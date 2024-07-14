import axios from 'axios';

export const BASE_DATA_URL =
  'https://chill-app-a3060-default-rtdb.asia-southeast1.firebasedatabase.app/data/';

export const apiClient = axios.create({
  baseURL: BASE_DATA_URL,
});
