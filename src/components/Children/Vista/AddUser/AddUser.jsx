import { useSelector } from 'react-redux'
import style from './AddUser.module.css'
import { useState } from 'react';
import {updateData} from '../../../../socket.js'
import {esperarUpdate} from '../../../../Swal.js'
function AddUser (){
    const {users,selected} = useSelector(state=>state.data)
    const [selectedOption, setSelectedOption] = useState('');
    //filtro los usuarios que no tienen reservas
    const arrayUser = users.filter(user=>user.turno === null)
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
      };
      const guardar = () =>{
        if(selectedOption!==''){
          updateData({selected,selectedOption})
          esperarUpdate();
          setSelectedOption('')
        }
      

      }
    return(<div>
        <h4>Reservar Turno</h4>
        {/* <label htmlFor="dropdown">Docente:</label> */}
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