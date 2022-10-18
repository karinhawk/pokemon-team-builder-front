import React from 'react'
import Card from '../../Components/Card/Card'
import "./CardList.scss"

const CardList = ({pokemonArr}) => {
  return (
    <div>
      <section className='card-list'>
        {Array.isArray(pokemonArr)
        ? pokemonArr.map(pokemon => {
            return (
              <div>
                <Card key={pokemon.id} pokemonId={pokemon.id} name={pokemon.name} images={pokemon.image} typesArr={pokemon.type}/>
                </div>
        )})
        : null}
        </section>
    </div>
  )
}

export default CardList