import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.scss"

const Nav = () => {
  return (
    <ul className="nav">
  <li className="nav-item">
  {/* <Link to='/'> */}
    <h2 className="nav-link">Home</h2>
    {/* </Link> */}
  </li>
  <li className="nav-item">
    {/* <Link to='/team'> */}
    <h2 className="nav-link" href="#">Team</h2>
    {/* </Link> */}
  </li>
  <li className="nav-item">
    <h2 className="nav-link" href="#">Pokedex</h2>
  </li>
  <li className="nav-item">
    <h2 className="nav-link" href="#">Trainer</h2>
  </li>
</ul>
  )
}

export default Nav