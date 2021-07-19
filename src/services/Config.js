import Axios from "axios";

const params = {
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
};

export default class Http {
  static createAxiosInstance(auth = false, baseUrl = false,) {
      params.baseURL = process.env.VUE_APP__URL_API;

      if(baseUrl)
      params.baseURL = baseUrl;

    if(auth) {
        params.headers.Authorization = localStorage.getItem("session") !== null
        ? `Bearer ${JSON.parse(localStorage.getItem("session")).token}`
        : "";
    }

    const axios = Axios.create(params);

    axios.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return error;
      }
    );

    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response.status === 401) {
          return error.response;
        }
        return error.response;
      }
    );

    return axios;
  }

}
