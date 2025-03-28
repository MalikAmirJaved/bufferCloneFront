import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import PublicRoutes from "./routes/PublicRoutes";
import { Context } from "./main";
import './App.css';

const App = () => {
  const { setIsAuthenticated, setUser } = useContext(Context);

  useEffect(() => {
    let isMounted = true; // Prevent state updates on unmounted component

    const getUser = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/v1/user/me", {
          withCredentials: true,
        });
        if (isMounted) {
          setUser(res.data.user);
          setIsAuthenticated(true);
        }
      } catch (err) {
        if (isMounted) {
          setUser(null);
          setIsAuthenticated(false);
        }
      }
    };

    getUser();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Router>
      <PublicRoutes />
      <ToastContainer theme="colored" />
    </Router>
  );
};

export default App;
