import { useSelector } from 'react-redux';
import style from './Horarios.module.css'
import Card from './Card/Card';
function Horarios (){
    const {horas} =  useSelector(state=>state.data)
    return (<div>
        <h2>HORARIOS</h2>
        <div>
            {horas&&horas.map(e=><Card data={e}/>) }
            
        </div>
    </div>)
}
export default Horarios;