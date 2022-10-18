import './App.scss';
import { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Top from './Containers/Top/Top';
import Pokedex from "./Containers/Pokedex/Pokedex";
import Team from "./Containers/Team/Team"
import Trainer from "./Containers/Trainer/Trainer"
import Home from "./Containers/Home/Home"




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
        types: response.types
      }
      
      newPokemon.push(pokemonObj)
      setPokemon(newPokemon)
    }
    
  }


  return (
    <div className="App">
    <Router>
      <Top />
      <button onClick={showPokemon}>Show Pokemon</button>
      <div className='main-content'>
        {/* <Pokedex pokemonArr={pokemon}/> */}
      <Routes>
        <Route path="/pokedex" element={<Pokedex pokemonArr={pokemon} />} /> 
        <Route path="/team" element={<Team/>}/>
        <Route path="/trainer" element={<Trainer />}/>
        <Route path="/" element={<Home />}/>
      </Routes> 
      </div> 
    </Router>
    </div>
  );
}


export default App;
