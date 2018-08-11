import axios from "axios";
import {TOKEN, API_URL} from "./settings";


const apiClient = axios.create({
  baseURL: API_URL,
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(function (config) {
  let token = localStorage.getItem(TOKEN) || null;
  if (token !== null) {
    config.headers.Authorization = `${TOKEN} ${token}`;
  }
  return config;
});

export default apiClient;