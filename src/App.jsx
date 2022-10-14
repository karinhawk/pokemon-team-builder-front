import { useEffect, useState } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import './App.scss';
import Main from './Containers/Main/Main';
import Top from './Containers/Top/Top';
import Pokedex from "./Containers/Pokedex/Pokedex";
import Team from "./Containers/Team/Team"
import Trainer from "./Containers/Trainer/Trainer"




function App() {

  const [pokemon, setPokemon] = useState([]);
  let pokemonArr = [];

  const loadPokemonData = async (id) => {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
      let data = await response.json();
      setPokemon(data); 
      for (let i = 0; i < 5; i++){
        let id = i + 1;
        response = await fetch(`https://pokeapi.co/api/v2/pokemon/` + id)
        data = await response.json();
        pokemonArr.push(data);
      } 
}





  useEffect(() => {
    loadPokemonData()
  }, []);

  console.log(pokemonArr);



  return (
    // <Router>
    <div className="App">
      <Top />
      <div className='main-content'>
        <Main pokemonArr={pokemonArr}/>
      {/* <Routes>
        <Route path='/' element={<Main />}>
        <Route path='/pokedex' element={<Pokedex />} /> 
        <Route path='/team' element={<Team/>}/>
        <Route path='/trainer' element={<Trainer />}/>
      </Route>
      </Routes>   */}
      </div> 
    </div>
    // </Router>
  );
}


export default App;
