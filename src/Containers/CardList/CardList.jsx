import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../Components/Card/Card'
import "./CardList.scss"

const CardList = ({pokemonArr}) => {
  return (
    <>
      <section className='card-list'>
        {pokemonArr.map(pokemon => (
                <Card pokemon={pokemon} id={pokemon.id}/>
        ))}
        </section>
    </>
  )
}

export default CardList