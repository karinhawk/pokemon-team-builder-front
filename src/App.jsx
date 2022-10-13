import { useEffect, useState } from 'react';
import './App.scss';

function App() {

  const [pokemon, setPokemon] = useState([]);
  
  const loadPokemonData = async () => {
    
    for (let i = 0; i < 5; i++){
      const id = i + 1;
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/` + id);
      const data = await response.json();
      setPokemon(data);
  }  
}
console.log(pokemon);

  useEffect(() => {
    loadPokemonData()
  }, []);

  const mappedPokemon = pokemon.map((pokemon) => {
    return (
      <>
      <p>{pokemon.name}</p>
      <p>{pokemon.id}</p>
      </>
    );
  })


  return (
    <div className="App">
      {mappedPokemon}
    </div>
  );
}


export default App;
