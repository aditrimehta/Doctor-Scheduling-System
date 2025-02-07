import React from "react";

const doctors = [
  { name: "Dr. Abhijit Bagde", specialty: "Pediatrics, Critical Care", experience: "10 years", hospital: "Apollo Hospitals, Navi Mumbai", languages: "English, Hindi", image: "https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg" },
  { name: "Dr. Abhijit Bagde", specialty: "Pediatrics, Critical Care", experience: "10 years", hospital: "Apollo Hospitals, Navi Mumbai", languages: "English, Hindi", image: "https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg" },
  { name: "Dr. Abhijit Bagde", specialty: "Pediatrics, Critical Care", experience: "10 years", hospital: "Apollo Hospitals, Navi Mumbai", languages: "English, Hindi", image: "https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg" },
];

const Doctors = () => {
  return (
    <section className="bg-white py-10 text-center">
      <h2 className="text-3xl text-teal-700 mb-6">OUR TOP DOCTORS</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {doctors.map((doctor, index) => (
          <div key={index} className="bg-white p-6 shadow-lg rounded-lg w-64 text-center hover:scale-110 transition">
            <img src={doctor.image} alt={doctor.name} className="rounded-full w-20 mx-auto mb-4" />
            <h3 className="text-teal-700 text-lg font-semibold">{doctor.name}</h3>
            <p className="text-gray-600 text-sm">{doctor.specialty} | {doctor.experience} exp</p>
            <p className="text-gray-600 text-sm">{doctor.hospital}</p>
            <p className="text-gray-600 text-sm">Languages: {doctor.languages}</p>
            <button className="mt-4 bg-teal-700 text-white px-4 py-2 rounded-md hover:bg-white hover:text-teal-700 border-2 border-teal-700">BOOK APPOINTMENT</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;