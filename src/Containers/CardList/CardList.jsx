import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../Components/Card/Card'
import "./CardList.scss"

const CardList = ({pokemonArr}) => {
  return (
    <>
      <section className='card-list'>
        {pokemonArr.map(pokemon => (
                <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
                <Card pokemon={pokemon}/>
                </Link>
        ))}
        </section>
    </>
  )
}

export default CardList