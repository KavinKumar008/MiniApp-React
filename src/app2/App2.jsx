import LoginSignup from './components/LoginSignup/LoginSignup';
import {Route,Routes} from "react-router-dom"

const App2= ()=>{
  return(
    <div>
     <Routes>
        <Route path='/' element={<LoginSignup/>}/>
      </Routes>
     
    </div>
    
  )
}
export default App2;
