import './App.scss';
import { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Top from './Containers/Top/Top';
import Pokedex from "./Containers/Pokedex/Pokedex";
import Team from "./Containers/Team/Team"
import CreateTrainer from "./Containers/CreateTrainer/CreateTrainer"
import Home from "./Containers/Home/Home"
import PokemonPage from './Containers/PokemonPage/PokemonPage';
import ViewTrainer from './Containers/ViewTrainer/ViewTrainer';
import EditTrainer from './Containers/EditTrainer/EditTrainer';




function App() {


//paginate pokedex
//pokemon types colours
//make pretty!
//hover on card to reveal name?
//make header fancy


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
        <Route path="/team" element={<Team pokemonArr={pokemon}/>}/>
        <Route path="/create-trainer" element={<CreateTrainer />}/>
        <Route path="/view-trainer/:id" element={<ViewTrainer pokemon={pokemon} />}/>
        <Route path="/edit-trainer/:id" element={<EditTrainer />} />
        <Route path="/" element={<Home pokemon={pokemon} />}/>
      </Routes> 
      </div> 
    </Router>
    </div>
  );
}


export default App;
