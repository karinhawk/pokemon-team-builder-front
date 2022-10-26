import { useState } from "react"
import "./Card.scss"
import pokeball from "../../assets/pokeball.png"
import { Link } from "react-router-dom"

const Card = ({pokemon, id}) => {

  return (
    <div className='card'>
      <Link to={`/pokemon/${id}`}>
       <img className="card__image" src={pokemon.hires} alt={pokemon.name} />
       <div className="card__pokediv">
       {pokemon.trainer && <img className="card__pokeball" src={pokeball} alt="" />}
       </div>
       </Link>
    </div>
  )
}

export default Card