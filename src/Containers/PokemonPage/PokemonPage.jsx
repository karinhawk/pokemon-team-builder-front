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
console.log(chosenPokemon);

  console.log(chosenPokemon.type);

    const type1 = chosenPokemon.type.split(",").splice(0,1).toString();
    const type2 = chosenPokemon.type.split(", ").splice(1,2).toString();


    // if(!chosenPokemon.trainer == undefined || !chosenPokemon.trainer == null){
    //   setText("Remove from Team")
    // } else {
    //   setText("Add to Team")
    // }
  

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
      <div className="pokemon-page__left">
        <img className="pokemon-page__image" src={chosenPokemon.hires} alt="" />
        <h2 className="pokemon-page__heading">{chosenPokemon.name}</h2>
        <h3 className="pokemon-page__id">{chosenPokemon.id}</h3>
        <h3 className="pokemon-page__species">{chosenPokemon.species}</h3>
      </div>
      <div className="pokemon-page__right">
      <div className="pokemon-page__types">
         <h3 className={`pokemon-page__types__1 ${type1} `}>{type1}</h3>
         <h3 className={`pokemon-page__types__2 ${type2}`}>{type2}</h3>         
        </div>
        <h3 className="pokemon-page__description">{chosenPokemon.description}</h3>
        <div className="pokemon-page__button-div">
          <Button style={`button large ${chosenPokemon.trainer ? "red" : "green"}`} buttonText={chosenPokemon.trainer ? "Remove from Team" : "Add to Team"} buttonFunction={updatePokemon} />
          <Link to="/pokedex">
            <Button style={"button medium blue"} buttonText={"BACK TO POKEDEX"} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PokemonPage