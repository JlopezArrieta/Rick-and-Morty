import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
  myFavorites: [],
  allCharacters: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload]
      }

    case REMOVE_FAV:
      let filteredMyFavorites = state.myFavorites.filter((fav) => fav.id !== Number(action.payload))
      return {
        ...state,
        myFavorites: filteredMyFavorites
      }

    case FILTER:
      const allCharactersFiltered = state.allCharacters.filter((character) =>
        (character.gender === action.payload))
      return {
        ...state,
        myFavorites:
          action.payload === 'allcharactersFav' ?
            [...state.allCharacters] : allCharactersFiltered
      }

    case ORDER:
      const copyAllCharacters = [...state.allCharacters]
      return {
        ...state,
        myFavorites:
          action.payload === 'A' ?
            copyAllCharacters.sort((a, b) => a.id - b.id) :
            copyAllCharacters.sort((a, b) => b.id - a.id)
      }

    default:
      return { ...state }
  }
}

export default reducer;