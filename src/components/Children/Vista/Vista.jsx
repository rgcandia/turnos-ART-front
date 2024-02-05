import styles from './Vista.module.css'
import ViewData from './ViewData/ViewData';
import SearchUser from './SearchUser/SearchUser';

function Vista (){
    
  return (<div className={styles.vista}>
        
        <ViewData/>
        <SearchUser/>
    </div>)
}
export default  Vista;