import { useSelector } from 'react-redux';
import style from './Horarios.module.css';
import Card from './Card/Card';

function Horarios() {
  const { horas, fechaSeleccionada } = useSelector(state => state.data);

  const horariosFiltrados = horas?.filter(h => {
    if (!h.fecha) return false;

    // 🔹 normalizamos la fecha que viene del backend
    const fechaHorario = new Date(h.fecha).toISOString().split('T')[0];

    return fechaHorario === fechaSeleccionada;
  });

  return (
    <div className={style.horario}>
      <div style={{ textAlign: 'center' }}>
        <h1>Turnos</h1>
        <p style={{ color: '#0c3f5c', fontWeight: 600 }}>
  {fechaSeleccionada}
</p>

      </div>

      <div className={style.vistaHora}>
        {horariosFiltrados?.map(e => (
          <Card datos={e} key={e.id} />
        ))}

        {horariosFiltrados?.length === 0 && (
          <p>No hay horarios para esta fecha</p>
        )}
      </div>
    </div>
  );
}

export default Horarios;
