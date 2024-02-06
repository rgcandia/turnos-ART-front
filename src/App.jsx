
import { useEffect } from 'react'
import style from './App.module.css'
import {startSocket,listenerData,listenerAlert} from './socket.js'
import {uploadData} from './redux/slice.js'
import { useDispatch, useSelector } from 'react-redux'
import Nav from './components/Nav/Nav.jsx'
import Loader from './components/Loader/Loader.jsx'
import { Outlet } from 'react-router-dom'
function App() {
  const dispatch = useDispatch();
  const {horas} = useSelector(state=>state.data)
  useEffect(()=>{
    startSocket();
    listenerData(dispatch,uploadData);
    listenerAlert();
  },[])

  
      return (
        <div className={style.app}>
          {horas&&<>
          <Nav/>
          <Outlet/>
          </>}
        {!horas&&<Loader/>}
        </div>
    )
    
  
   
}

export default App
