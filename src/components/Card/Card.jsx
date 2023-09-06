import style from "./Card.module.css";

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div className={style.container}>
         <button onClick={() => onClose(id)} className={style.closeBotton}>X</button>
         <h2 id='id'>{id}</h2>
         <h2 id='name'>{name}</h2>
         <h2 id='status'>{status}</h2>
         <h2 id='species'>{species}</h2>
         <h2 id='gender'>{gender}</h2>
         <h2 id='origin'>{origin.name}</h2>
         <img className={style.tamanoIgen} src={image} alt='name' />
      </div>
   );
}
