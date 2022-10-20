import "./Trainer.scss"
import Form from '../../Components/Form/Form'
import { useState } from "react";

const Trainer = () => {


  const [name, setName] = useState();
  const [avatar, setAvatar] = useState(1);


  return (
    <div className='trainer'>
      <div className="trainer__avatar">
        
      </div>
      <Form/>
    </div>
  )
}

export default Trainer