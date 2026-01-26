import { useSelector } from 'react-redux'
import styles from './ListaUsuarios.module.css'

function ListaUsuarios() {
  const { users, horas } = useSelector(state => state.data)

  const obtenerHoraUsuario = (userId) => {
    if (!horas) return null

    const horaEncontrada = horas.find(h =>
      Array.isArray(h.data) && h.data.includes(userId)
    )

    return horaEncontrada ? horaEncontrada.hora : null
  }

  return (
    <div className={styles.cardHorarios}>
      <h2>Usuarios</h2>

      <table className={styles.tablaUsuarios}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Turno</th>
            <th>Horario</th>
          </tr>
        </thead>

        <tbody>
          {users && users.map(user => {
            const hora = obtenerHoraUsuario(user.id)

            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{hora ? 'Reservado' : 'Sin turno'}</td>
                <td>{hora || '-'}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ListaUsuarios
