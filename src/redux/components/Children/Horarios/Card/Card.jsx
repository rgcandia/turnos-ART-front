import style from './Card.module.css'
function Card ({data}){
    const {hora,id} = data;
    return(<div key={id}>
        <h2>{hora}</h2>
    </div>)
}
export default Card;