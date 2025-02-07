import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <header className="bg-white p-6 flex justify-between items-center border-b-4 border-red-600">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-16" />
        <h1 className="ml-4 text-teal-700 text-4xl font-bold">DocMeet</h1>
      </div>
      <div className="flex gap-4">
        <button
          className="border-2 border-red-600 text-red-600 px-6 py-2 rounded-full hover:bg-red-600 hover:text-white"
          onClick={() => setShowLogin(true)}
        >
          Login
        </button>
        <button
          className="border-2 border-teal-700 bg-teal-700 text-white px-6 py-2 rounded-full hover:bg-white hover:text-teal-700"
          onClick={() => setShowSignup(true)}
        >
          Sign Up
        </button>
      </div>

      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      {showSignup && <Signup onClose={() => setShowSignup(false)} />}
    </header>
  );
};

export default Header;
