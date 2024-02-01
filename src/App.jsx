
import { useEffect } from 'react'
import './App.css'
import {startSocket,listenerData} from './socket.js'
import {uploadData} from './redux/slice.js'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    startSocket();
    listenerData(dispatch,uploadData);
  },[])

  return (
    <>
    <h1>Turnero en Proceso</h1>
    </>
  )
}

export default App
