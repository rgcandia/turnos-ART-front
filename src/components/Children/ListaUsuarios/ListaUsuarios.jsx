import { useSelector } from 'react-redux'
import styles from './ListaUsuarios.module.css'

function ListaUsuarios() {
  const { users, horas } = useSelector(state => state.data)

  const formatearFecha = (fechaISO) => {
  const [year, month, day] = fechaISO.split('-')
  return `${day}/${month}/${year}`
}


  const obtenerTurnoUsuario = (userId) => {
    if (!horas) return null

    const horario = horas.find(h =>
      Array.isArray(h.data) && h.data.includes(userId)
    )

    if (!horario) return null
 



return {
  hora: horario.hora,
  fecha: formatearFecha(horario.fecha)
}

  }

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Usuarios</h3>

      <table className={styles.tabla}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Estado</th>
            <th>Fecha</th>
            <th>Horario</th>
          </tr>
        </thead>

        <tbody>
          {users?.map(user => {
            const turno = obtenerTurnoUsuario(user.id)
       
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td className={turno ? styles.reservado : styles.libre}>
                  {turno ? 'Reservado' : 'Sin turno'}
                </td>
                <td>{turno ? turno.fecha : '-'}</td>
                <td>{turno ? turno.hora : '-'}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ListaUsuarios

