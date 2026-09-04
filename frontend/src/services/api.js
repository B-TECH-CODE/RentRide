import axios from "axios";

const API = axios.create({
  baseURL: "https://rentride-neas.onrender.com/api",
});

// Cars API
export const getCars = async () => {
  const response = await API.get("/cars");
  return response.data;
};

// Bikes API
export const getBikes = async () => {
  const response = await API.get("/bikes");
  return response.data;
};

export default API;