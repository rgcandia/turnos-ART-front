import { useSelector } from 'react-redux'
import style from './AddUser.module.css'
import { useState } from 'react';
import {updateData} from '../../../../socket.js'

function AddUser (){
    const {users,selected} = useSelector(state=>state.data)
    const [selectedOption, setSelectedOption] = useState('');
    //filtro los usuarios que no tienen reservas
    const arrayUser = users.filter(user=>user.turno === null)
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
      };
      const guardar = () =>{
        updateData({selected,selectedOption})
      }
    return(<div>
        <h3>Reservar turno</h3>
        <label htmlFor="dropdown">Docente:</label>
      <select id="dropdown" value={selectedOption} onChange={handleChange}>
        <option value=""> Seleccione...</option>
        {arrayUser&& arrayUser.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.name}
          </option>
        ))}
      </select>
      


      <button onClick={guardar}>Reservar</button>
      
    </div>)
}

export default AddUser;