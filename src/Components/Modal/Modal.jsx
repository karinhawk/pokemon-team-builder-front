import Button from "../Button/Button"
import Cross from "../../assets/cross.svg"
import "./Modal.scss"

const Modal = ({ toggleModal, handleDeleteTrainer }) => {

    
    return (
        <div className='modal'>
            <div className="modal__content">
                <p>Are you sure you want to delete your trainer? This action can't be undone.</p>
                <div className="modal__content__buttons">
                    <Button buttonFunction={handleDeleteTrainer} style={"red large"} buttonText={"Delete"}/>
                    <Button buttonFunction={toggleModal} style={"blue large"} buttonText={"Cancel"}/>
                </div>
            </div>
        </div>
    )
}

export default Modal