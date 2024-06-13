import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './auth/Register';
import Signin from './auth/Signin';
import Dashboard from './pages/Dashbord';
import { useAuth } from './context/AuthContext.jsx'; // Ensure AuthProvider is imported
import './App.css'

const App = () => {
  const { isAuthenticated } = useAuth(); // Hook to check authentication

  return (
    
      <Router>
        <Routes>
          <Route path='/' element={!isAuthenticated ? <Register /> : <Navigate to='/dashboard' />} />
          <Route path='/login' element={!isAuthenticated ? <Signin /> : <Navigate to='/dashboard' />} />
          <Route path='/dashboard' element={isAuthenticated ? <Dashboard /> : <Signin/>} />
          {/* <Route path='/signup' element={<Register />} /> */}
        </Routes>
      </Router>
   
  );
}

export default App;
