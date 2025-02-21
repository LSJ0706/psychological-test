import axios from 'axios';
import { useAuthStore } from '@store/store';

const API_URL = 'https://www.nbcamp-react-auth.link';

export const signUp = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data.data;
};

export const signIn = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const getUser = async (userId) => {
  const response = await axios.get(`${API_URL}/id:${userId}`);
  return response.data;
};

export const patchUserProfile = async (userData) => {
  const response = await axios.patch(`${API_URL}/user`, userData);
  return response.data;
};

// 인증된 요청을 위한 axios 인스턴스
export const authApi = axios.create({
  baseURL: 'https://your-api.com/api'
});

// 요청에 자동으로 토큰 추가
authApi.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
