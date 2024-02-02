import style from './Nav.module.css'
import encabezado from '../../images/encabezado-wellspring.png'
function Nav (){
    return(<nav className={style.nav}>
        <img src={encabezado} alt ='encabezado de wellspring'/>
    </nav>)
}

export default Nav;