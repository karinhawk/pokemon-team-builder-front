import "./Home.scss"
import React, { useEffect, useState } from 'react'
import trainer1 from "../../assets/gold.png"
import trainer2 from "../../assets/may.png"
import { Link } from "react-router-dom"
import Button from "../../Components/Button/Button"

const Home = () => {

  const [trainer, setTrainer] = useState([]);
  const [showLink, setShowLink] = useState(true);

  const url = window.location.pathname.split('/').pop();

  const getTrainer = async () => {
    const res = await fetch("http://localhost:8080/trainer")
    const data = await res.json()
    setTrainer(data)
    console.log(trainer);
    if (trainer.length > 0) {
      console.log("something");
      setShowLink(false)
    } else if (trainer.length == 0) {
      console.log("nothing");
      setShowLink(true)
    }
  }

  useEffect(() => {
    getTrainer()
  }, [url, trainer.length])


  return (
    <div className='home'>
      {showLink && <div className='home__create-trainer'>
        <h2>It looks like you haven't registered as a trainer yet!</h2>
        <Link to='/create-trainer'>
          <h3>Introduce yourself</h3>
        </Link>
      </div>}
      {!showLink &&
      <div className="home__customised">
        <h2 className="home__customised__greeting">Hey {trainer[0].name}!</h2>
        <div className="home__customised__buttons">
          <Link to='/team'>
          <Button style={"large blue"} buttonText={"Check out Team"}/>
          </Link>
          <Link to='/view-trainer'>
          <Button style={"large yellow"} buttonText={"Check the mirror"}/>
          </Link>
        </div>
      </div>}
    </div>
  )
}

export default Home