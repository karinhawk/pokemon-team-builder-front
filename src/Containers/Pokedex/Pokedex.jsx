import "./Pokedex.scss"
import CardList from "../CardList/CardList"
import SearchBar from "../../Components/SearchBar/SearchBar"
import { useState } from "react";

const Pokedex = ({pokemon}) => {


  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState(null);
  const [pending, setPending] = useState(true);


  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
    console.log(searchTerm);

    if (searchTerm !== "") {
      const filteredPokemon = pokemon.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(searchTerm);
      })
      setFilter(filteredPokemon);
    } else {
      setFilter(pokemon);
    }
  }


  return (
    <div className="pokedex">
      <SearchBar searchTerm={searchTerm} handleInput={handleInput}/>
      <CardList pokemonArr={searchTerm.length < 1 ? pokemon : filter} />
    </div>
  )
}

export default Pokedex