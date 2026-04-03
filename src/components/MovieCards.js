import { IMG_URL } from "../utils/constants";

const MovieCards = ({movieURL}) => {
    return (


        <div className="w-48 pr-4">
             <img alt="Movie Card" src= {IMG_URL + movieURL}></img>
                   
        </div>

    )
}

export default MovieCards;