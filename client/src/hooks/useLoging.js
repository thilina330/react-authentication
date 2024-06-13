// useLogin.js

import { useState } from "react";
import { message } from "antd";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // useNavigate hook for routing

  const loginUser = async (values) => {
    try {
      setError(null);
      setLoading(true);

      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.status === 200) {
        navigate("/dashboard");
        message.success(data.message);
        login(data.token, data.user);
        localStorage.setItem("token", data.token);
        console.log("Token:", data.token); // Print token to console
      } else if (res.status === 400) {
        setError(data.message);
        message.error(data.message);
      } else {
        message.error("Login failed!");
      }
    } catch (error) {
      setError(error.message || "An error occurred during login");
      message.error(error.message || "An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, loginUser };
};

export default useLogin; // Make sure to export the hook as default
