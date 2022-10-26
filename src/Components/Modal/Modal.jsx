import Button from "../Button/Button"
import Cross from "../../assets/cross.svg"
import "./Modal.scss"

const Modal = ({ toggleModal, handleDeleteTrainer }) => {

    
    return (
        <div className='modal'>
            <div className="modal__floater">
                <div className="modal__content">
                <p className="modal__content__text">Are you sure you want to delete your trainer? This action can't be undone.</p>
                <div className="modal__content__buttons">
                    <Button buttonFunction={handleDeleteTrainer} style={"button red large"} buttonText={"Delete"}/>
                    <Button buttonFunction={toggleModal} style={"button blue large"} buttonText={"Cancel"}/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Modal