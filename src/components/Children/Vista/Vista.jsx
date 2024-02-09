import styles from './Vista.module.css'
import ViewData from './ViewData/ViewData';
import SearchUser from './SearchUser/SearchUser';
import Print from '../../Print/Print';

function Vista (){
    
  return (<div className={styles.vista}>
        
        <ViewData/>
        <SearchUser/>
        <Print/>
    </div>)
}
export default  Vista;