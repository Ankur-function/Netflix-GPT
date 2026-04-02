import useGetNowMovies from "../hooks/useGetNowMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";

const Browse = () =>{
useGetNowMovies();
    return (
        <div>
            <Header/>
        {/**
         * Main Container
         *    - Main video(trailer)
         *    - Main video title
         * 
         * Secondary Container
         *    - Movies list (movie * n)
         *    - Cards * n;
         */}
         <MainContainer/>
        </div>
    )
}

export default Browse;