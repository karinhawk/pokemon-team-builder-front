import { useState } from "react"
import Button from "../Button/Button"
import "./Form.scss"

const Form = () => {

    const [name, setName] = useState();
    const [avatar, setAvatar] = useState(1);

    const setInputs = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(avatar);
    }

  return (
        <form action="submit"  onSubmit={setInputs} className='form'>
            <h2>Create Your Trainer!</h2>
            <div className="form__label-input">
            <label className="form__label" htmlFor="name-input">Type a name</label>
            <input className="form__input" type="text" name="name-input" onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="form__label-input">
            <label className="form__label" htmlFor="select-input">Choose a look</label>
            <select className="form__select" name="select-input" onChange={(e) => setAvatar(e.target.value)} >
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
            </div>
            <Button buttonText={"Create!"} style={"button medium blue"} type={"submit"}/>
        </form>
  )
}

export default Form