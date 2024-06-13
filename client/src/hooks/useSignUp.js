import { useState } from "react";
import { message } from "antd";
import { useAuth } from "../context/AuthContext.jsx";
//import { useNavigate } from "react-router-dom";

const useSignUp = () => {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null); // Corrected initial state to false
  //const navigate = useNavigate();

  const registerUser = async (values) => {
    if (values.password !== values.confirmpassword) {
      return setError("Passwords do not match!");
    }

    try {
      setError(null);
      setLoading(true); // Set loading to true when request starts

      const res = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.status === 201) {
        message.success(data.message); // Assuming this message comes from backend
        login(data.token, data.user);
      } else if (res.status === 400) {
        setError(data.error); // Using data.error assuming backend sends it
      } else {
        message.error("Registation Failed!");
      }
    } catch (error) {
      message.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, registerUser };
};

export default useSignUp;
