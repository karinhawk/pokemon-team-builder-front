import { Link } from "react-router-dom";
import "./Card.scss"

const Card = ({pokemonId, images, name, typesArr}) => {

const image = images.hires;
const pokemonName = name.english;
const pokemonType = typesArr.join(" / ");

  return (
    <div className='card'>
      <Link to={`/pokedex/${pokemonId}`}>
       <img className="card__image" src={image} alt="" />
       </Link>
       <h2 className="card__heading">{pokemonName}</h2>
       <h2 className="card__types">{pokemonType}</h2>
       <h3 className="card__types">{pokemonId}</h3>
    </div>
  )
}

export default Card