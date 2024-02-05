 import { useSelector } from 'react-redux';
import style from './ViewData.module.css'
import CardHorarios from './CardHorarios/CardHorarios';
import AddUser from '../AddUser/AddUser';
 function ViewData(){
    const {selected,horas} = useSelector(state=>state.data)
    const hora = horas?.find(obj=>obj.id===selected)
    return(<div>
        {hora?<h2>Reservas  {hora.hora} horas</h2>:<h2>Seleciona un Horario</h2>}
        {hora&&<CardHorarios horario={hora}/>}
        {hora?.data.length<4 && <AddUser/>}
    </div>)
 }
 export default ViewData;