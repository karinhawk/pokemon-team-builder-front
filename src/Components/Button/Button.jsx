import React from 'react'
import "./Button.scss"

const Button = ({buttonFunction, buttonText, style, type}) => {
  return (
    <div>
      <button className={style} onClick={buttonFunction} type={type}>{buttonText}</button>
    </div>
  )
}

export default Button