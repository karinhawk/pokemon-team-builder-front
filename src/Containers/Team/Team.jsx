import "./Team.scss"
import React, { useEffect, useState } from 'react'
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";

const Team = () => {

  const [pokemon, setPokemon] = useState([]);
  const [showButtons, setShowButtons] = useState(false);

  const getPokemon = async () => {
    const res = await fetch("http://localhost:8080/pokemon")
    const data = await res.json()
    setPokemon(data)
  }

  let team = pokemon.filter((pokemon) => {
    return !!pokemon.trainer;
  })
  console.log(team);
  team = team.slice(0, 6);


  useEffect(()=>{
    getPokemon()
  },[])

  const toggleButtons = () => {
    setShowButtons(!showButtons)
  }

  return (
    <div className='team'>
    <div className='team__div'>
      {team.map((pokemon) => {
        return (
          <div className="team__pokemon">
            <img className="team__pokemon__image" src={pokemon.sprite} alt={pokemon.name} />
          {showButtons && <div>
            <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
            <Button style={"button green medium"} buttonText={"View"}/>
            </Link>
            </div>}
          </div>
        )
      })}
    </div>
    <Button buttonText={"Edit Team"} style={"button blue medium"} buttonFunction={toggleButtons}/>
    </div>
  )
}

export default Team