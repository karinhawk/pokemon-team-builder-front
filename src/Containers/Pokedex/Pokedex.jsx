import "./Pokedex.scss"
import CardList from "../CardList/CardList"

const Pokedex = ({ pokemonArr }) => {
  return (
    <div className="pokedex">
      <CardList pokemonArr={pokemonArr} />
    </div>
  )
}

export default Pokedex