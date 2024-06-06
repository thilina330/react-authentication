import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Register from './auth/Register'
import Signin from './auth/Signin'
import Dashbord from './pages/Dashbord'
import './App.css'


const App = () => {
  return (
   
    <Router>
      <Routes>
         <Route path='/' element={<Register/>}></Route>
         <Route path='/login' element={<Signin/>}></Route>
         <Route path='/dashbord' element={<Dashbord/>}></Route>
      </Routes>
    </Router>
      
 
  )
}

export default App
