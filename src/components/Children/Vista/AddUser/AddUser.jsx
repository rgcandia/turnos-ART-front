import { useSelector } from 'react-redux'
import style from './AddUser.module.css'
import { useState } from 'react';
import {updateData} from '../../../../socket.js'

function AddUser (){
    const {users,selected} = useSelector(state=>state.data)
    const [selectedOption, setSelectedOption] = useState('');
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
      };
      const handleGuardar = () =>{
        updateData({selected,selectedOption})
        console.log("se envio, "+selected+" y "+selectedOption)
      }
    return(<div>
        <h3>Agregar Docente</h3>
        <label htmlFor="dropdown">Selecciona una opción:</label>
      <select id="dropdown" value={selectedOption} onChange={handleChange}>
        <option value="">Seleccione...</option>
        {users&& users.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.name}
          </option>
        ))}
      </select>
      <p>Opción seleccionada: {selectedOption}</p>


      <button onClick={handleGuardar}>GUARDAR</button>
    </div>)
}
export default AddUser;