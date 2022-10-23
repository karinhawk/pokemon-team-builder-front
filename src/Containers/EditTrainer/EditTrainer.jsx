import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "../../Components/Form/Form";
import "./EditTrainer.scss"

const EditTrainer = () => {

    const { id } = useParams();
    const [trainer, setTrainer] = useState([]);

    const url = window.location.pathname.split('/').pop();

    const getTrainer = async () => {
        const res = await fetch("http://localhost:8080/trainer")
        const data = await res.json()
        setTrainer(data)
        console.log(trainer);
      }

      const handleUpdateTrainer = async trainer => {
        const response = await fetch(`http://localhost:8080/trainer/${trainer.id}`, {
             method: "PUT",
             headers: {
               Accept: "application/json",
               "Content-Type": "application/json",
             },
             body: JSON.stringify(trainer),
           });
           console.log(trainer);
           setTrainer(trainer)
         };

      useEffect(() => {
        getTrainer()
        handleUpdateTrainer(id)
      }, [url, trainer.length, id])

  return (
    <div className="edit">
        <Form defaultFormState={trainer} handleSubmit={handleUpdateTrainer} formFunction={"Edit"}/>
    </div>
  )
}

export default EditTrainer
