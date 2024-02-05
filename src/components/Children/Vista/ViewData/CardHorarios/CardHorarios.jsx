// CardHorarios.js

import React from 'react';
import { useSelector } from 'react-redux';
import style from './CardHorarios.module.css';
import { MdDeleteForever } from "react-icons/md";
import { eliminarReserva } from '../../../../../socket.js';

function CardHorarios({ horario }) {
  const { users, selected } = useSelector(state => state.data);
  const { data } = horario;

  const nombresDeUsuarios = data.map(id => {
    const usuario = users.find(user => user.id === id);
    return usuario ? { id: usuario.id, nombre: usuario.name } : null;
  }).filter(usuario => usuario !== null);

  const handleEliminarUsuario = (userId, horarioId) => {
    eliminarReserva({ userId, horarioId });
  };

  return (
    <div className={style.cardHorarios}>
      <table className={style.tablaUsuarios}>
        <thead>
          <tr>
            <th>Nombre de Usuario</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {nombresDeUsuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.nombre}</td>
              <td>
                <button className={style.buttonEliminar} onClick={() => handleEliminarUsuario(usuario.id, selected)}>
                  <MdDeleteForever />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CardHorarios;
