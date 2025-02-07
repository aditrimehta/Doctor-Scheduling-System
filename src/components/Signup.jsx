import React from "react";

const Signup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl text-teal-700 mb-4">Sign Up</h2>
        <input type="text" placeholder="Full Name" className="w-full p-2 border rounded mb-2" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-2" />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-4" />
        <button className="w-full bg-teal-700 text-white py-2 rounded hover:bg-teal-600">Sign Up</button>
        <button onClick={onClose} className="mt-2 text-red-600 w-full">Close</button>
      </div>
    </div>
  );
};

export default Signup;
