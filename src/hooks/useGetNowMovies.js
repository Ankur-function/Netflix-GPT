import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/slices/movieSlice";

const useGetNowMovies = () => {

        const dispatch = useDispatch();

    const getNowMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
        const movieData = await data.json();
        dispatch(addNowPlayingMovies(movieData.results));
    }

    useEffect(()=>{
        getNowMovies();
    },[]);

}

export default useGetNowMovies;