import { useState } from 'react'
import './App.css'

function TodoInputs() {
  const [input, setInput] = useState("")
  
  return (
    <>
      <div>
        <input 
        value={input} 
        onChange={e => setInput(e.target.value)}>
        </input>
        <button type='submit'>Add</button>
      </div>
    </ >
  )
}

export default TodoInputs