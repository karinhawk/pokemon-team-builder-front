import './App.scss';
import { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Top from './Containers/Top/Top';
import Pokedex from "./Containers/Pokedex/Pokedex";
import Team from "./Containers/Team/Team"
import Trainer from "./Containers/Trainer/Trainer"
import Home from "./Containers/Home/Home"
import PokemonPage from './Containers/PokemonPage/PokemonPage';




function App() {

  const [pokemon, setPokemon] = useState([]);

  const getPokemon = async () => {
    const res = await fetch("http://localhost:8080/pokemon")
    const data = await res.json()
    setPokemon(data)
  }

  console.log(pokemon);

  useEffect(()=>{
    getPokemon()
  },[])
 
  return (
    <div className="app">
    <Router>
      <Top />
      <div className='main-content'>
      <Routes>
        <Route path="/pokedex" element={<Pokedex pokemon={pokemon}/>} /> 
        <Route path="/pokemon/:id" element={<PokemonPage pokemonArr={pokemon}/>} />
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
