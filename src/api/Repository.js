import axios from "axios";

const baseURL = "https://reqres.in/api";
const Connection = axios.create({
  baseURL
  // Authorization?
});

export default Connection;
