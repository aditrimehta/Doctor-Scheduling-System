import React, { useState } from "react";
import { Link } from "react-router-dom";

const hospitals = [
  {
    name: "Thakkar Hospital",
    location: "Mumbai",
    specialties: ["Dermatology", "Neurology"],
    rating: 4.9,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfP3SP_egbtep3svuW58aPB1A5IeIAJwoaQ&s",
  },
  {
    name: "Apollo Hospitals",
    location: "Navi Mumbai",
    specialties: ["Cardiology", "Neurology"],
    rating: 4.5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfP3SP_egbtep3svuW58aPB1A5IeIAJwoaQ&s",
  },
  {
    name: "Fortis Hospital",
    location: "Thane",
    specialties: ["Oncology", "Pediatrics"],
    rating: 4.7,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfP3SP_egbtep3svuW58aPB1A5IeIAJwoaQ&s",
  },
  {
    name: "AIIMS Mumbai",
    location: "Mumbai",
    specialties: ["Cardiology", "General Surgery"],
    rating: 4.8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfP3SP_egbtep3svuW58aPB1A5IeIAJwoaQ&s",
  },
  {
    name: "Max Healthcare",
    location: "Mumbai",
    specialties: ["ENT", "Neurology"],
    rating: 4.3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfP3SP_egbtep3svuW58aPB1A5IeIAJwoaQ&s",
  },
  {
    name: "Kokilaben Dhirubhai Ambani Hospital",
    location: "Mumbai",
    specialties: ["Neurology", "Orthopedics"],
    rating: 4.6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfP3SP_egbtep3svuW58aPB1A5IeIAJwoaQ&s",
  },
  {
    name: "Hiranandani Hospital",
    location: "Navi Mumbai",
    specialties: ["Cardiology", "General Surgery"],
    rating: 4.4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfP3SP_egbtep3svuW58aPB1A5IeIAJwoaQ&s",
  },
  {
    name: "Tata Memorial Hospital",
    location: "Mumbai",
    specialties: ["Oncology", "General Surgery"],
    rating: 4.9,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfP3SP_egbtep3svuW58aPB1A5IeIAJwoaQ&s",
  },
  {
    name: "Global Hospitals",
    location: "Mumbai",
    specialties: ["Pediatrics", "Neurology"],
    rating: 4.5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfP3SP_egbtep3svuW58aPB1A5IeIAJwoaQ&s",
  },
  {
    name: "Holy Spirit Hospital",
    location: "Thane",
    specialties: ["Cardiology", "Orthopedics"],
    rating: 4.2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfP3SP_egbtep3svuW58aPB1A5IeIAJwoaQ&s",
  },
  {
    name: "S.L. Raheja Hospital",
    location: "Mumbai",
    specialties: ["ENT", "Oncology"],
    rating: 4.1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfP3SP_egbtep3svuW58aPB1A5IeIAJwoaQ&s",
  },
  {
    name: "Nanavati Max Hospital",
    location: "Mumbai",
    specialties: ["Orthopedics", "General Surgery"],
    rating: 4.6,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfP3SP_egbtep3svuW58aPB1A5IeIAJwoaQ&s",
  },
  {
    name: "Sushrut Hospital",
    location: "Thane",
    specialties: ["Pediatrics", "General Surgery"],
    rating: 4.3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfP3SP_egbtep3svuW58aPB1A5IeIAJwoaQ&s",
  },
  {
    name: "Saifee Hospital",
    location: "Mumbai",
    specialties: ["Neurology", "ENT"],
    rating: 4.7,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfP3SP_egbtep3svuW58aPB1A5IeIAJwoaQ&s",
  },
  {
    name: "Jaslok Hospital",
    location: "Mumbai",
    specialties: ["Cardiology", "Oncology"],
    rating: 4.8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfP3SP_egbtep3svuW58aPB1A5IeIAJwoaQ&s",
  },
  {
    name: "Lilavati Hospital",
    location: "Mumbai",
    specialties: ["Neurology", "Orthopedics"],
    rating: 4.7,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfP3SP_egbtep3svuW58aPB1A5IeIAJwoaQ&s",
  },
  {
    name: "Wockhardt Hospital",
    location: "Thane",
    specialties: ["ENT", "Pediatrics"],
    rating: 4.4,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfP3SP_egbtep3svuW58aPB1A5IeIAJwoaQ&s",
  },
  {
    name: "SRV Hospital",
    location: "Navi Mumbai",
    specialties: ["General Surgery", "Cardiology"],
    rating: 4.5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfP3SP_egbtep3svuW58aPB1A5IeIAJwoaQ&s",
  },
  {
    name: "Bhaktivedanta Hospital",
    location: "Mumbai",
    specialties: ["Neurology", "Pediatrics"],
    rating: 4.3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfP3SP_egbtep3svuW58aPB1A5IeIAJwoaQ&s",
  },
  {
    name: "CritiCare Hospital",
    location: "Navi Mumbai",
    specialties: ["ENT", "Orthopedics"],
    rating: 4.2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfP3SP_egbtep3svuW58aPB1A5IeIAJwoaQ&s",
  },
  {
    name: "Shushrusha Hospital",
    location: "Thane",
    specialties: ["Oncology", "General Surgery"],
    rating: 4.3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfP3SP_egbtep3svuW58aPB1A5IeIAJwoaQ&s",
  },
];


function MainHospitals() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedRating, setSelectedRating] = useState("");

  // Extract unique locations & specialties
  const locations = [...new Set(hospitals.map((hospital) => hospital.location))];
  const specialties = [...new Set(hospitals.flatMap((hospital) => hospital.specialties))];

  // Filter hospitals based on selected criteria
  const filteredHospitals = hospitals.filter((hospital) => {
    return (
      (selectedLocation ? hospital.location === selectedLocation : true) &&
      (selectedSpecialty ? hospital.specialties.includes(selectedSpecialty) : true) &&
      (selectedRating ? hospital.rating >= parseFloat(selectedRating) : true)
    );
  });

  return (
    <div>
      <section className="bg-white py-10 px-10">
        <h2 className="text-3xl font-bold text-teal-700 p-4">OUR HOSPITALS</h2>

        {/* Filters */}
        <div className="flex gap-4 mb-6">
          {/* Location Filter */}
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="border p-2 rounded-md"
          >
            <option value="">All Locations</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>

          {/* Specialty Filter */}
          <select
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
            className="border p-2 rounded-md"
          >
            <option value="">All Specialties</option>
            {specialties.map((spec) => (
              <option key={spec} value={spec}>
                {spec}
              </option>
            ))}
          </select>

          {/* Rating Filter */}
          <select
            value={selectedRating}
            onChange={(e) => setSelectedRating(e.target.value)}
            className="border p-2 rounded-md"
          >
            <option value="">All Ratings</option>
            <option value="4.0">4.0+ ⭐</option>
            <option value="4.5">4.5+ ⭐</option>
            <option value="4.7">4.7+ ⭐</option>
          </select>
        </div>

        {/* Hospital Cards */}
        <div className="flex flex-col gap-6 p-4">
          {filteredHospitals.length > 0 ? (
            filteredHospitals.map((hospital, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-lg w-full flex items-center gap-6 hover:scale-105 transition"
              >
                {/* Hospital Image */}
                <img
                  src={hospital.image}
                  alt={hospital.name}
                  className="rounded-lg w-32 h-24 object-cover"
                />

                {/* Hospital Info */}
                <div className="flex flex-col text-left w-full">
                  <h3 className="text-teal-700 text-lg font-semibold">{hospital.name}</h3>
                  <p className="text-gray-600 text-sm">📍 {hospital.location}</p>
                  <p className="text-gray-600 text-sm">🏥 Specialties: {hospital.specialties.join(", ")}</p>
                  <p className="text-gray-600 text-sm">⭐ {hospital.rating}</p>
                  <Link to="/HospitalsDetailsPage" state={{ hospital }}>
  <button className="mt-4 bg-teal-700 text-white px-4 py-2 rounded-md hover:bg-white hover:text-teal-700 border-2 border-teal-700 self-start">
    VIEW DETAILS
  </button>
</Link>

                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No hospitals match your criteria.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default MainHospitals;
