import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

// HEADERS
const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    //Destructuring + Config options url & params are different endpoints
    const {data} = await axios.get(BASE_URL + url, {headers, params});
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
