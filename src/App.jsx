
import { useEffect } from 'react'
import './App.css'
import {startSocket} from './socket.js'
function App() {
  
  useEffect(()=>{
    startSocket();
  },[])

  return (
    <>
    <b1>Turnero en Proceso</b1>
    </>
  )
}

export default App
