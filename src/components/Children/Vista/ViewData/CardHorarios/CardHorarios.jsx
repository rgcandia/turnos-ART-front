import { useSelector } from 'react-redux';
import style from './CardHorarios.module.css';
import { MdDeleteForever } from "react-icons/md";
import {eliminarReserva} from '../../../../../socket.js'
function CardHorarios({ horario }) {
  const { users,selected } = useSelector(state => state.data);
  const { data } = horario;

  // Crear un array de objetos con el nombre y el ID de los usuarios correspondientes a los IDs en el array data
  const nombresDeUsuarios = data.map(id => {
    const usuario = users.find(user => user.id === id); // Encontrar el usuario por su ID
    return usuario ? { id: usuario.id, nombre: usuario.name } : null; // Retornar un objeto con el nombre y el ID del usuario si se encuentra, o null si no se encuentra
  }).filter(usuario => usuario !== null); // Filtrar los usuarios que no se encontraron

  const handleEliminarUsuario = (userId,horarioId) => {
    // Aquí puedes implementar la lógica para eliminar el usuario correspondiente al ID 'id'
    eliminarReserva({userId,horarioId})
  };

  return (
    <div>
      <table className={style.tablaUsuarios}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre de Usuario</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {nombresDeUsuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nombre}</td>
              <td>
                <button onClick={() => handleEliminarUsuario(usuario.id,selected)}>
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
