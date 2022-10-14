import "./Card.scss"

const Card = ({id, images, name, typesArr}) => {

const image = images[0].front_default;
// const types = typesArr.forEach((type) => {
//   types.push(type.type);
// })

  return (
    <div className='card'>
       <img className="card__image" src={image} alt="" />
       <h2 className="card__heading">{name}</h2>
       <h3 className="card__types"></h3>
    </div>
  )
}

export default Card