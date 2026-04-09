import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        gptSearchButton:false,
        movieNames:null,
        movieResults:null
    },
    reducers:{
        toggleGptSearchButton:(state,action)=>{  
            state.gptSearchButton = !state.gptSearchButton;
        },
        gptSearchedMovies:(state,action)=>{
           const {movieList,moviesResult} = action.payload;
           state.movieNames = movieList;
           state.movieResults = moviesResult;
           
        }
    }
})

export const {toggleGptSearchButton,gptSearchedMovies} = gptSlice.actions
export default gptSlice.reducer