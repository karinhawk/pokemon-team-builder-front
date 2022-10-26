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

  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");

  const getPokemon = async () => {
    let response;
    if(selectedType == ""){
      response = await fetch("http://localhost:8080/pokemon");
    } else {
      response = await fetch(`http://localhost:8080/pokemon?type=${selectedType}`)
    }
    const data = await response.json();
    setPokemon(data);
  };

  console.log(selectedType);

  const getTypes = async () => {
    const response = await fetch("http://localhost:8080/pokemon/types")
    const data = await response.json();
    setTypes(data);
  };

  console.log(pokemon);

  useEffect(()=>{
    getPokemon()
    getTypes()
  },[types])

  const handleSelectType = event => setSelectedType(event.target.value);
 
  return (
    <div className="app">
    <Router>
      <Top />
      <div className='main-content'>
      <Routes>
        <Route path="/pokedex" element={<Pokedex pokemon={pokemon} types={types} handleSelectType={handleSelectType}/>} /> 
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
