import { useState } from 'react'
import TodoInputs from './TodoInputs'
import List from './List'
import './App.css'

function App() {

  return (
    <>
      <div>
        <TodoInputs></TodoInputs>
        <List></List>
      </div>
    </>
  )
}

export default App
