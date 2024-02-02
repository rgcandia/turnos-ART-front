import styles from './Vista.module.css'
import { useSelector } from 'react-redux';
import AddUser from './AddUser/AddUser';

function Vista (){
    const {selected,horas} = useSelector(state=>state.data)
    const hora = horas?.find(obj=>obj.id===selected)
  return (<div className={styles.vista}>
        <h2>INFORMACIÓN</h2>
        {hora&&<h3> Usted Selecionó la hora : {hora.hora}  </h3>}
        <AddUser/>
    </div>)
}
export default  Vista;