// AddUser.js

import { useSelector } from 'react-redux';
import style from './AddUser.module.css';
import { useState } from 'react';
import { updateData } from '../../../../socket.js';
import { esperarUpdate } from '../../../../Swal.js';

function AddUser() {
  const { users, selected } = useSelector((state) => state.data);
  const [selectedOption, setSelectedOption] = useState('');

  const arrayUser = users.filter((user) => user.turno === null);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const guardar = () => {
    if (selectedOption !== '') {
      updateData({ selected, selectedOption });
      esperarUpdate();
      setSelectedOption('');
    }
  };

  return (
    <div className={style.addUserContainer}>
      <h4 className={style.addUserTitle}>Reservar Turno</h4>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleChange}
        className={style.addUserSelect}
      >
        <option value=""> Seleccione...</option>
        {arrayUser &&
          arrayUser.map((opcion) => (
            <option key={opcion.id} value={opcion.id}>
              {opcion.name}
            </option>
          ))}
      </select>

      <button onClick={guardar} className={style.addUserButton}>
        Reservar
      </button>
    </div>
  );
}

export default AddUser;
