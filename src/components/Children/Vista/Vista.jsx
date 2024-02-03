import styles from './Vista.module.css'
import AddUser from './AddUser/AddUser';
import ViewData from './ViewData/ViewData';

function Vista (){
    
  return (<div className={styles.vista}>
        
        <ViewData/>
        <AddUser/>
    </div>)
}
export default  Vista;