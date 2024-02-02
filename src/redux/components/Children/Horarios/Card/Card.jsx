import style from './Card.module.css'
function Card ({data}){
    const {hora,id} = data;
    return(<div key={id} className={`${style.btn} ${style.success}`}>
        <h2>{hora}</h2>
    </div>)
}
export default Card;