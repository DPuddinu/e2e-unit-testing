// api.ts

import axios from 'axios';

export const fetchData = async () => {
  // Use Axios get method
  const response = await axios.get('/api/data');
  return response.data;
};

export const postData = async (data: unknown) => {
  // Use Axios post method
  const response = await axios.post('/api/postData', data);
  return response.data;
};