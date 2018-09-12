import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_ROOT_URL
});

export const app = axios.create({
  baseURL: process.env.REACT_APP_ROOT_URL
});
