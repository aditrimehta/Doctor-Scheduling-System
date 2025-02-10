import React, { useState } from "react";

const Login = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError(""); // Clear previous errors

    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    
    if (response.ok) {
      alert("Login Successful! 🎉");
      onClose();  // Close modal
    } else {
      setError(data.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl text-teal-700 mb-4">Login</h2>
        
        {error && <p className="text-red-500">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        
        <button onClick={handleLogin} className="w-full bg-teal-700 text-white py-2 rounded hover:bg-teal-600">
          Login
        </button>
        
        <button onClick={onClose} className="mt-2 text-red-600 w-full">
          Close
        </button>
      </div>
    </div>
  );
};

export default Login;
