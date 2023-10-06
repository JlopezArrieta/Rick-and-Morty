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
import Favorites from "./components/Favorites/Favorites";
// import validation from "./components/Form/validation";



function App() {
  const [characters, setCharacters] = useState([]);

  // const location = useLocation()
  const { pathname } = useLocation();
  // console.log(location)

  const [access, setAccess] = useState(false);

  // const EMAIL = 'jalop123@gmail.com';
  // const PASSWORD = 'javier7';

  const navigate = useNavigate();

  const URL = 'http://localhost:3001/rickandmorty/login/';

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const { data } = await axios(URL + `?email=${email}&password=${password}`)
      const { access } = data;
      setAccess(access);
      access && navigate('/home');
    }
    catch (error) {
      console.log(error.message)

    }
  }

  const onSearch = async (id) => {
    if (!id) return alert('Ingrese Un Id Valido');

    if (characters.some(chart => chart.id === Number(id))) {
      return alert('El Id de este personaje ya esta ingresado');
    }

    try {
      const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
        setCharacters((oldChars) => [...oldChars, data]);
    }
    catch (error) {
      alert("No existe un personaje con este ID");
    }
  }

  const onClose = (id) => {
    const charactersFilter = characters.filter((character) => character.id !== Number(id))
    setCharacters(charactersFilter)
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const handleLogOut = () => {
    setAccess(false);
  }

  return (
    <div className="App" >
      {pathname !== '/' && <Nav onSearch={onSearch} handleLogOut={handleLogOut} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
        <Route path='/Favorites' element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
