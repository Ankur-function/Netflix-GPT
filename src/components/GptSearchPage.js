import { LOGO_URL } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggestions from "./GptSearchSuggestions";

const GptSearchPage = () => {

    return (
        <div>
             <div className='absolute -z-10'>
            <img src= {LOGO_URL} alt='background-img'/>
            </div>
            <GptSearchBar/>
            <GptSearchSuggestions/>
        </div>
    )
}
export default GptSearchPage;