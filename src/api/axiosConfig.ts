import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "http://localhost:5000/api", // your backend base URL
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Optional: Add interceptors for debugging or auth
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default api;
