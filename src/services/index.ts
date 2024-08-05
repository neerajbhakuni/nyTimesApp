import axios from "axios";
import env from "../env.json";
import END_POINTS from "./endPoint";

const client = axios.create();
client.defaults.timeout = env.API_TIMEOUT || 60000;
client.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use((response) => {
  return response;
});

const getNetworkResponse = async (config: any) => {
  return client(config)
    .then(async function (response: any) {
      return response;
    })
    .catch(async (error: any) => {
      return error.response || error.message;
    });
};

/*
Function to handle HTTP GET request
@params- for query params
*/
export const get = async (url: string, params: any = {}) => {
  const config = {
    baseURL: env.BASE_URL,
    method: "GET",
    url,
    params: {...params, "api-key": env.NY_TIMES_API_KEY},
  };

  return getNetworkResponse(config);
};

const service = {
  get,
  API_PATH: { ...END_POINTS }
};

export default service;
