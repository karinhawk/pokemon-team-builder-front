import "./Pending.scss"
import pokeball from "../../assets/pokeball.png"

const Pending = () => {
  return (
    <div className='pending'>
        <img className='pending__image' src={pokeball}/>
    </div>
  )
}

export default Pending