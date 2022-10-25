import "./PokemonPage.scss"
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../../Components/Button/Button";


const PokemonPage = ({ pokemonArr }) => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState([]);
  const [text, setText] = useState("Add to Team");
  const navigate = useNavigate();

  const chosenPokemon = pokemonArr.find((pokemon) => { return pokemon.id == id });

  const getPokemonById = async (id) => {
    const response = await fetch(`http://localhost:8080/pokemon/${id}`);
    const data = await response.json();
    setPokemon(data);
    if (chosenPokemon.trainer !== undefined && chosenPokemon.trainer !== null) {
      setText("Remove from Team")
    } else {
      setText("Add to Team")
    }
  };


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

  const extractType1 = () => {
    const types = pokemon.type;
    const type1 = types.split(",").splice(0, 1).join("");
    return String(type1);
  }

  const extractType2 = () => {
    const types = pokemon.type;
    const type2 = types.split(", ").splice(1, 2).join("");
    return String(type2);
  }




  return (
    <div className='pokemon-page'>
      <div className="pokemon-page__left">
        <img className="pokemon-page__image" src={pokemon.hires} alt="" />
        <h2 className="pokemon-page__heading">{pokemon.name}</h2>
        <h3 className="pokemon-page__id">{pokemon.id}</h3>
        <h3 className="pokemon-page__species">{pokemon.species}</h3>
      </div>
      <div className="pokemon-page__right">
      <div className="pokemon-page__types">
          <h3 className={`pokemon-page__types__1 ${extractType1()}`}>{extractType1()}</h3>
          <h3 className={`pokemon-page__types__2 ${extractType2()}`}>{extractType2()}</h3>
        </div>
        <h3 className="pokemon-page__description">{pokemon.description}</h3>
        <div className="pokemon-page__button-div">
          <Button style={"button large green"} buttonText={text} buttonFunction={updatePokemon} />
          <Link to="/pokedex">
            <Button style={"button medium blue"} buttonText={"BACK TO POKEDEX"} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PokemonPage