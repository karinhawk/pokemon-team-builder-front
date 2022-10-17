import "./Card.scss"

const Card = ({id, images, name, typesArr}) => {

const image = images[0].front_default;
const type1 = typesArr[0];



  return (
    <div className='card'>
       <img className="card__image" src={image} alt="" />
       <h2 className="card__heading">{name}</h2>
       <h3 className="card__types">{id}</h3>
    </div>
  )
}

export default Card