// 2 - links com react router
import "./NavBar.css"

// import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
    {/* <Link to="/">Home</Link>
    <Link to="/about">About</Link> */}
    {/* <NavLink to="/" className={({isActive}) => (isActive ? 'esta-ativo' : 'nao-ativo')}>Home</NavLink> */}
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">Sobre</NavLink>
</nav>
  )
}

export default NavBar;