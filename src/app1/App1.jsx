import React from 'react'
import Todo from './components/Todo'
import ToDoItems from './components/ToDoItems'
import { Link, Route, Routes } from 'react-router-dom'


const App1 = () => {
  return (
    <div>
      <Routes>
      <Route path='*' element={<Todo/> } />
      <Route path='*' element={<ToDoItems/> } />
      </Routes>
    </div>
  )
}

export default App1;