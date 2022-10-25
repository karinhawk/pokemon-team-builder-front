import "./Home.scss"
import React, { useEffect, useState } from 'react'
import trainer1 from "../../assets/gold.png"
import trainer2 from "../../assets/may.png"
import { Link } from "react-router-dom"
import Button from "../../Components/Button/Button"
import Pending from "../../Components/Pending/Pending"

const Home = ({ pokemon }) => {

  const [trainer, setTrainer] = useState([]);
  const [showLink, setShowLink] = useState(true);
  const [favPokemon, setFavPokemon] = useState();
  const [pending, setPending] = useState();

  const url = window.location.pathname.split('/').pop();

  const getTrainer = async () => {
    setPending(true)
    const res = await fetch("http://localhost:8080/trainer")
    const data = await res.json()
    setTrainer(data)
    setPending(false)
    if (trainer.length > 0) {
      setShowLink(false)
    } else if (trainer.length == 0) {
      setShowLink(true)
    }
    showPokemon(pokemon)
  }

  const showPokemon = (pokemon) => {
    const trainerFav = trainer[0].favouritePokemon.toLowerCase();
    const favouritePokemon = pokemon.find((pokemon) => { return pokemon.name.toLowerCase() == trainerFav });
    const pic = favouritePokemon.hires;
    setFavPokemon(pic);
  }

  useEffect(() => {
    setPending(true)
    getTrainer()
    setPending(false)
  }, [url, trainer.length])


  return (
    <div className='home'>
      {pending && <Pending />}
      {!pending && <div className="home__content">
        {showLink && <div className='home__create-trainer'>
          <h2>It looks like you haven't registered as a trainer yet!</h2>
          <Link to='/create-trainer'>
            <h3>Introduce yourself</h3>
          </Link>
        </div>}
        {!showLink &&
          <div className="home__customised">
            <h2 className="home__customised__greeting">Hey {trainer[0].name}!</h2>
            <img className="home__customised__image" src={favPokemon} alt={pokemon.name} />
            <div className="home__customised__buttons">
              <Link to='/team'>
                <Button style={"button large blue"} buttonText={"Check out Team"} />
              </Link>
              <Link to={`/view-trainer/${trainer[0].id}`}>
                <Button style={"button large yellow"} buttonText={"Check the mirror"} />
              </Link>
            </div>
          </div>}
      </div>}
    </div>
  )
}

export default Home