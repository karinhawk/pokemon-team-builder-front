import "./Card.scss"

const Card = ({id, image, name, types}) => {
  return (
    <div className='card'>
       <img className="card__image" src={image} alt="" />
       <h2 className="card__heading">{name}</h2>
       <h3 className="card__types">{types}</h3>
    </div>
  )
}

export default Card