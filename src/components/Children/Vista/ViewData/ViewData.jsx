 import { useSelector } from 'react-redux';
import style from './ViewData.module.css'
 function ViewData(){
    const {selected,horas} = useSelector(state=>state.data)
    const hora = horas?.find(obj=>obj.id===selected)
    return(<div>
        <h2>Información horario :</h2>
    </div>)
 }
 export default ViewData;