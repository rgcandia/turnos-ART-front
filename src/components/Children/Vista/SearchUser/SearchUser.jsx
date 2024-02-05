// SearchUser.js

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import style from './SearchUser.module.css';

function SearchUser() {
  const { users, horas } = useSelector((state) => state.data);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleUserChange = (event) => {
    setSelectedUserId(parseInt(event.target.value, 10));
  };

  const selectedUser = users?.find((user) => user.id === selectedUserId);

  let message = '';
  if (selectedUser) {
    const userName = selectedUser.name;

    if (selectedUser.turno !== null) {
      const selectedHorario = horas.find((hora) => hora.id === selectedUser.turno);
      const horasReservadas = selectedHorario ? selectedHorario.hora : 'N/A';
      message = `El usuario "${userName}" ha reservado a las "${horasReservadas}" horas.`;
    } else {
      message = `El usuario "${userName}" no ha reservado ningún turno todavía.`;
    }
  }

  return (
    <div className={style.searchUserContainer}>
      <h4 className={style.searchUserTitle}>Buscar Usuario</h4>
      
      <select
        id="userSelect"
        value={selectedUserId || ''}
        onChange={handleUserChange}
        className={style.searchUserSelect}
      >
        <option value="">Selecciona un usuario</option>
        {users?.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>

      {selectedUser && <p>{message}</p>}
      <button className={style.searchUserButton}>Buscar</button>
    </div>
  );
}

export default SearchUser;
