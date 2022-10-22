import "./Team.scss"
import React, { useEffect, useState } from 'react'

const Team = () => {

  const [pokemon, setPokemon] = useState([]);

  const getPokemon = async () => {
    const res = await fetch("http://localhost:8080/pokemon")
    const data = await res.json()
    setPokemon(data)
  }

  const team = pokemon.filter((pokemon) => {
    return !!pokemon.trainer;
  })
  console.log(team);


  useEffect(()=>{
    getPokemon()
  },[])


  return (
    <div className='team'>
    <div className='team__div'>
      {team.map((pokemon) => {
        return (
          <div className="team__pokemon">
            <img className="team__pokemon__image" src={pokemon.sprite} alt={pokemon.name} />
          </div>
        )
      })}
    </div>
    </div>
  )
}

export default Team