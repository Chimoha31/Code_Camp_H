import axios from "axios";

const BASE_URL = "http://localhost:8000/api/v1";
// const getToken = () => localStorage.getItem("token")
const getToken = () => JSON.parse(localStorage.getItem("token"));

const axiosClient = axios.create({
  baseURL: BASE_URL,
});

// APIを叩く前に前処理を行う (request)
axiosClient.interceptors.request.use(async (config) => {
  return {
    ...config,
    header: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getToken()}`, //request headerにJWTを付けてServerに渡す
    },
  };
});

// response
axiosClient.interceptors.response.use(
  async (response) => {
    return response;
  },
  (err) => {
    throw err.response;
  }
);

export default axiosClient;
