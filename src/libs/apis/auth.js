import axios from 'axios';

const API_URL = 'https://www.nbcamp-react-auth.link';

export const signUp = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const signIn = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

export const getUser = async (userId) => {
  const response = await axios.get(`${API_URL}/id:${userId}`);
  return response.data;
};

export const patchUserProfile = async (userData) => {
  const response = await axios.patch(`${API_URL}/user`, userData);
  return response.data;
};
