import "./Header.scss"
import pokeball from "../../assets/pokeball.png"

const Header = () => {
  return (
    <div className='header'>
      <div className="header__content">
        <img src={pokeball} alt="a picture of a bright red pokeball" className="header__image" />
        <h1 className="header__title">PokéVault</h1>
        <img src={pokeball} alt="a picture of a bright red pokeball" className="header__image" />
      </div>
    </div>
  )
}

export default Header