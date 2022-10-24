import { useEffect, useState } from "react";
import "./ViewTrainer.scss"
import Gold from "../../assets/gold.png"
import May from "../../assets/may.png"
import Button from "../../Components/Button/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import Modal from "../../Components/Modal/Modal";

const ViewTrainer = ({pokemon}) => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [trainer, setTrainer] = useState([]);
  const [showModal, setShowModal] = useState(false)
  const [favPokemon, setFavPokemon] = useState();

  const url = window.location.pathname.split('/').pop();

  useEffect(() => {
    getTrainerById(id)
  }, [id, trainer.favouritePokemon])

  const getTrainerById = async (id) => {
    const res = await fetch(`http://localhost:8080/trainer/${id}`)
    const data = await res.json()
    setTrainer(data)
    console.log(trainer);
    showPokemon(pokemon)
  }


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

  const showPokemon = (pokemon) => {
    const trainerFav = trainer.favouritePokemon.toLowerCase();
    const favouritePokemon = pokemon.find((pokemon) => { return pokemon.name.toLowerCase() == trainerFav });
    const pic = favouritePokemon.hires;
    setFavPokemon(pic);
}


  return (
    <div className="view-trainer">
      <div className="view-trainer__images">
      <img className="view-trainer__avatar" src={trainer.avatar == 1 ? May : Gold} alt="A peppy looking pokemon trainer" />
      <img className="view-trainer__pokemon" src={favPokemon} alt={pokemon.name}/>
      </div>
      <div className="view-trainer__text">
      {showModal && <Modal toggleModal={toggleModal} handleDeleteTrainer={handleDeleteTrainer}/>}
        <h2 className="view-trainer__intro">It's {trainer.name} and {trainer.favouritePokemon}!</h2>
        <div className="view-trainer__buttons">
          <Link to={`/edit-trainer/${trainer.id}`}>
            <Button style={"button blue large"} buttonText={"Edit trainer"} />
          </Link>
        <Button buttonFunction={toggleModal} style={"button red large"} buttonText={"Delete Trainer"}/>
        </div>
      </div>
      </div>
  )
}

export default ViewTrainer