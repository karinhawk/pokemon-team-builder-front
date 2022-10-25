import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Gold from "../../assets/gold.png"
import May from "../../assets/may.png"
import Form from "../../Components/Form/Form";
import "./EditTrainer.scss"

const EditTrainer = () => {

    const { id } = useParams();
    const [trainer, setTrainer] = useState([]);
    const [avatar, setAvatar] = useState();
    const navigate = useNavigate();

    const url = window.location.pathname.split('/').pop();

    const getTrainerById = async id => {
        const res = await fetch(`http://localhost:8080/trainer/${id}`)
        const data = await res.json()
        setTrainer(data)
        console.log(trainer);
      }


      const handleUpdateTrainer = async trainer => {
        const response = await fetch(`http://localhost:8080/trainer/${id}`, {
             method: "PUT",
             headers: {
               Accept: "application/json",
               "Content-Type": "application/json",
             },
             body: JSON.stringify(trainer),
           });
           console.log(trainer);
           setTrainer(trainer)
           navigate(`/view-trainer/${id}`)
          window.location.reload();
         };

      useEffect(() => {
        getTrainerById(id)
      }, [id])

      // const handleChangeAvatar = e => {
      //   if(e.target.value == 1){
      //     setAvatar(May)
      //     console.log(e.target.value);
      //   } else {
      //     setAvatar(Gold)
      //     console.log(e.target.value);
      //   }
      // }
      
  return (
    <div className="edit">
      {/* <img className="edit__avatar" src={avatar} alt="A peppy looking pokemon trainer" /> */}
      <div className="edit__form">
        <Form defaultFormState={trainer} handleSubmit={handleUpdateTrainer} formFunction={"Edit"} />
      </div>
    </div>
  )
}

export default EditTrainer
