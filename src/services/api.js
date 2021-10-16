import axios from 'axios';

const host = 'http://localhost:8080';

export const apiCall = async (method, path, data) => {
  const response = await axios[method](`${host}/${path}`, data);
  return response.data;
};

export default {
  apiCall,
};
