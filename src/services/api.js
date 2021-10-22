import axios from 'axios';

const host = 'http://demo-api.vsdev.space/api';

export const apiCall = async (method, path, data) => {
  const response = await axios[method](`${host}/${path}`, data);
  return response.data;
};

export default {
  apiCall,
};
