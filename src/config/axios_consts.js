import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_ROOT_URL,
  headers: {'Content-Type': 'application/json'},
});

export const app = axios.create({
  baseURL: process.env.REACT_APP_ROOT_URL
});
