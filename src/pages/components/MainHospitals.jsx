import React from "react";

const hospitals = [
  {
    name: "Apollo Hospitals",
    location: "Navi Mumbai",
    specialties: "Cardiology, Neurology, Orthopedics",
    rating: "4.5 ⭐",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfP3SP_egbtep3svuW58aPB1A5IeIAJwoaQ&s",
  },
  {
    name: "Fortis Hospital",
    location: "Delhi",
    specialties: "Oncology, Pediatrics, General Surgery",
    rating: "4.7 ⭐",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfP3SP_egbtep3svuW58aPB1A5IeIAJwoaQ&s",
  },
  {
    name: "AIIMS",
    location: "New Delhi",
    specialties: "Cardiology, Nephrology, Trauma Care",
    rating: "4.8 ⭐",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfP3SP_egbtep3svuW58aPB1A5IeIAJwoaQ&s",
  },
  {
    name: "Max Healthcare",
    location: "Mumbai",
    specialties: "ENT, Dermatology, Internal Medicine",
    rating: "4.3 ⭐",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfP3SP_egbtep3svuW58aPB1A5IeIAJwoaQ&s",
  },
];

function MainHospitals() {
  return (
    <div>
      <section className="bg-white py-10 px-10">
        <h2 className="text-3xl font-bold text-teal-700 p-4">OUR HOSPITALS</h2>
        <div className="flex flex-col gap-6 p-4">
          {hospitals.map((hospital, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg w-full flex items-center gap-6 hover:scale-105 transition"
            >
              {/* Hospital Image (Left) */}
              <img
                src={hospital.image}
                alt={hospital.name}
                className="rounded-lg w-32 h-24 object-cover"
              />

              {/* Hospital Info (Right) */}
              <div className="flex flex-col text-left w-full">
                <h3 className="text-teal-700 text-lg font-semibold">
                  {hospital.name}
                </h3>
                <p className="text-gray-600 text-sm">📍 {hospital.location}</p>
                <p className="text-gray-600 text-sm">
                  🏥 Specialties: {hospital.specialties}
                </p>
                <p className="text-gray-600 text-sm">{hospital.rating}</p>
                <button className="mt-4 bg-teal-700 text-white px-4 py-2 rounded-md hover:bg-white hover:text-teal-700 border-2 border-teal-700 self-start">
                  VIEW DETAILS
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MainHospitals;
