import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/slices/movieSlice";

const useMovieTrailer = (movieId) => {

    const trailerVideo = useSelector((store)=>{return store.movie.trailerVideo})//memoization, not sure whether it is working or not i will check later
    const dispatch = useDispatch();
   const fetchTrailer = async () => {
       const movieById = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
       const data = await movieById.json();
       const filteredData = data.results.filter((item)=>{return item.type === 'Trailer'});
       const trailerData = filteredData.length === 0 ? data.results[0] : filteredData[0];
       dispatch(addTrailerVideo(trailerData));
   }

   useEffect(()=>{
    if(!trailerVideo) fetchTrailer();
   },[]);
}

export default useMovieTrailer;