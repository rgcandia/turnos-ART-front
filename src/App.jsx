
import { useEffect } from 'react'
import style from './App.module.css'
import {startSocket,listenerData} from './socket.js'
import {uploadData} from './redux/slice.js'
import { useDispatch } from 'react-redux'
import Nav from './redux/components/Nav/Nav.jsx'
import { Outlet } from 'react-router-dom'
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    startSocket();
    listenerData(dispatch,uploadData);
  },[])

  return (
    <div className={style.app}>
    
    <Nav/>
    <Outlet/>
   

    
    </div>
  )
}

export default App
