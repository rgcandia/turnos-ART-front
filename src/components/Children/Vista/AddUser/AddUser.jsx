import { useSelector } from 'react-redux'
import style from './AddUser.module.css'
import { useState } from 'react';


function AddUser (){
    const {users} = useSelector(state=>state.data)
    const [selectedOption, setSelectedOption] = useState('');
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
      };
    return(<div>
        <h3>Agregar Docente</h3>
        <label htmlFor="dropdown">Selecciona una opción:</label>
      <select id="dropdown" value={selectedOption} onChange={handleChange}>
        <option value="">Seleccione...</option>
        {users&& users.map((opcion) => (
          <option key={opcion.id} value={opcion.name}>
            {opcion.name}
          </option>
        ))}
      </select>
      <p>Opción seleccionada: {selectedOption}</p>
    </div>)
}
export default AddUser;