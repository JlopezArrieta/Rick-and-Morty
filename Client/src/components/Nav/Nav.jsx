import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";

const Nav = ({ onSearch, handleLogOut }) => {

  return (
    <nav>
      <SearchBar onSearch={onSearch} />
      <button>
        <NavLink to="/about">About</NavLink>
      </button>
      <button>
        <NavLink to="/home">Home</NavLink>
      </button>
      <button onClick={handleLogOut}>LogOut</button>
      <button>
        <NavLink to="/Favorites">Favorites</NavLink>
      </button>
    </nav>
  )
}

export default Nav;