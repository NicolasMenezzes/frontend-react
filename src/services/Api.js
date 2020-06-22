import Axios from "axios";

// Configuração do AXIOS 

export const api = Axios.create({
  baseURL: `https://gorest.co.in/public-api`,
});