import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import { doctors } from "./MainDoctors"; // Import the doctors list

function HospitalDetailsPage() {
  const location = useLocation();
  const hospital = location.state?.hospital; // Get hospital data from state

  if (!hospital) {
    return <p className="text-center text-red-500">Hospital not found.</p>;
  }

  // Filter doctors who work at this hospital
  const hospitalDoctors = doctors.filter(
    (doctor) => doctor.hospital.trim().toLowerCase() === hospital.name.trim().toLowerCase()
  );
  

  return (
    <>
     
      <NavBar />
      <div className="container mx-auto py-10 px-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Hospital Image */}
          {hospital.image && (
            <img
              src={hospital.image}
              alt={hospital.name}
              className="w-full md:w-1/3 rounded-lg shadow-md"
            />
          )}

          {/* Hospital Details */}
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold text-teal-700">{hospital.name}</h1>
            <p className="text-lg italic text-gray-600">Located in {hospital.location}</p>

            <h2 className="text-2xl font-semibold mt-6">Services Offered:</h2>
            <ul className="list-disc ml-6 text-gray-700">
              {hospital.specialties.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold mt-6">Rating:</h2>
            <p className="text-gray-700">{hospital.rating} ⭐</p>
          </div>
        </div>

        {/* Doctors Section */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-teal-700 mb-4">Doctors at {hospital.name}</h2>

          {hospitalDoctors.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hospitalDoctors.map((doctor, index) => (
                <div key={index} className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center text-center">
                  <img src={doctor.image} alt={doctor.name} className="rounded-full w-24 h-24 object-cover mb-4" />
                  <h3 className="text-teal-700 text-lg font-semibold">{doctor.name}</h3>
                  <p className="text-gray-600 text-sm">{doctor.specialty} | {doctor.experience} exp</p>
                  <p className="text-gray-600 text-sm">Languages: {doctor.languages}</p>
                  <p className="text-gray-600 text-sm">💰 {doctor.Fees}</p>
                  <Link to="/book-appointment" state={{ doctor }}>
            <button className="mt-4 bg-teal-700 text-white px-4 py-2 rounded-md hover:bg-white hover:text-teal-700 border-2 border-teal-700">
              BOOK APPOINTMENT
            </button>
          </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 italic">No doctors listed for this hospital.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default HospitalDetailsPage;
