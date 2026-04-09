import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSearchSuggestions = () => {
    const gptMoviesResults = useSelector((store)=>{return store.gpt?.movieResults});
    const gptMoviesName= useSelector((store)=>{return store.gpt?.movieNames});
    if (!gptMoviesName) return;

    return (
        <div className="p-4 m-4 bg-black text-white bg-opacity-90">
        <div>
            {gptMoviesName.map((item,index)=>{return <MovieList key={item} Allmovies={gptMoviesResults[index]} heading={item} />})}
        </div>
        </div>

    )
}

export default GptSearchSuggestions;