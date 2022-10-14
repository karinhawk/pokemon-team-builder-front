import React from 'react'
import "./Button.scss"

const Button = ({buttonFunction}) => {
  return (
    <div>
      <button className='button' onClick={buttonFunction}></button>
    </div>
  )
}

export default Button