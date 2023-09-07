import style from './Detail.module.css';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

const Detail = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.data)
        .then((data) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div className={style.container}>
            <h2 className={style.num}>{character?.id}</h2>
            <h1 className={style.estiloLetrasRick}>{character?.name}</h1>
            <div className={style.estiloLetras}>
            <h2>{character?.status}</h2>
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin?.name}</h2>
            </div>
            <img className={style.imagenRick} src={character?.image} alt={character?.name}/>
        </div>
    )
}

export default Detail;