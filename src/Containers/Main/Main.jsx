import React from 'react'
import CardList from '../CardList/CardList'
import "./Main.scss"

const Main = ({ pokemonArr }) => {
  
  return (
    <div className='main'>
        <CardList pokemonArr={pokemonArr} />
    </div>
  )
}

export default Main