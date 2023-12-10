import axios from "axios";

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

export const get = async (path, data = {}) => {
  const link = import.meta.env.VITE_APP_BASE_URL;
  console.log(link);
  const response = await request.get(path, data);
  return response.data;
};

export const post = async (path, data = {}) => {
  const response = await request.post(path, data);
  return response;
};

export default request;
