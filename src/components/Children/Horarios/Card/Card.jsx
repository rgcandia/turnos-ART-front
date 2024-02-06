import { useDispatch, useSelector } from 'react-redux';
import style from './Card.module.css'
import { uploadSelected } from '../../../../redux/slice';
function Card ({datos}){
    const {selected} = useSelector(state=>state.data);
    const dispatch = useDispatch();
    const {hora,id,data} = datos;

    const manejadorClick = ()=>{
        dispatch(uploadSelected(id))
    }
    return(<div  className={`${style.btn} ${selected===id?data.length<6?style.selectedSuccess:style.selectedDanger:data.length<6?style.success:style.danger} `} onClick={manejadorClick}>
        <h2>{hora}</h2>
    </div>)
}
export default Card;