import axios from "axios";

const API = axios.create({
  baseURL: "https://rentride-neas.onrender.com/api",
});

export const getCars = async () => {
  const response = await API.get("/cars");
  return response.data;
};

export default API;