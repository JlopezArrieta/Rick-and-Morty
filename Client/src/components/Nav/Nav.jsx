import SearchBar from "../SearchBar/SearchBar";
import { Link, NavLink } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = ({ onSearch, handleLogOut }) => {

  return (
    <nav>
      <SearchBar onSearch={onSearch} />
      <button>
        <NavLink className={style.estiloAbout} to="/about">About</NavLink>
      </button>
      <button>
        <NavLink className={style.estiloHome} to="/home">Home</NavLink>
      </button>
      <button>
        <Link className={style.estiloLogOut} onClick={handleLogOut}>LogOut</Link>
      </button>
      <button>
        <NavLink className={style.estiloFavorites} to="/Favorites">Favorites</NavLink>
      </button>
    </nav>
  )
}

export default Nav;