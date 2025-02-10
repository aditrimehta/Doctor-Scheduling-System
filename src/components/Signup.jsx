import React, { useState } from "react";

const Signup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle signup request
  const handleSignup = async () => {
    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setMessage(data.message);

      if (response.ok) {
        // Clear form on success
        setFormData({ name: "", email: "", password: "" });
      }
    } catch (error) {
      setMessage("Signup failed. Try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl text-teal-700 mb-4">Sign Up</h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full p-2 border rounded mb-2"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-2"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-4"
          value={formData.password}
          onChange={handleChange}
        />
        <button
          onClick={handleSignup}
          className="w-full bg-teal-700 text-white py-2 rounded hover:bg-teal-600"
        >
          Sign Up
        </button>
        {message && <p className="text-center text-red-500 mt-2">{message}</p>}
        <button onClick={onClose} className="mt-2 text-red-600 w-full">
          Close
        </button>
      </div>
    </div>
  );
};

export default Signup;
