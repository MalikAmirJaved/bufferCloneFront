// Login.jsx
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";

const Login = ({ switchToRegister }) => {
  const { setIsAuthenticated, setUser } = useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    try {
      const res = await axios.post("http://localhost:4000/api/v1/user/login", data, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success(res.data.message);
      setIsAuthenticated(true);
      setUser(res.data.user);
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed.");
    }
  };

  return (
    <form
      className="auth-form w-full max-w-sm bg-white rounded-lg shadow-md p-6 space-y-5"
      onSubmit={handleSubmit(handleLogin)}
    >
      <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

      <div className="flex flex-col space-y-3">
        <input
          type="email"
          placeholder="Email Address"
          {...register("email", { required: true })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.email && <span className="text-red-500 text-sm">Email is required</span>}

        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.password && <span className="text-red-500 text-sm">Password is required</span>}
      </div>

      <div className="text-right">
        <a href="/password/forgot" className="forgotbtn">
          Forgot your password?
        </a>
      </div>

      <button type="submit" className="btnclr w-full">
        Login
      </button>

      <p className="text-center text-sm text-gray-600">
        Not a member?{" "}
        <button
          type="button"
          onClick={switchToRegister}
          className="text-primary hover:underline font-medium"
        >
          Signup now
        </button>
      </p>
    </form>
  );
};

export default Login;
