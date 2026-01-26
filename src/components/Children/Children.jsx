import style from './Children.module.css'
import Horarios from './Horarios/Horarios'
import Vista from './Vista/Vista'
import ListaUsuarios from './ListaUsuarios/ListaUsuarios'

function Children () {
  return (
    <div className={style.children}>
      <Horarios/>
      <Vista/>
      <div className={style.fullWidth}>
        <ListaUsuarios/>
      </div>
    </div>
  )
}

export default Children
