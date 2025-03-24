import React from "react";
import { useCart } from "../context/CartContext";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function Cart() {
  const { cart, removeFromCart } = useCart();

  // Calculate total amount
  const totalAmount = cart.reduce((total, item) => total + (item.Fees || 0),0);

  return (
    <>
      <Header />
      <NavBar />
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8 border">
        <h2 className="text-2xl font-bold text-teal-700 mb-4">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-md shadow-md flex justify-between items-center">
                <div>
                  <p><strong>{item.name}</strong> ({item.specialty})</p>
                  <p>{item.hospital} | {item.location}</p>
                  <p><strong>Date:</strong> {item.date} | <strong>Time:</strong> {item.time}</p>
                  <p><strong>Fees:</strong> {item.Fees}</p>  {/* ✅ Fix Fees Display */}
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Total Amount */}
            <div className="bg-gray-200 p-4 rounded-md shadow-md mt-4 flex justify-between items-center">
              <h2 className="text-xl font-bold">Total Amount:</h2>
              <h2 className="text-xl font-bold text-teal-700">{totalAmount}</h2>
            </div>
            
            <button className="w-full bg-teal-700 text-white px-4 py-2 rounded-md hover:bg-white hover:text-teal-700 border-2 border-teal-700 mt-4">
              Proceed to Payment
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
