import { ADD_FAV, REMOVE_FAV } from "./action-types";  

const initialState = {
    myFavorites: []
}

const reducer = (state = initialState, action) => {
 switch(action.type) {
    case ADD_FAV:
    return{
        ...state,
        myFavorites: [...state.myFavorites, action.payload]
    }

    case REMOVE_FAV:
        let filteredMyFavorites = state.myFavorites.filter((fav) => fav.id !== Number(action.payload))
        return{
            ...state,
            myFavorites: filteredMyFavorites
        }

    default: 
    return {...state}    
 }
}

export default reducer;