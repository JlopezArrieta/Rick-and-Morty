import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form";
import validation from "./components/Form/validation";



function App() {
  const [characters, setCharacters] = useState([]);

  // const location = useLocation()
  const {pathname} = useLocation()
  // console.log(location)

  const [access, setAccess] = useState(false);
  const EMAIL = 'jalop123@gmail.com';
  const PASSWORD = 'xamplox7';
  const navigate = useNavigate();

  //userData por destructuri = {email, password}
  function login({email, password}) {
    if (email === EMAIL && password === PASSWORD) {
       setAccess(true);
       navigate('/home');
    }
    else alert('Usuario o Contraseña Incorrecta')
 }

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

  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  return (
    <div className="App" >
      {pathname !== '/' && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />}/>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
