import style from "./SearchBar.module.css";
import { useState } from 'react';


export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }

   const search = () => {
      onSearch(id)
      setId('')
   }

   let numRandom = Math.floor(Math.random() * 826) + 1;

   const random = () => {
      onSearch(numRandom)
   }


   return (
      <div className={style.buscador}>
         <input type='search' onChange={handleChange} value={id} />
         <button onClick={search}>Agregar</button>
         <button onClick={random}>Aleatorio</button>
         {/* ()=> {onSearch(id), setId('')}  donde esta search se puede poner esta opcion*/}
      </div>
   );
}
