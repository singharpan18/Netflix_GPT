import { API_OPTIONS } from '../utilis/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../utilis/movieSlice'
import { useEffect } from 'react'

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);
    const getNowPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json.results);
      dispatch(addNowPlayingMovies(json.results));
    };
  
    useEffect(() => {
      !nowPlayingMovies && getNowPlayingMovies();
    }, []);
  
}

export default useNowPlayingMovies;