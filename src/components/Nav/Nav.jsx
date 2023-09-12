import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";

const Nav = ({ onSearch, setAccess }) => {

    const handleLogOut = () => {
        setAccess(false);
    }

    return (
        <nav>
            <SearchBar onSearch={onSearch} />
            <button>
                <NavLink to="/about">About</NavLink>
            </button>
            <button>
                <NavLink to="/home">Home</NavLink>
            </button>
            <button onClick={handleLogOut}>LOG OUT</button> 
            <button>
            <NavLink to="/Favorites">Favorites</NavLink>
            </button>
        </nav>
    )
}

export default Nav;