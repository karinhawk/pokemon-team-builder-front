import "./Nav.scss"
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

  const url = window.location.pathname.split('/').pop();

  const [trainer, setTrainer] = useState([]);
  const [showLink, setShowLink] = useState(false);

  const getTrainer = async () => {
    const res = await fetch("http://localhost:8080/trainer")
    const data = await res.json()
    setTrainer(data)
    console.log(trainer);
    if (trainer.length > 0) {
      setShowLink(true)
    } else if (trainer.length == 0) {
      setShowLink(false)
    }
  }

  useEffect(() => {
    getTrainer()
  }, [url, trainer.length])


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
      {showLink && <Link to="/view-trainer">
      <li className="nav-item">
        <h2 className="nav-link">Trainer</h2>
      </li>
      </Link>}
    </ul>
  )
}

export default Nav