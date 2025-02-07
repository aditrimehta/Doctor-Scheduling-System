import React, { useState } from "react";
import Login from "./Login";
import Signup from  "./SignUp"

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <header className="bg-white p-6 flex justify-between items-center border-b-4 border-red-500">
      <div className="flex items-center">
  <img src="/logo.png" alt="Logo" className="h-16" />
  <div className="ml-4 flex flex-col">
    <h1 className="text-teal-700 text-6xl font-bold">DocMeet</h1>
    <h2 className="text-red-500 text-xl font-bold">Always At Your Convenience</h2>
  </div>
</div>

      <div className="flex gap-4 ">
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
      </div>

      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      {showSignup && <Signup onClose={() => setShowSignup(false)} />}
    </header>
  );
};

export default Header;
