import "./PokemonPage.scss"
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../../Components/Button/Button";


const PokemonPage = ({pokemonArr}) => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState([]);
  const [text, setText] = useState("Add");
  const navigate = useNavigate();

  const chosenPokemon = pokemonArr.find((pokemon) => { return pokemon.id == id });

  const getPokemonById = async (id) => {
    const response = await fetch(`http://localhost:8080/pokemon/${id}`);
    const data = await response.json();
    setPokemon(data);
    if(chosenPokemon.trainer !== undefined && chosenPokemon.trainer !== null){
      setText("Remove")
    } else {
      setText("Add")
    }
  };


  console.log(pokemon);
  
  useEffect(() => {
    getPokemonById(id);
  }, []);


  const updatePokemon = async chosenPokemon => {
    const response = await fetch(`http://localhost:8080/pokemon/${id}`, {
    method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(chosenPokemon.innerHTML),
    })
    setPokemon(chosenPokemon);
    console.log(chosenPokemon);
    navigate('/pokedex')
    window.location.reload();
  }

    

  return (
    <div className='pokemon-page'>
        <img className="pokemon-page__image" src={pokemon.hires} alt="" />
        <h2 className="pokemon-page__heading">{pokemon.name}</h2>
        <h3 className="pokemon-page__id">{pokemon.id}</h3>
        <h3 className="pokemon-page__species">{pokemon.species}</h3>
        <h3 className="pokemon-page__types">{pokemon.type}</h3>
        <h3 className="pokemon-page__description">{pokemon.description}</h3>
        <h3>{pokemon.trainer}</h3>
        <div className="pokemon-page__button-div">
        <Button style={"button large green"} buttonText={text} buttonFunction={updatePokemon}/>
        <Link to="/pokedex">
        <Button style={"button medium blue"} buttonText={"BACK TO POKEDEX"} />
        </Link>
        </div>
    </div>
  )
}

export default PokemonPage