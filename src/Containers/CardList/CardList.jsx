import React from 'react'
import Card from '../../Components/Card/Card'

const CardList = ({pokemonArr}) => {
  return (
    <div>
        {pokemonArr.map((pokemon) => {
            return (
                <Card key={pokemon.id} name={pokemon.name}/>
            )
        })}
    </div>
  )
}

export default CardList