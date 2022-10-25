import { useState } from "react"
import Button from "../Button/Button"
import "./Form.scss"

const Form = ({ defaultFormState, handleSubmit, formFunction, handleChangeAvatar }) => {

    const [trainer, setTrainer] = useState(defaultFormState);

    const handleValidation = event => {
        event.preventDefault();

        if (Object.values(trainer).some(value => !value)) {
            alert("you haven't filled out some of the boxes!");
            return;
        } else {
        handleSubmit(trainer);
        }
    };

    return (
        <form action="submit" onSubmit={handleValidation} className='form'>
            <h2 className="form__heading">{formFunction} Your Trainer!</h2>
            <div className="form__label-input">
                <label className="form__label" htmlFor="name-input">Name</label>
                <input
                    className="form__input"
                    type="text"
                    name="name-input"
                    value={trainer.name}
                    onInput={event => setTrainer({ ...trainer, name: event.target.value })}
                />
            </div>
            <div className="form__label-input">
                <label className="form__label" htmlFor="select-input">Choose a look</label>
                <select className="form__select" name="select-input" onClick={event => setTrainer({ ...trainer, avatar: event.target.value })} onChange={handleChangeAvatar}>
                    <option disabled selected>select your trainer avatar!
                    </option>
                    <option value={1}>Girl
                    </option>
                    <option value={2}>Boy
                    </option>
                </select>
            </div>
            <div className="form__label-input">
                <label className="form__label" htmlFor="name-input">Enter your favourite pokemon</label>
                <input
                    className="form__input"
                    type="text"
                    name="name-input"
                    value={trainer.favouritePokemon}
                    onInput={event => setTrainer({ ...trainer, favouritePokemon: event.target.value })}
                />
            </div>
            <Button buttonText={formFunction} style={"button large green"} type={"submit"} />
        </form>
    )
}

export default Form