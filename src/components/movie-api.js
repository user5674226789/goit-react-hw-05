import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmY4NDRkMjBjYjAxMmE0MGU2OGJjNWViY2Q1M2I3NCIsInN1YiI6IjY2NGRmOGM0NTE5NTYwMmQ0YjQzY2U4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PX_uKoG-vAsOfEp68QuaSYaGGHH0Akieec3W_LMAUTU",
  },
}; 
  // ++++++++++++++++
export const getMovies = async () => {

const url =
  "https://api.themoviedb.org/3/trending/movie/day"; 

   try {
     const response = await axios.get(url, options);
console.log(response);
     return response.data;
   } catch (error) {
     console.error("Error fetching articles:", error);
     throw error;
   }
  
};
