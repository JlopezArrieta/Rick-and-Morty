import style from "./SearchBar.module.css";
import {useState} from 'react';


export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }

   const search = () => {
      onSearch(id)
      setId('')
   }

   return (
      <div className={style.buscador}>
         <input type='search' onChange={handleChange} value={id} />
         <button onClick={search}>Agregar</button>
         {/* ()=> {onSearch(id), setId('')}  donde esta search se puede poner esta opcion*/}
      </div>
   );
}
