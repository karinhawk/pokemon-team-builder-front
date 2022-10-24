import { useState } from "react"
import "./Card.scss"
import pokeball from "../../assets/pokeball.png"

const Card = ({pokemon}) => {

  return (
    <div className='card'>
       <img className="card__image" src={pokemon.hires} alt={pokemon.name} />
       <div className="card__pokediv">
       {pokemon.trainer && <img className="card__pokeball" src={pokeball} alt="" />}
       </div>
    </div>
  )
}

export default Card