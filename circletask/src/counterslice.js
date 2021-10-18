import {createSlice} from '@reduxjs/toolkit';
export const slice=createSlice({
    name :'radius',
    initialState:{
        value:20
    },
    reducers:{
        changeSize:(state,action)=>{
            state.value=action.payload;
        }
    },
  
  })
  export const changeSize=slice.actions;
//   export const selectCount=state=>state.radius.value;
  export default slice.reducer;