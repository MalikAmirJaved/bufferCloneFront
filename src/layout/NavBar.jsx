import React, { useContext, useState } from 'react';
import logo from '../Assets/Buffer-Logo.jpg';
import profilePic from '../Assets/bugatti_Devo.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { Context } from '../main';

const NavBar = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

  const logout = async () => {
    await axios
      .get("http://localhost:4000/api/v1/user/logout", {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setUser(null);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        console.error(err);
      });
  };

  if (!isAuthenticated) {
    return <Navigate to={"/auth"} />;
  }
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-[10%_auto_auto] items-center px-6 py-2 bg-white shadow-md">
      {/* Logo */}
      <div>
        <img src={logo} alt="Logo" className="w-28" />
      </div>

      {/* Navigation Links */}
      <div>
        <ul className="flex items-center  space-x-6 text-lg font-medium text-gray-700">
          <li onClick={()=>{navigate('/dashboard')}} className="hover:text-blue-600 cursor-pointer transition">Dashboard</li>
          <li onClick={()=>{navigate('/create')}} className="hover:text-blue-600 cursor-pointer transition">Create</li>
          <li onClick={()=>{navigate('/analyze')}} className="hover:text-blue-600 cursor-pointer transition">Analyze</li>
          <li onClick={()=>{navigate('/engage')}} className="hover:text-blue-600 cursor-pointer transition">Engage</li>
          <li onClick={()=>{navigate('/startpage')}} className="hover:text-blue-600 cursor-pointer transition">Start Page</li>
        </ul>
      </div>

      {/* Right Side: Button + Profile Pic */}
      <div className="flex items-center justify-end space-x-4">
        <button className="btnbtn flex items-center gap-2">
          <FontAwesomeIcon icon={faPlus} />
          New
        </button>
        <img
          src={profilePic}
          alt="Profile"
          className="w-11 h-11 object-cover rounded-full border-2 border-blue-500 hover:scale-105 transition"
        />
         <button onClick={logout} className="text-blue-700">Logout</button>
      </div>
    </div>
  );
};

export default NavBar;
