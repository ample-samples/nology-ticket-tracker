import "./Nav.scss"
import { Link } from "react-router-dom"
const Nav = () => {
  return (
      <nav className="nav">
        <p className="nav__title">Ticket Tracker</p>
        <div className="nav__separator"></div>
        <Link className="nav__link" to={"/"}>Home</Link>
        <Link className="nav__link" to={"/tickets"}>Tickets</Link>
      </nav>
  )
}

export default Nav
