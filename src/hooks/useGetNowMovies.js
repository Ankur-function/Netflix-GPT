import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/slices/movieSlice";

const useGetNowMovies = () => {

    const nowPlayingMovies = useSelector((store)=>{return store.movie.nowPlayingMovies});//memoization, not sure whether it is working or not i will check later
    const dispatch = useDispatch();

    const getNowMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
        const movieData = await data.json();
        dispatch(addNowPlayingMovies(movieData.results));
    }

    useEffect(()=>{
        if (!nowPlayingMovies) getNowMovies();
    },[]);

}

export default useGetNowMovies;