import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card({ id, name, species, gender, image, onClose, addFav, removeFav, myFavorites }) {
//addFav, removeFav, myFavorites estan van en destructuracion por que son recibidas por props, por lo tanto al destructurar se agregan.
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav({ id, name, species, gender, image, onClose });
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.container}>
         {
            isFav ? 
            ( 
            <button className={style.corazonBotton} onClick={handleFavorite}>❤️</button>
            ) : (
            <button className={style.corazonBotton} onClick={handleFavorite}>🤍</button>
            )
         }
{/* Otra forma de hacerlo */}
{/* <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button> */}


         <button onClick={() => onClose(id)} className={style.closeBotton}>X</button>
         <h2 className={style.num} id='id'>{id}</h2>
         <Link to={`/detail/${id}`}><h2>{name}</h2></Link>
         <h2 id='species'>{species}</h2>
         <h2 id='gender'>{gender}</h2>
         <img className={style.tamanoIgen} src={image} alt='name' />
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },

      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);




