
import { useSelector } from 'react-redux';
import style from './CardHorarios.module.css'

function CardHorarios({horario}){
  const {users} = useSelector(state=>state.data)
  
const {data} =  horario;
    return( 
        <div>
            {data.length>0 && data.map((obj)=>{
                const user = users.find(e=>e.id === obj)
                return <h3 key={user.id}>{user.name}</h3>
            })}
        </div>
    )
}
export default CardHorarios;