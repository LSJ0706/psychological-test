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

export const getUser = async (accessToken) => {
  const response = await axios.get(`${API_URL}/user`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    }
  });
  return response.data;
};

export const patchUserProfile = async (accessToken, nickname) => {
  const response = await axios.patch(`${API_URL}/profile`, nickname, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${accessToken}`
    }
  });
  return response.data;
};
