import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    users:null,
    horas:null,
    selected:1,
  }
  export const stateSlice = createSlice({
    name: 'state',
    initialState,
    reducers: {
      
      uploadData: (state, action) => {
        state.users = action.payload.users;
        state.horas = action.payload.horarios;
      },
      uploadSelected:(state,action)=>{
        state.selected = action.payload
      }
 
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { uploadData,uploadSelected} = stateSlice.actions
  export default stateSlice.reducer;