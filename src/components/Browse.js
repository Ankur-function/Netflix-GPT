import { useSelector } from "react-redux";
import useGetNowMovies from "../hooks/useGetNowMovies";
import usePopularMovies from "../hooks/useGetPopularMovies";
import GptSearchPage from "./GptSearchPage";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () =>{
useGetNowMovies();
usePopularMovies();
const gptSearchButtonValue = useSelector((store)=>{return store.gpt?.gptSearchButton});

    return (
        <div>
            <Header/>
            {gptSearchButtonValue?<GptSearchPage/>:<><MainContainer/>
            <SecondaryContainer/></>}
        {/**
         * Main Container
         *    - Main video(trailer)
         *    - Main video title
         * 
         * Secondary Container
         *    - Movies list
         *    - In each movie list there will be so many cards so  :- Cards * n;
         */}
        </div>
    )
}

export default Browse;