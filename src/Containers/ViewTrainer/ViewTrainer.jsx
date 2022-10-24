import { useEffect, useState } from "react";
import "./ViewTrainer.scss"
import Gold from "../../assets/gold.png"
import May from "../../assets/may.png"
import Button from "../../Components/Button/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import Modal from "../../Components/Modal/Modal";

const ViewTrainer = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState();
  const [trainer, setTrainer] = useState([]);
  const [showModal, setShowModal] = useState(false)

  const url = window.location.pathname.split('/').pop();


  const getTrainerById = async (id) => {
    const res = await fetch(`http://localhost:8080/trainer/${id}`)
    const data = await res.json()
    setTrainer(data)
    console.log(trainer);
    if (trainer.avatar == 1) {
      setAvatar(Gold)
    } else {
      setAvatar(May)
    }
  }

  useEffect(() => {
    getTrainerById(id)
  }, [id, url])

  const handleDeleteTrainer = async (id) => {
    await fetch(`http://localhost:8080/trainer/${trainer.id}`,{
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  navigate("/");
  window.location.reload();
}

  const toggleModal = () => {
    console.log("hi");
    setShowModal(!showModal)
  }



  return (
    <div className="view-trainer">
      <img className="view-trainer__avatar" src={avatar} alt="A peppy looking pokemon trainer" />
      <div className="view-trainer__main">
      {showModal && <Modal toggleModal={toggleModal} handleDeleteTrainer={handleDeleteTrainer}/>}
        <p>{trainer.name}</p>
        <div className="view-trainer__buttons">
          <Link to={`/edit-trainer/${trainer.id}`}>
            <Button style={"blue medium"} buttonText={"Edit trainer"} />
          </Link>
        <Button buttonFunction={toggleModal} style={"red medium"} buttonText={"Delete Trainer"}/>
        </div>
      </div>
      </div>
  )
}

export default ViewTrainer