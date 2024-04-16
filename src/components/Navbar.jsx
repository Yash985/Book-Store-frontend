import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import axios from "axios";

const Navbar = () => {
  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const res = await axios.get("http://localhost:3000/login/success", {
      withCredentials: true,
    });
    console.log(res.data.user);
  };

  const logout = () => {
    window.open("http://localhost:3000/auth/logout", "_self");
  };

  return (
    <div className="bg-[#f39a66f3] h-[80px] flex items-center justify-between px-8">
      {/* Logo */}
      <li className="text-green-400 text-3xl list-none text-nowrap">
        Book Store
      </li>
      {/* Nav Links */}
      <div className="w-full">
        <ul className="flex pl-5 justify-center font-semibold">
          <NavLink
            to=""
            className={({ isActive }) =>
              `text-xl pr-5 text-yellow-300 ${
                isActive && "text-red-500 underline"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/addbook"
            className={({ isActive }) =>
              `text-xl pr-5 text-yellow-300 ${
                isActive && "text-red-500 underline"
              }`
            }
          >
            Add Book
          </NavLink>
          <NavLink
            to="/contact  "
            className={({ isActive }) =>
              `text-xl text-yellow-300 ${isActive && "text-red-500 underline"}`
            }
          >
            Contact
          </NavLink>
        </ul>
      </div>
      {/* Cart Icon */}
      <div className="cart flex">
        <FaShoppingCart size="30px" />
        <p className="text-black-400 relative ml-1 bottom-3 font-bold">0</p>
      </div>
      <div>
        <button
          onClick={logout}
          className="bg-yellow-300 text-black-400 font-semibold px-3 py-1 rounded-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
