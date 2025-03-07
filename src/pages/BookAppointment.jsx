import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function BookAppointment() {
  const location = useLocation();
  const doctor = location.state?.doctor; // Retrieve doctor data

  if (!doctor) {
    return <p className="text-red-500">No doctor selected. Please go back and select a doctor.</p>;
  }

  return (

    <>
    <Header/>
    <NavBar/>
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8 border">
      <h2 className="text-2xl font-bold text-teal-700 mb-4">Book Appointment with {doctor.name}</h2>
      <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <p><strong>Specialty:</strong> {doctor.specialty}</p>
      <p><strong>Experience:</strong> {doctor.experience}</p>
      <p><strong>Hospital:</strong> {doctor.hospital}</p>
      <p><strong>Location:</strong> {doctor.location}</p>
      </div>
      {/* Appointment Form */}
      <form className="mt-4">
        <label className="block mb-2 pt-2">
          Your Name:
          <input type="text" className="w-full border px-4 py-2 rounded" required />
        </label>

        <label className="block mb-2 pt-2">
          Your Mobile Number:
          <input type="number" className="w-full border px-4 py-2 rounded" required />
        </label>

        <label className="block mb-2 pt-2">
          Your Email:
          <input type="email" className="w-full border px-4 py-2 rounded" required />
        </label>

        <label className="block mb-2 pt-2">
          Date:
          <input type="date" className="w-full border px-4 py-2 rounded" required />
        </label>

        <label className="block mb-2 pt-2 pb-2">
          Time:
          <input type="time" className="w-full border px-4 py-2 rounded" required />
        </label>
        <div className="flex justify-between items-center rounded-md text-teal-700 pt-2">
    <h2 className="text-xl"> <strong>Amount to Pay:  {doctor.Fees} </strong></h2>
  <button type="submit" className="bg-teal-700 text-white px-4 py-2 rounded-md hover:bg-white hover:text-teal-700 border-2 border-teal-700 pl-4">
    Make Payment →
  </button>
</div>
      </form>
    </div>
    </>
  );
}

export default BookAppointment;
