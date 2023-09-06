import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useState } from "react";
import axios from "axios";


function App() {
const [characters, setCharacters] = useState([]);

const onSearch = (id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
  .then((response) => response.data)
  .then((data) => {
     if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
     } else {
        window.alert('¡Ingrese un ID!');
     }
  })
  .catch((error) => alert("No existe un personaje con este ID"));
}


const onClose =  (id) => {
  const charactersFilter = characters.filter((character) => character.id !== Number(id))
  setCharacters(charactersFilter)
}

  return (
    <div className="App" >
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
