import { useEffect, useState } from "react";
import "./ViewTrainer.scss"
import Gold from "../../assets/gold.png"
import May from "../../assets/may.png"
import Button from "../../Components/Button/Button";
import { Link, useNavigate, useParams } from "react-router-dom";

const ViewTrainer = () => {

  const { id } = useParams();
  const navigate = useNavigate
  const [avatar, setAvatar] = useState();
  const [trainer, setTrainer] = useState([]);

  const url = window.location.pathname.split('/').pop();

  const getTrainer = async () => {
    const res = await fetch("http://localhost:8080/trainer")
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
    getTrainer()
  }, [url, trainer.length])

  const handleDeleteGreeting = async (id) => {
    await fetch(`http://localhost:8080/greeting/${id}`,
    { method: 'DELETE'})
    navigate('/greetings')
  };



  return (
    <div className="view-trainer">
      <img className="view-trainer__avatar" src={avatar} alt="A peppy looking pokemon trainer" />
      <div className="view-trainer__main">
      <p>{trainer.name}</p>
      <div className="view-trainer__buttons">
      <Link to={"/edit-trainer"}>
      <Button style={"blue medium"} buttonText={"Edit trainer"} />
      </Link>
      <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
      </div>
      </div>
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Modal Header</h4>
      </div>
      <div class="modal-body">
        <p>Some text in the modal.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
    </div>
  )
}

export default ViewTrainer