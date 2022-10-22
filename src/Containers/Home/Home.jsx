import "./Home.scss"
import React from 'react'
import trainer1 from "../../assets/gold.png"
import trainer2 from "../../assets/may.png"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className='home'>
      <div className='home__create-trainer'>
        <h2>It looks like you haven't registered as a trainer yet!</h2>
        <Link to='/create-trainer'>
        <h3>Introduce yourself</h3>
        </Link>
      </div>
      <div>
        <img src={trainer1} alt="" />
        <img src={trainer2} alt="" />
      </div>
    </div>
  )
}

export default Home