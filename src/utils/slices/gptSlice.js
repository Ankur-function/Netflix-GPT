import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        gptSearchButton:false
    },
    reducers:{
        toggleGptSearchButton:(state,action)=>{  
            state.gptSearchButton = !state.gptSearchButton;
        }
    }
})

export const {toggleGptSearchButton} = gptSlice.actions
export default gptSlice.reducer