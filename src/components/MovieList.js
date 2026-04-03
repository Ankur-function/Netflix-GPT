import MovieCards from "./MovieCards";

const MovieList = ({Allmovies,heading}) => {
    return (
        <div className="px-6">
            <h1 className="text-3xl py-4 text-white">{heading}</h1>
            <div className="flex overflow-x-auto no-scrollbar scroll-smooth">
            <div className="flex">
            {Allmovies?.map((movie)=>{return <MovieCards key={movie.id} movieURL={movie.poster_path}/>})};
        </div>
            </div>

        </div>

    )
}

export default MovieList;
