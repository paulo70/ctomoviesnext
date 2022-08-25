import axios from "axios";


const headers = {
  "Content-Type": "application/json"
};

export const API = axios.create({
  baseURL: `https://api.themoviedb.org/3/trending/movie`,
  headers
})

// export const SEARCH = axios.create({
//   baseURL: ``
// })

export default API;
