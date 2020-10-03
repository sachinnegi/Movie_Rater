import axios from 'axios';

const key = "c84671ee69c26dcf112bd21220af8a32";


const movieURL = {
    "upcoming" : `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    "now_playing": `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
    "popular": `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    "topRated": `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
}

const tvShowURL = {
    "latest": `https://api.themoviedb.org/3/tv/latest?api_key=${key}&language=en-US`,
    "popular": `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
    "topRated": `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
}

const img_base_url = "http://image.tmdb.org/t/p/w342"
export {movieURL, tvShowURL,img_base_url}

const url  = movieURL.latest;
function check(){
    axios.get(url)
        .then((response) => console.log(response))
}
// check();




