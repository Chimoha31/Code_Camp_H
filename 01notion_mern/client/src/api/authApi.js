import axiosClient from "./axiosClient";

const authApi = {
  resister: (params) => axiosClient.post("auth/resister", params),
};

export default authApi;
