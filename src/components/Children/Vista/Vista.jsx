import styles from './Vista.module.css'
import { useSelector } from 'react-redux';
function Vista (){
    const {selected,horas} = useSelector(state=>state.data)
    const hora = horas?.find(obj=>obj.id===selected)
  return (<div className={styles.vista}>
        <h2>INFORMACIÓN</h2>
        <div className={styles.pacientes}>
        {hora&&<h3> Usted Selecionó la hora : {hora.hora}  </h3>}
        </div>
    </div>)
}
export default  Vista;