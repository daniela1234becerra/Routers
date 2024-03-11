import React from 'react'
import './Todo.css'
import { Link } from 'react-router-dom'


const Todo = () => {
  return (
    <div>
      <div className='todo'>
        <div className='todo_container'>
          <h2>To do</h2>
        </div>
        <button className='todo-btn'>X</button>
      </div>
    </div>
  )
}

export { Todo }
