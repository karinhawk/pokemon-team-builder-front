import "./Nav.scss"
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <ul className="nav">
      <Link to="/">
        <li className="nav-item">
          <h2 className="nav-link">Home</h2>
        </li>
      </Link>
      <Link to="/team">
        <li className="nav-item">
          <h2 className="nav-link">Team</h2>
        </li>
      </Link>
      <Link to="/pokedex">
      <li className="nav-item">
        <h2 className="nav-link">Pokedex</h2>
      </li>
      </Link>
      <Link to="/view-trainer">
      <li className="nav-item">
        <h2 className="nav-link">Trainer</h2>
      </li>
      </Link>
    </ul>
  )
}

export default Nav