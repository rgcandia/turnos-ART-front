import { useDispatch, useSelector } from 'react-redux';
import style from './Card.module.css'
import { uploadSelected } from '../../../../redux/slice';
function Card ({data}){
    const {selected} = useSelector(state=>state.data);
    const dispatch = useDispatch();
    const {hora,id} = data;

    const manejadorClick = ()=>{
        dispatch(uploadSelected(id))
    }
    return(<div  className={`${style.btn} ${style.success} `} onClick={manejadorClick}>
        <h2>{hora}</h2>
    </div>)
}
export default Card;