import React from 'react'
import CardList from '../CardList/CardList'

const Main = ({pokemonArr}) => {
  return (
    <div>
        <CardList pokemonArr={pokemonArr} />
    </div>
  )
}

export default Main