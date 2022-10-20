import "./Card.scss"

const Card = ({pokemon}) => {

  return (
    <div className='card'>
      <div className="hide"><h2 className="card__name">{pokemon.name}</h2></div>
       <img className="card__image" src={pokemon.hires} alt={pokemon.name} />
    </div>
  )
}

export default Card