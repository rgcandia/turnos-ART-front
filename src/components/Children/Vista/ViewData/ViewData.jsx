 import { useSelector } from 'react-redux';
import style from './ViewData.module.css'
import CardHorarios from './CardHorarios/CardHorarios';
import AddUser from '../AddUser/AddUser';
 function ViewData(){
    const {selected,horas} = useSelector(state=>state.data)
    const hora = horas?.find(obj=>obj.id===selected)
    return(<div>
        {hora?<div style={{textAlign:'center'}}><h1>Reservas  {hora.hora} horas</h1></div>:<div><h2>Seleciona un Horario</h2></div>}
        {hora?.data.length>0&&<CardHorarios horario={hora}/>}
        {hora?.data.length<4 && <AddUser/>}
    </div>)
 }
 export default ViewData;