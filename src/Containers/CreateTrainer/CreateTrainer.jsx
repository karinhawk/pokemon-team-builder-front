import "./CreateTrainer.scss"
import Form from '../../Components/Form/Form'
import { useEffect, useState } from "react";
import Gold from "../../assets/gold.png"
import May from "../../assets/may.png"
import { useNavigate } from "react-router-dom";

const Trainer = () => {

  const [avatar, setAvatar] = useState();
  const [trainer, setTrainer] = useState();
  const [displayForm, setDisplayForm] = useState(true);
  const navigate = useNavigate();

  const defaultFormState = { name: "", avatar: "", favouritePokemon: ""}

  const handleSubmit = async (trainer) => {
    const response = await fetch(`http://localhost:8080/trainer`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(trainer),
    });
    const data = await response.json();
    console.log(data);
    getTrainer();
    navigate("/view-trainer")
  };

  const getTrainer = async () => {
    const res = await fetch("http://localhost:8080/trainer")
    const data = await res.json()
    setTrainer(data)
    if(trainer[3].avatar == 1){
      setAvatar(Gold)
    } else {
      setAvatar(May)
    }
  }

  // if(trainer){
  //   setDisplayForm(true);
  // } else {
  //   setDisplayForm(false)
  // }

  return (
    <div className='trainer'>
      <div>
        <img className="trainer__avatar" src={avatar} alt="" />
      </div>
      {displayForm && <Form  defaultFormState={defaultFormState} handleSubmit={handleSubmit}/>}
    </div>
  )
}

export default Trainer