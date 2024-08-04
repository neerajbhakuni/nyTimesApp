import { STATUS_CODE } from "../configs/constants";
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
      if (error?.response?.status === STATUS_CODE.NOT_AUTHORIZED) {
      }
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

/*
Function to handle HTTP POST request
@data for passing data as body
@params- for query params
*/
export const post = async (
  url: string,
  data: any = {},
  params: any = {},
) => {
  const config = {
    baseURL: env.BASE_URL,
    method: "POST",
    url,
    headers: {
      "Content-Type": "application/json",
    },
    data,
    params,
  };

  return getNetworkResponse(config);
};

/**
 * Handle HTTP PUT request
 * @param {string} url http url of api
 * @param {object} data data to pass in body
 * @param {object} params params to pass in api call
 */
export const put = async (
  url: string,
  data: any = {},
  params: any = {},
  apiPath: any = null
) => {
  const config = {
    baseURL: env.BASE_URL,
    method: "PUT",
    url,
    headers: {
      "Content-Type": "application/json",
    },
    data,
    params,
  };

  return getNetworkResponse(config);
};

/**
 * Handle HTTP DELETE request
 * @param {string} url http url of api
 * @param {object} data data to pass in body
 * @param {object} params params to pass in api call
 */
export const Delete = async (
  url: string,
  data: any = {},
  params: any = {},
) => {
  const config = {
    baseURL: env.BASE_URL,
    method: "DELETE",
    url,
    headers: {
      "Content-Type": "application/json",
    },
    data,
    params,
  };

  return getNetworkResponse(config);
};

const service = {
  get,
  post,
  put,
  Delete,
  API_PATH: { ...END_POINTS }
};

export default service;
