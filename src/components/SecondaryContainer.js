import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((store)=>{return store.movie});
    
    return (
        <div className=" bg-black">
            <div className="-mt-52 pl-12 relative z-20">
            <MovieList heading={'Favorites'} Allmovies={movies.nowPlayingMovies}/>
            <MovieList heading={'Popular'} Allmovies={movies.popularMovies}/>
            <MovieList heading={'Favorites'} Allmovies={movies.nowPlayingMovies}/>
            <MovieList heading={'Popular'} Allmovies={movies.popularMovies}/>
            <MovieList heading={'Favorites'} Allmovies={movies.nowPlayingMovies}/>
             <MovieList heading={'Popular'} Allmovies={movies.popularMovies}/>
            </div>


        </div>
    )
}

export default SecondaryContainer;