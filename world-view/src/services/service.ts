import axios from "axios";

console.log(process.env.BASE_URL);
export const api = axios.create({
  baseURL: "https://restcountries.com/",
  timeout: 10000,
  headers: {
    accept: "application/json",
  },
});

// Ajoutez un intercepteur pour afficher les requêtes sortantes
api.interceptors.request.use((request) => {
  console.log("Starting Request", request);
  return request;
});

// Ajoutez un intercepteur pour afficher les réponses entrantes
api.interceptors.response.use(
  (response) => {
    console.log("Response:", response.data);
    return response;
  },
  (error) => {
    console.error("Error Response:", error);
    return Promise.reject(error);
  }
);
