import axios from 'axios';

const API = axios.create({
  baseURL: "http://localhost:8080/api", // backend URL
});

// Example call: GET /api/health
export const getHealth = async () => {
  const response = await API.get("/health");
  return response.data;
};

export default API;

// ensure no trailing slash on base
const API_BASE = (import.meta.env.VITE_API_BASE || 'http://localhost:8080').replace(/\/+$/, '');
fetch(`${API_BASE}/api/txns`, { method: 'GET' });