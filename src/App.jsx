import { useEffect, useState } from 'react';
import './App.scss';
import Card from './Components/Card/Card';
import Main from './Containers/Main/Main';

function App() {

  const [pokemon, setPokemon] = useState([]);

  const loadPokemonData = async (id) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/` + id);
      const data = await response.json();
      setPokemon(data); 
}

const fetchAllPokemon = async () => {
  for (let i = 0; i < 5; i++){
    let id = i + 1;
    loadPokemonData(id)
  }
}

console.log(pokemon);



  useEffect(() => {
    fetchAllPokemon()
  }, []);



  return (
    <div className="App">
      <Main pokemonArr={pokemon}/>
     
    </div>
  );
}


export default App;
