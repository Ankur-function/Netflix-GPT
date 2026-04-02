
import {useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const MainBackGroundVideo = ({movieId}) => {
    
    const trailer = useSelector(store=>{return store.movie?.trailerVideo});

     useMovieTrailer(movieId)
    
 return (
      <div className="w-screen relative z-0">
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailer?.key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    );

}

export default MainBackGroundVideo;