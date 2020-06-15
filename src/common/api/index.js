import { create } from "apisauce";
import { AuthRequests } from "Auth/AuthRequests";

const createApi = (baseURL = process.env.REACT_APP_API_URL) => {
  // timeout: 2000
  const api = create({
    baseURL,
    timeout: 50000,
    headers: {
      // TODO: INSERT LOCAL STORAGE TOKEN HERE TO AUTH REQUEST NEEDED
      //   Authorization: `Bearer ${
      //     JSON.parse(localStorage?.getItem("token")) || {}
      //   }`,
      "Content-Type": "application/json",
      Accept: "application/json",
      "Accept-Language": "en-US",
      "Content-Language": "en-US",
    },
  });

  api.axiosInstance.interceptors.request.use(
    (config) => {
      //const token = JSON.parse(localStorage?.getItem("token")) || {};
      if (false) {
        // eslint-disable-next-line no-param-reassign
        // config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  const authentication = (data) => api.post("/oauth/token", data);

  return {
    authentication,
    ...AuthRequests(api),
  };
};

// let's return back our create method as the default.
export default createApi;
