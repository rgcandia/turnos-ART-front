import io from 'socket.io-client';
let socket;
const apiUrlDeploy = import.meta.env.VITE_URL_API_DEPLOY;
const apiUrlDev = "http://localhost:4001/";
const apiUrl = import.meta.env.PROD ? apiUrlDeploy : apiUrlDev;

export const startSocket = ()=>{
    socket = io(apiUrl,{transports:['websocket']})
    console.log('Connecting socket...')
    console.log("prueba")
    console.log(apiUrl)
    if (socket) {
       console.log("Conectado")
       socket.emit('join')
      }
}


export const listenerData = (dispatch, action) => {
  socket.on('data', ({ users, horarios }) => {
      if (users && horarios) {
          // Ordenar users por su ID
          const sortedUsers = users.sort((a, b) => a.id - b.id);
          // Ordenar horarios por su ID
          const sortedHorarios = horarios.sort((a, b) => a.id - b.id);

          // Despachar la acción con los arrays ordenados
          dispatch(action({ users: sortedUsers, horarios: sortedHorarios }));
      }
  });
};


export const updateData = ({selected,selectedOption})=>{
  socket.emit('updateData',{horario:selected,user: parseInt(selectedOption,10)})
}

//evento para eliminar reserva
export const eliminarReserva = ({userId,horarioId})=>{
  socket.emit('eliminarReserva',{userId,horarioId})
}