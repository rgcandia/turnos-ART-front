import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    users:null,
    horas:null,
    selected:null,
     fechaSeleccionada: '2026-03-02' // default (día 1)
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
      },
      setFechaSeleccionada: (state, action) => {
  state.fechaSeleccionada = action.payload;
  state.selected = null; // reset horario seleccionado
}

 
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { uploadData,uploadSelected,setFechaSeleccionada} = stateSlice.actions
  export default stateSlice.reducer;