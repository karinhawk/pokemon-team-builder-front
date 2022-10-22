import { useEffect, useState } from "react";
import "./ViewTrainer.scss"
import Gold from "../../assets/gold.png"
import May from "../../assets/may.png"

const ViewTrainer = () => {

    const [avatar, setAvatar] = useState();
    const [trainer, setTrainer] = useState();

    const getTrainer = async () => {
        const res = await fetch("http://localhost:8080/trainer")
        const data = await res.json()
        setTrainer(data)
        console.log(trainer);
        if(trainer.avatar == 1){
          setAvatar(Gold)
        } else {
          setAvatar(May)
        }
      }

      useEffect(()=>{
        getTrainer()
      },[])


  return (
    <div className="view-trainer">
        {/* <p>{trainer.name}</p> */}
        <img className="view-trainer__avatar" src={avatar} alt="" />
    </div>
  )
}

export default ViewTrainer