import "./Trainer.scss"
import Form from '../../Components/Form/Form'
import { useState } from "react";

const Trainer = () => {


  const [name, setName] = useState();
  const [avatar, setAvatar] = useState(1);

  const defaultFormState = { name: "", avatar: "", favouritePokemon: ""};

  return (
    <div className='trainer'>
      <div className="trainer__avatar">
      </div>
      <Form  defaultFormState={defaultFormState}/>
    </div>
  )
}

export default Trainer