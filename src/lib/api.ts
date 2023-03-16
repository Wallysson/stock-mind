import axios from "axios";

const url = `https://newsapi.org/v2`;

export const api = axios.create({
  baseURL: url,
});
