import "./CreateTrainer.scss"
import Form from '../../Components/Form/Form'
import { useEffect, useState } from "react";
import Gold from "../../assets/gold.png"
import May from "../../assets/may.png"
import { useNavigate } from "react-router-dom";

const Trainer = () => {

  const [avatar, setAvatar] = useState();
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
    navigate("/")
    window.location.reload();
  };


  return (
    <div className='trainer'>
      <div>
        <img className="trainer__avatar" src={avatar} alt="" />
      </div>
      <Form  defaultFormState={defaultFormState} handleSubmit={handleSubmit} formFunction={"Create"}/>
    </div>
  )
}

export default Trainer