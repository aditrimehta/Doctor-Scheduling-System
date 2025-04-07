import React, { useState } from "react";
import { Link } from "react-router-dom";

export const doctors = [
  {
    name: "Dr. Abhijit Bagde",
    specialty: "Cardiology",
    experience: "10 years",
    hospital: "Apollo Hospitals",
    location: "Navi Mumbai",
    languages: "English, Hindi",
    image: "https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg",
    Fees: 4000
  
  },
  {
    name: "Dr. Riya Sharma",
    specialty: "Orthopedics",
    experience: "15 years",
    hospital: "Fortis Hospital",
    location: "Thane",
    languages: "English, Hindi",
    image: "https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg",
    Fees: 1000
  },
  {
    name: "Dr. Rajesh Khanna",
    specialty: "Neurology",
    experience: "12 years",
    hospital: "AIIMS Mumbai",
    location: "Navi Mumbai",
    languages: "English, Hindi",
    image: "https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg",
    Fees: 5000
  },
  {
    name: "Dr. Priya Mehta",
    specialty: "Dermatology",
    experience: "8 years",
    hospital: "Max Healthcare",
    location: "Mumbai",
    languages: "English, Marathi, Hindi",
    image: "https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg",
    Fees: 2000
  },
  {
    name: "Dr. Aakash Verma",
    specialty: "Cardiology",
    experience: "20 years",
    hospital: "Apollo Hospitals",
    location: "Thane",
    languages: "English, Hindi",
    image: "https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg",
    Fees: 4000
  },
  {
    name: "Dr. Neha Agarwal",
    specialty: "Gynecology",
    experience: "18 years",
    hospital: "Cloudnine Hospital",
    location: "Navi Mumbai",
    languages: "English, Hindi",
    image: "https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg",
    Fees: 3000
  },
  {
    name: "Dr. Aman Patel",
    specialty: "Orthopedics",
    experience: "10 years",
    hospital: "Shankar Netralaya",
    location: "Mumbai",
    languages: "English, Hindi",
    image: "https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg",
    Fees: 1000
  },
  {
    name: "Dr. Sanya Kapoor",
    specialty: "Psychiatry",
    experience: "14 years",
    hospital: "NIMHANS",
    location: "Thane",
    languages: "English, Hindi",
    image: "https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg",
    Fees: 2500
  },
  {
    name: "Dr. Kunal Joshi",
    specialty: "Neurology",
    experience: "7 years",
    hospital: "Kokilaben Dhirubhai Ambani Hospital",
    location: "Mumbai",
    languages: "English, Hindi, Marathi",
    image: "https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg",
    Fees: 5000
  },
  {
    name: "Dr. Parul Thakkar",
    specialty: "Dermatology",
    experience: "9 years",
    hospital: "Thakkar Hospital",
    location: "Mumbai",
    languages: "English, Hindi",
    image: "https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg",
    Fees: 2000
  },
  {
    name: "Dr. Rahul Nair",
    specialty: "Gastroenterology",
    experience: "16 years",
    hospital: "Aster Medcity",
    location: "Thane",
    languages: "English, Hindi",
    image: "https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg",
    Fees: 3500
  },
  {
    name: "Dr. Meera Iyer",
    specialty: "Psychiatry",
    experience: "11 years",
    hospital: "CMC",
    location: "Mumbai",
    languages: "English, Hindi",
    image: "https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg",
    Fees: 2500
  },
];




function MainDoctors() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const filteredDoctors = doctors.filter((doctor) => {
    const experienceYears = parseInt(doctor.experience); // Extract numeric value
    return (
      (selectedSpecialty === "" || doctor.specialty.includes(selectedSpecialty)) &&
      (selectedExperience === "" || experienceYears >= parseInt(selectedExperience)) &&
      (selectedLocation === "" || doctor.location.includes(selectedLocation))
    );
  });
  

  return (
    <div>
      <section className="bg-white py-10 px-10">
        <h2 className="text-3xl font-bold text-teal-700 p-4">OUR DOCTORS</h2>

        {/* Filters */}
        <div className="flex gap-4 mb-6">
          <select
            className="border px-4 py-2 rounded"
            onChange={(e) => setSelectedSpecialty(e.target.value)}
            value={selectedSpecialty}
          >
            <option value="">All Specialties</option>
            {[...new Set(doctors.flatMap((doctor) => doctor.specialty.split(", ")))].map((specialty) => (
              <option key={specialty} value={specialty}>{specialty}</option>
            ))}
          </select>
          <select
            className="border px-4 py-2 rounded"
            onChange={(e) => setSelectedExperience(e.target.value)}
            value={selectedExperience}
          >
            <option value="">All Experience Levels</option>
            <option value="1">1+ years</option>
            <option value="5">5+ years</option>
            <option value="10">10+ years</option>
            <option value="15">15+ years</option>
          </select>
          <select
            className="border px-4 py-2 rounded"
            onChange={(e) => setSelectedLocation(e.target.value)}
            value={selectedLocation}
          >
            <option value="">All Locations</option>
            {[...new Set(doctors.map((doctor) => doctor.location))].map((location) => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-6 p-4">
          {filteredDoctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg w-full flex items-center gap-6 hover:scale-105 transition"
            >
              {/* Doctor Image (Left) */}
              <img
                src={doctor.image}
                alt={doctor.name}
                className="rounded-full w-24 h-24 object-cover"
              />

              {/* Doctor Info (Right) */}
              <div className="flex flex-col text-left w-full">
                <h3 className="text-teal-700 text-lg font-semibold">{doctor.name}</h3>
                <p className="text-gray-600 text-sm">{doctor.specialty} | {doctor.experience} exp</p>
                <p className="text-gray-600 text-sm">{doctor.hospital}</p>
                <p className="text-gray-600 text-sm">📍 {doctor.location}</p>
                <p className="text-gray-600 text-sm">Languages: {doctor.languages}</p>
                <Link to="/book-appointment" state={{ doctor }}>
                <button
                  className="mt-4 bg-teal-700 text-white px-4 py-2 rounded-md hover:bg-white hover:text-teal-700 border-2 border-teal-700 self-start"
                >
                  BOOK APPOINTMENT
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MainDoctors;
