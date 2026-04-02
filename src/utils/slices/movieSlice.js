import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:'movie',
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
            //  return state;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo = action.payload;
            //  return state;
        }
    }
});

export const {addNowPlayingMovies,addTrailerVideo} = moviesSlice.actions;
export default moviesSlice.reducer