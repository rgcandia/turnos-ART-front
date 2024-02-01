import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    user:null,
    horas:null,
  }
  export const stateSlice = createSlice({
    name: 'state',
    initialState,
    reducers: {
      
    //   uploadUser: (state, action) => {
    //     state.user = action.payload
    //   },
    //   uploadValues:(state,action)=>{
    //     state.forms=action.payload
    //   },
    //   updateForm:(state,action)=>{
    //   state.form = action.payload
    //   }
    },
  })
  
  // Action creators are generated for each case reducer function
//   export const { uploadUser,uploadValues,updateForm } = stateSlice.actions
  export default stateSlice.reducer