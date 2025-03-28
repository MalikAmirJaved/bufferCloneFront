import React, { useContext, useState } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import Register from "../components/Register";
import Login from "../components/Login";

const Auth = () => {
  const { isAuthenticated } = useContext(Context);
  const [isLogin, setIsLogin] = useState(true);

  if (isAuthenticated) return <Navigate to="/dashboard" replace />;

  const ToggleButton = ({ label, active, onClick }) => (
    <button
      onClick={onClick}
      className={`w-1/2 py-3 text-lg font-medium transition-all duration-300 rounded-t-md
        ${active
          ? "bg-white text-primary shadow"
          : "bg-primary/10 text-white hover:bg-primary/20"
        }`}
      aria-pressed={active}
    >
      {label}
    </button>
  );


  return (
    <div className="flex items-center justify-center min-h-screen  px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden text-center">
        <div className={`flex border-b border-gray-300 bgclr `}>
          <ToggleButton label="Login" active={isLogin} onClick={() => setIsLogin(true)} />
          <ToggleButton label="Register" active={!isLogin} onClick={() => setIsLogin(false)} />
        </div>

        <div className="p-6 text-left">
          {isLogin ? (
            <div>
              <Login key="login" switchToRegister={() => setIsLogin(false)} />
              
            </div>

          ) : (
              <div>
                <Register key="register" switchToLogin={() => setIsLogin(true)} />

              </div>

          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
