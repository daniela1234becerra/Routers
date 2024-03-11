import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'


const Button = (props) => {
  return (
    <div>
      <Link to="/form">
          <button className='button'>NewTodo</button>
      </Link>
    </div>
  )
}

export {Button}
