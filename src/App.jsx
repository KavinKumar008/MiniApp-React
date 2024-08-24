import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import App1 from "./app1/App1"
import App2 from "./app2/App2"
import Error from './Error/Error'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/todo/*' element={<App1 />}/>
        <Route path='/login/*' element={<App2/>} />
        <Route path='/*' element={<Error/>} />
      </Routes>
    </Router>
  )
}

export default App