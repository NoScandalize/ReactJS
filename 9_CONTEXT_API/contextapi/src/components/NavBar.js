import "./NavBar.css";

import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/about'>About</NavLink>
    </nav>
  )
}

export default NavBar;