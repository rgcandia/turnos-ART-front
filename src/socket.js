import io from 'socket.io-client';
let socket;
const apiUrlDeploy = import.meta.env.VITE_URL_API_DEPLOY;
const apiUrlDev = "http://localhost:4001/";
const apiUrl = import.meta.env.PROD ? apiUrlDeploy : apiUrlDev;

export const startSocket = ()=>{
    socket = io(apiUrl,{transports:['websocket']})
    console.log('Connecting socket...')
    if (socket) {
       console.log("Conectado")
      }
}