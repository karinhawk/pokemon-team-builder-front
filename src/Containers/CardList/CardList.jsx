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
                <Card key={pokemon.id} id={pokemon.id} name={pokemon.name} images={pokemon.image} typesArr={pokemon.types}/>
                </div>
        )})
        : null}
        </section>
    </div>
  )
}

export default CardList