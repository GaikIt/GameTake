import axios, { CreateAxiosDefaults } from "axios";
export const getContentType = () => ({
  "Content-type": "application/json",
});
const options: CreateAxiosDefaults = {
  baseURL: "https://www.freetogame.com/api",
  headers: getContentType(),
  withCredentials: false,
};
export const freeGame = axios.create(options);
