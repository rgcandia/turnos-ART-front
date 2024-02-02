import { useSelector } from 'react-redux';
import style from './Horarios.module.css'
import Card from './Card/Card';
function Horarios (){
    const {horas} =  useSelector(state=>state.data)
    return (<div className={style.horario}>
        <h2>HORARIOS</h2>
        <div className={style.vistaHora}>
            {horas&&horas.map(e=><Card data={e}/>) }
           
        </div>
    </div>)
}
export default Horarios;
