import Card from "../Card/Card";
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";
import style from "./Favorites.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";


// const Favorites = ({ myFavorites }) => {
export default function Favorites () {
  const dispatch = useDispatch();

  const myFavorites = useSelector(state => state.myFavorites);

  
  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true)
  }

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value))
  }


  return (
    <div className={style.cartaHorizontal}>
      <div>
      <select onChange={handleOrder}>
        <option className={style.estiloAscendente} value="A">Ascendente</option>
        <option className={style.estiloDescendente} value="D">Descendente</option>
      </select>

      <select onChange={handleFilter}>
        <option className={style.estiloMale} value="Male">Male</option>
        <option className={style.estiloFemale} value="Female">Female</option>
        <option className={style.estiloGenderless} value="Genderless">Genderless</option>
        <option className={style.estilounknown} value="unknown">unknown</option>
        <option className={style.estiloallcharactersFav} value="allcharactersFav">All charactersFav</option>
      </select>
      </div>
      <div className={style.card}>
      {
        myFavorites?.map(fav => {
          return (
            <Card
              key={fav.id}
              id={fav.id}
              name={fav.name}
              species={fav.species}
              gender={fav.gender}
              origin={fav.origin}//
              status={fav.status}//
              image={fav.image}
              onClose={fav.onClose}
             />
          )
        })
      }
      </div>
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     myFavorites: state.myFavorites
//   }
// }

// export default connect(
//   mapStateToProps, null
// )(Favorites);



