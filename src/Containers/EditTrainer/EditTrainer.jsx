import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "../../Components/Form/Form";
import "./EditTrainer.scss"

const EditTrainer = () => {

    const { id } = useParams();
    const [trainer, setTrainer] = useState([]);

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
         };

      useEffect(() => {
        getTrainerById(id)
      }, [id])

      
  return (
    <div className="edit">
        <Form defaultFormState={trainer} handleSubmit={handleUpdateTrainer} formFunction={"Edit"} />
    </div>
  )
}

export default EditTrainer
