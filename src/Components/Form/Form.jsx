import { useState } from "react"
import Button from "../Button/Button"
import "./Form.scss"

const Form = ({changeName, changeAvatar, defaultFormState, handleSubmit}) => {


    const setInputs = (e) => {
        e.preventDefault();
        // console.log(name);
        // console.log(avatar);
    }

  return (
        <form action="submit"  onSubmit={setInputs} className='form'>
            <h2>Create Your Trainer!</h2>
            <div className="form__label-input">
            <label className="form__label" htmlFor="name-input">Type a name</label>
            <input className="form__input" type="text" name="name-input" onChange={changeName}/>
            </div>
            <div className="form__label-input">
            <label className="form__label" htmlFor="select-input">Choose a look</label>
            <select className="form__select" name="select-input" onChange={changeAvatar} >
                <option value="1">1</option>
                <option value="2">2</option>
            </select>
            </div>
            <Button buttonText={"Create!"} style={"button medium blue"} type={"submit"}/>
        </form>
  )
}

export default Form