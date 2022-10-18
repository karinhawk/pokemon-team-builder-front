import { Link, useParams } from "react-router-dom";
import Button from "../../Components/Button/Button";
import "./PokemonPage.scss"

const PokemonPage = ({pokemonArr}) => {

    const { pokemonId } = useParams();
    console.log("hi");

    const chosenPokemon = pokemonArr.find((pokemon) => { return pokemon.id == pokemonId });


    const name = ((chosenPokemon || {}).name|| {}).english;
    const image = ((chosenPokemon || {}).image || {}).hires;
    

  return (
    <div className='pokemon-page'>
        <img className="pokemon-page__image" src={image} alt="" />
        <h2 className="pokemon-page__heading">{name}{" "}</h2>
        <h3 className="pokemon-page__id">{chosenPokemon.id}</h3>
        <h3 className="pokemon-page__species">{chosenPokemon.species}</h3>
        <h3 className="pokemon-page__types">{chosenPokemon.type.join(" / ")}</h3>
        <h3 className="pokemon-page__description">{chosenPokemon.description}</h3>
        <div className="pokemon-page__button-div">
        <Button style={"button large green"} buttonText={"ADD TO TEAM"}/>
        <Link to="/pokedex">
        <Button style={"button medium blue"} buttonText={"BACK TO POKEDEX"} />
        </Link>
        </div>
    </div>
  )
}

export default PokemonPage