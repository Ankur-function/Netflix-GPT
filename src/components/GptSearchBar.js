import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import gpt_client from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { gptSearchedMovies } from "../utils/slices/gptSlice";

const GptSearchBar = () => {
    const langValue = useSelector((store)=>{return store.config.getLanguageValue});
    const dispatch = useDispatch();
    const searchValue = useRef(null);
    const GetSearchMovies = async (movie) => {
    
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,API_OPTIONS);
        const json = await data.json();
        return json.results;
    }
    const handleSearchBarButton = async () => {

        const searchQuery = `Give me only 5 movie recommendations based on the query provided i.e. : ${searchValue.current.value} note:- only include titles of the movie nothing else. and movies title should be comma seperated don't include any numbers or anything like that`;
        const completion = await gpt_client.chat.completions.create({
            // model: 'gpt-3.5-turbo',// these are paid
            model: 'llama-3.1-8b-instant', // groq model
            messages: [
                { role: 'user', content: searchQuery},
            ],
            });
        if (!completion.choices) {
            return
            // do proper error handling like take him/her to the error handling page etc.
        }
        const movieList = completion.choices?.[0]?.message?.content.split(',');
        const moviesPromisesList = movieList.map((item)=>{return GetSearchMovies(item)});
        const moviesResult = await Promise.all(moviesPromisesList);
        dispatch(gptSearchedMovies({movieList,moviesResult}))
    }
    
    return(
        <div className="pt-[10%] flex justify-center">
            <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>(e.preventDefault())}>
                <input type="text" ref={searchValue}className="p-4 m-4 col-span-9" placeholder={lang[langValue].searchGptBarPlaceholder}></input>
                <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg" onClick={handleSearchBarButton}>{lang[langValue].search}</button>
            </form>
        </div>
    )
}
export default GptSearchBar;