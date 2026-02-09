import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import style from './SearchUser.module.css';

function SearchUser() {
  const { users, horas } = useSelector(state => state.data);
  const [selectedUserId, setSelectedUserId] = useState('');

  const selectedUser = users?.find(
    user => user.id === Number(selectedUserId)
  );

  let message = '';

  const formatearFecha = (fechaISO) => {
  const [year, month, day] = fechaISO.split('-')
  return `${day}/${month}/${year}`
}

  
  if (selectedUser) {
    if (selectedUser.turno !== null) {
      const horario = horas?.find(h => h.id === selectedUser.turno);

      if (horario) {
        const fecha = formatearFecha(horario.fecha);

        message = `El usuario "${selectedUser.name}" tiene un turno el día ${fecha} a las ${horario.hora} hs.`;
      } else {
        message = `El usuario "${selectedUser.name}" tiene un turno asignado.`;
      }
    } else {
      message = `El usuario "${selectedUser.name}" no tiene ningún turno asignado.`;
    }
  }

  return (
    <div className={style.container}>
      <h4 className={style.title}>Buscar Usuario</h4>

      <select
        className={style.select}
        value={selectedUserId}
        onChange={e => setSelectedUserId(e.target.value)}
      >
        <option value="">Selecciona un usuario</option>
        {users?.map(user => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>

      {selectedUser && (
        <p className={style.result}>
          {message}
        </p>
      )}
    </div>
  );
}

export default SearchUser;

