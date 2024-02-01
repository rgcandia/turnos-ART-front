import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    users:null,
    horas:null,
  }
  export const stateSlice = createSlice({
    name: 'state',
    initialState,
    reducers: {
      
      uploadData: (state, action) => {
        state.users = action.payload.users;
        state.horas = action.payload.horarios;
      },
 
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { uploadData} = stateSlice.actions
  export default stateSlice.reducer