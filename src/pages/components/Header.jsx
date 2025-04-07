import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import Login from "./Login";
import Signup from "./SignUp";
import { Link } from "react-router-dom"; // Ensure this is imported for navigation

const Header = ({ isAuthenticated, setIsAuthenticated }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { cart } = useCart(); // Access cart state

  return (
    <header className="bg-white p-6 flex justify-between items-center border-b-4 border-red-500">
      {/* Logo and Site Name */}
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-16" />
        <div className="ml-4 flex flex-col">
          <h1 className="text-teal-700 text-6xl font-bold">DocMeet</h1>
          <h2 className="text-red-500 text-xl font-bold">Always At Your Convenience</h2>
        </div>
      </div>

      {/* Authentication & Cart */}
<div className="flex items-center gap-6">
  {!isAuthenticated ? (
    <>
      <button
        className="flex items-center h-12 font-bold border-2 border-red-600 text-red-600 px-6 py-2 rounded-full hover:bg-red-600 hover:text-white"
        onClick={() => setShowLogin(true)}
      >
        Login
      </button>
      <button
        className="flex items-center h-12 font-bold border-2 border-teal-700 bg-teal-700 text-white px-6 py-2 rounded-full hover:bg-white hover:text-teal-700"
        onClick={() => setShowSignup(true)}
      >
        Sign Up
      </button>
    </>
  ) : (
    <div className="relative z-10">
      <img
        src="https://media.istockphoto.com/id/2151669184/vector/vector-flat-illustration-in-grayscale-avatar-user-profile-person-icon-gender-neutral.jpg?s=612x612&w=0&k=20&c=UEa7oHoOL30ynvmJzSCIPrwwopJdfqzBs0q69ezQoM8="
        alt="Profile"
        className="w-10 h-10 rounded-full cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      />
      {showDropdown && (
        <div className="absolute right-0 mt-2 bg-white shadow-lg rounded p-2 w-40">
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-200"
            onClick={() => setIsAuthenticated(false)}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  )}

  {/* Cart Button */}
  <div className="relative">
    <Link
      to="/cart"
      className="border border-teal-700 px-4 py-2 rounded-md text-teal-700 hover:bg-teal-700 hover:text-white"
    >
      Cart ({cart.length})
    </Link>
  </div>
</div>


      {showLogin && <Login onClose={() => setShowLogin(false)} onLogin={() => setIsAuthenticated(true)} />}
      {showSignup && <Signup onClose={() => setShowSignup(false)} />}
    </header>
  );
};

export default Header;
