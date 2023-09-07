import SearchBar from "../SearchBar/SearchBar";
import { Link, NavLink } from "react-router-dom";

const Nav = ({ onSearch }) => {
    return (
        <nav>
            <SearchBar onSearch={onSearch} />
            <button>
                <NavLink to="/about">About</NavLink>
            </button>
            <button>
                <NavLink to="/home">Home</NavLink>
            </button>
        </nav>
    )
}

export default Nav;