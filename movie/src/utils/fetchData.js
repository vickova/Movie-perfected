const API_KEY = process.env.REACT_APP_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3/';

export const MoviesFetch = async (page=1)=>{
    const getMovies = await fetch(`${BASE_URL}movie/popular?api_key=${API_KEY}&page=${page}`).then();
    const getMoviesDat = getMovies.json();
    console.log(getMovies)
    return getMoviesDat
}

export const TrendingFetch = async (page=1)=>{
    const getMovies = await fetch(`${BASE_URL}movie/top_rated?api_key=${API_KEY}&page=${page}`).then();
    const getMoviesDat = getMovies.json();
    return getMoviesDat
}

export const VideosFetch = async (movieId)=>{
    let getVideos = await fetch(`${BASE_URL}movie/${movieId? movieId: '#'}/videos?api_key=${API_KEY}&language=en-US}`).then();
    getVideos = getVideos.json();
    return getVideos
}