import "./Pokedex.scss"
import CardList from "../CardList/CardList"
import SearchBar from "../../Components/SearchBar/SearchBar"
import { useState } from "react";

const Pokedex = ({pokemon}) => {


  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState(null);
  const [noPokemon, setNoPokemon] = useState(false);


  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);

    if (searchTerm !== "") {
      const filteredPokemon = pokemon.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(searchTerm);
      })
      setFilter(filteredPokemon);
      if(filteredPokemon.length === 0) {
        setNoPokemon(true)
      } else {
        setNoPokemon(false)
      }
    } else {
      setFilter(pokemon);
    }
  }


  return (
    <div className="pokedex">
      <SearchBar searchTerm={searchTerm} handleInput={handleInput}/>
      {!noPokemon &&  <CardList pokemonArr={searchTerm.length < 1 ? pokemon : filter} />}
      {noPokemon && <div className="pokedex__none">
        <h3 className="pokedex__none__text">Sorry there are no matching pokemon</h3>
        </div>}
    </div>
  )
}

export default Pokedex