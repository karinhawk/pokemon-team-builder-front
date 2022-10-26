import "./Pokedex.scss"
import CardList from "../CardList/CardList"
import SearchBar from "../../Components/SearchBar/SearchBar"
import { useEffect, useState } from "react";
import Pending from "../../Components/Pending/Pending";
import Select from "../../Components/Select/Select";

const Pokedex = ({ pokemon, handleSelectType, types }) => {


  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState(null);
  const [noPokemon, setNoPokemon] = useState(false);
  const [pending, setPending] = useState(true);



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

  useEffect(() => {
    myTimeout()
  }, [])

  
  const pokeLoad = () => {
    setPending(false)
  }

  const myTimeout = () => setTimeout(pokeLoad, 2000);

  return (
    <div className="pokedex">
      {pending && <div className="pokedex__loading"><div className="pokedex__loading__pokeball"><Pending /></div></div>}
      {!pending && <div><SearchBar searchTerm={searchTerm} handleInput={handleInput}/>
      <Select options={types} onChange={handleSelectType} label="types" /></div>}
      {!noPokemon & !pending &&  <CardList pokemonArr={searchTerm.length < 1 ? pokemon : filter} />}
      {noPokemon && <div className="pokedex__none">
        <h3 className="pokedex__none__text">Sorry there are no matching pokemon</h3>
        </div>}
    </div>
  )
}

export default Pokedex