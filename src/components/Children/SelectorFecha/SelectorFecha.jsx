import { useDispatch, useSelector } from "react-redux";
import style from "./SelectorFecha.module.css";
import { setFechaSeleccionada } from "../../../redux/slice";

function SelectorFecha() {
  const dispatch = useDispatch();
  const { fechaSeleccionada } = useSelector(state => state.data);

  const fechas = [
    { label: "Día 1 - 11/02/2026", value: "2026-02-11" },
    { label: "Día 2 - 12/02/2026", value: "2026-02-12" }
  ];

  return (
    <div className={style.selector}>
      {fechas.map(f => {
        const isActive = fechaSeleccionada === f.value;

        return (
          <button
            key={f.value}
            className={`${style.button} ${isActive ? style.active : ""}`}
            onClick={() => dispatch(setFechaSeleccionada(f.value))}
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );
}

export default SelectorFecha;
