import style from  './Children.module.css'
import Horarios from './Horarios/Horarios';
import Vista from './Vista/Vista';
function Children (){
    return (<div className={style.children}>
        <Horarios/>
        <Vista/>
    </div>)
}
export default Children;