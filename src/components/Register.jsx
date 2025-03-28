import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../main";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Register = ({switchToLogin }) => {
  const { isAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    data.phone = `+92${data.phone}`;
    try {
      const res = await axios.post("http://localhost:4000/api/v1/user/register", data, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      });

      toast.success(res.data.message);
      navigateTo(`/otp-verification/${data.email}/${data.phone}`, {
        state: { fromRegister: true }      
      });
      
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex justify-center items-center ">
      <form
        className="auth-form w-full max-w-sm bg-white rounded-lg shadow-md p-6 space-y-5"
        onSubmit={handleSubmit(handleRegister)}
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 ">Register</h2>

        <input
          type="text"
          placeholder="Full Name"
          {...register("name", { required: true })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.name && <span className="text-red-500 text-sm">Name is required</span>}

        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.email && <span className="text-red-500 text-sm">Email is required</span>}

        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
          <span className="px-3 bg-gray-100 text-gray-600">+92</span>
          <input
            type="number"
            placeholder="Phone"
            {...register("phone", { required: true })}
            className="w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        {errors.phone && <span className="text-red-500 text-sm">Phone is required</span>}

        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.password && <span className="text-red-500 text-sm">Password is required</span>}

        <div className="space-y-2">
          <p className="text-sm text-gray-700 font-medium">Select Verification Method</p>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2 text-sm">
              <input
                type="radio"
                value="email"
                {...register("verificationMethod", { required: true })}
              />
              <span>Email</span>
            </label>
            <label className="flex items-center space-x-2 text-sm">
              <input
                type="radio"
                value="phone"
                {...register("verificationMethod", { required: true })}
              />
              <span>Phone</span>
            </label>
          </div>
          {errors.verificationMethod && (
            <span className="text-red-500 text-sm">Please select a method</span>
          )}
        </div>

        <button type="submit" className="btnclr w-full">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
