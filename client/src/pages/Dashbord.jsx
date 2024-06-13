import React from 'react';
import { Button } from 'antd';
import { useAuth } from '../context/AuthContext';
//import { useNavigate } from 'react-router-dom'; // Import useNavigate


const Dashboard = () => {
  const { logOut } = useAuth();
  
  return (
    <>
      <div>Dashboard</div>
      <Button onClick={logOut}>Logout</Button>
    </>
  );
}

export  default Dashboard;
