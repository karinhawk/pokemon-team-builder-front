import { useEffect, useState } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import './App.scss';
import Main from './Containers/Main/Main';
import Top from './Containers/Top/Top';
import Pokedex from "./Containers/Pokedex/Pokedex";
import Team from "./Containers/Team/Team"
import Trainer from "./Containers/Trainer/Trainer"




function App() {

  const [pokemon, setPokemon] = useState([])


  useEffect(()=>{
    getPokemon()
  },[])
  
  const showPokemon = () => {
    console.log(pokemon)
  }
  
  const getPokemon = async () =>{
    const newPokemon = [...pokemon]
    
    for (let i = 1; i < 1000; i++) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      const response = await res.json()
      
      const pokemonObj = {
        id: response.id,
        name: response.name,
        image: [response.sprites],
        types: [response.types]
      }
      
      newPokemon.push(pokemonObj)
      setPokemon(newPokemon)
    }
    
  }


  return (
    // <Router>
    <div className="App">
      <Top />
      <button onClick={showPokemon}>Show Pokemon</button>
      <div className='main-content'>
        <Main pokemonArr={pokemon}/>
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
