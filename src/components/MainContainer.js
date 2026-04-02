import MainBackGroundVideo from "./MainBackGroundVideo";
import { useSelector } from "react-redux"
import MainVideoTitle from "./MainVideoTitle";

const MainContainer = () =>{

     const movies = useSelector(store=>(store.movie?.nowPlayingMovies));
    if (!movies) return
    
    const {title,overview,id} = movies[2];
    return(
        <div className="relative w-screen">
        <MainBackGroundVideo movieId={id}/>
         <MainVideoTitle title={title} overview={overview}/>
        </div>
    )

}

export default MainContainer;