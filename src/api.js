const key = "c84671ee69c26dcf112bd21220af8a32";
const movieURL = {
    "latest": `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US`,
    "popular": `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    "topRated": `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
}

const tvShowURL = {
    "latest": `https://api.themoviedb.org/3/tv/latest?api_key=${key}&language=en-US`,
    "popular": `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
    "topRated": `https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`,
}

const img_base_url = "http://image.tmdb.org/t/p/w500"
export {movieURL, tvShowURL,img_base_url}