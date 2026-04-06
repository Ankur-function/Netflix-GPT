import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name:'config',
    initialState:{
        getLanguageValue :'en'
    },
    reducers:{
        changeLanguageValue:(state,action)=>{
            state.getLanguageValue = action.payload;
        }
    }
});

export const {changeLanguageValue} = configSlice.actions;
export default configSlice.reducer