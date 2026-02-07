import { useSelector } from 'react-redux';
import style from './ViewData.module.css'
import CardHorarios from './CardHorarios/CardHorarios';
import AddUser from '../AddUser/AddUser';

function ViewData() {
  const { selected, horas } = useSelector(state => state.data);
  const hora = horas?.find(obj => obj.id === selected);

  return (
    <div className={style.container}>
      {hora ? (
        <h3 className={style.title}>
          Reservas – {hora.hora} hs
        </h3>
      ) : (
        <h4 className={style.empty}>Seleccioná un horario</h4>
      )}

      {hora?.data.length > 0 && <CardHorarios horario={hora} />}
      {hora?.data.length < 7 && <AddUser />}
    </div>
  );
}

export default ViewData;
