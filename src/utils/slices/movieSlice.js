import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:'movie',
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
            //  return state;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo = action.payload;
            //  return state;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload;
        }
    }
});

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies} = moviesSlice.actions;
export default moviesSlice.reducer