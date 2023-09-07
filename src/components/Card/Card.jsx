import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div className={style.container}>
         <button onClick={() => onClose(id)} className={style.closeBotton}>X</button>
         <h2 className={style.num} id='id'>{id}</h2>
         <Link to={`/detail/${id}`}><h2>{name}</h2></Link>
         <h2 id='status'>{status}</h2>
         <h2 id='species'>{species}</h2>
         <h2 id='gender'>{gender}</h2>
         <h2 id='origin'>{origin.name}</h2>
         <img className={style.tamanoIgen} src={image} alt='name' />
      </div>
   );
}
