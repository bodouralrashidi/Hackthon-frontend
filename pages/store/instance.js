import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8004",
});

export default instance;
