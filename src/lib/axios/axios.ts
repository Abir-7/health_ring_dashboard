// src/lib/axios.ts
import axios from "axios";
import { store } from "@/lib/redux/store";
import { ENV } from "@/config/env";

const axiosInstance = axios.create({
  baseURL: ENV.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = store.getState().auth.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    // optional: auto-logout on 401
    if (error?.response?.status === 401) {
      // store.dispatch(clearAuth());
    }
    return Promise.reject(error?.response?.data ?? error);
  }
);

export default axiosInstance;
