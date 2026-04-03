import useGetNowMovies from "../hooks/useGetNowMovies";
import usePopularMovies from "../hooks/useGetPopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () =>{
useGetNowMovies();
usePopularMovies();
    return (
        <div>
            <Header/>
        {/**
         * Main Container
         *    - Main video(trailer)
         *    - Main video title
         * 
         * Secondary Container
         *    - Movies list
         *    - In each movie list there will be so many cards so  :- Cards * n;
         */}
        <MainContainer/>
          <SecondaryContainer/>
        </div>
    )
}

export default Browse;