import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";


function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {

    if (!id || isNaN(id)) return alert('Ingrese Un Id Valido');
    if (characters.some(chart => chart.id === Number(id))) return alert('El Id de este personaje ya esta ingresado');

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


  const onClose = (id) => {
    const charactersFilter = characters.filter((character) => character.id !== Number(id))
    setCharacters(charactersFilter)
  }

  return (
    <div className="App" >
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
