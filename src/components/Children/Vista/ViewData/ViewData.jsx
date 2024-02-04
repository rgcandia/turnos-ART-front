 import { useSelector } from 'react-redux';
import style from './ViewData.module.css'
import CardHorarios from './CardHorarios/CardHorarios';
 function ViewData(){
    const {selected,horas} = useSelector(state=>state.data)
    const hora = horas?.find(obj=>obj.id===selected)
    return(<div>
        {hora?<h2>Datos Hora = {hora.hora}</h2>:<h2>Seleciona un Horario</h2>}
        {hora&&<CardHorarios horario={hora}/>}
    </div>)
 }
 export default ViewData;