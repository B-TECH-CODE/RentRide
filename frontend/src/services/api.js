import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getCars = async () => {
  const response = await API.get("/cars");
  return response.data;
};

export default API;