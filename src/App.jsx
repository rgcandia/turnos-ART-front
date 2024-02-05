
import { useEffect } from 'react'
import style from './App.module.css'
import {startSocket,listenerData,listenerAlert} from './socket.js'
import {uploadData} from './redux/slice.js'
import { useDispatch } from 'react-redux'
import Nav from './components/Nav/Nav.jsx'
import { Outlet } from 'react-router-dom'
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    startSocket();
    listenerData(dispatch,uploadData);
    listenerAlert();
  },[])

  return (
    <div className={style.app}>
    
    <Nav/>
    <Outlet/>
   

    
    </div>
  )
}

export default App
