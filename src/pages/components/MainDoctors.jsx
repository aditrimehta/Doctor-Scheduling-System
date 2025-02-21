import React from "react";

const doctors = [
  {
    name: "Dr. Abhijit Bagde",
    specialty: "Pediatrics, Critical Care",
    experience: "10 years",
    hospital: "Apollo Hospitals, Navi Mumbai",
    languages: "English, Hindi",
    image:
      "https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg",
  },
  {
    name: "Dr. Abhijit Bagde",
    specialty: "Pediatrics, Critical Care",
    experience: "10 years",
    hospital: "Apollo Hospitals, Navi Mumbai",
    languages: "English, Hindi",
    image:
      "https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg",
  },
  {
    name: "Dr. Abhijit Bagde",
    specialty: "Pediatrics, Critical Care",
    experience: "10 years",
    hospital: "Apollo Hospitals, Navi Mumbai",
    languages: "English, Hindi",
    image:
      "https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg",
  },
  {
    name: "Dr. Abhijit Bagde",
    specialty: "Pediatrics, Critical Care",
    experience: "10 years",
    hospital: "Apollo Hospitals, Navi Mumbai",
    languages: "English, Hindi",
    image:
      "https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg",
  },
  {
    name: "Dr. Abhijit Bagde",
    specialty: "Pediatrics, Critical Care",
    experience: "10 years",
    hospital: "Apollo Hospitals, Navi Mumbai",
    languages: "English, Hindi",
    image:
      "https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg",
  },
  {
    name: "Dr. Abhijit Bagde",
    specialty: "Pediatrics, Critical Care",
    experience: "10 years",
    hospital: "Apollo Hospitals, Navi Mumbai",
    languages: "English, Hindi",
    image:
      "https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg",
  },
  {
    name: "Dr. Abhijit Bagde",
    specialty: "Pediatrics, Critical Care",
    experience: "10 years",
    hospital: "Apollo Hospitals, Navi Mumbai",
    languages: "English, Hindi",
    image:
      "https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg",
  },
  {
    name: "Dr. Abhijit Bagde",
    specialty: "Pediatrics, Critical Care",
    experience: "10 years",
    hospital: "Apollo Hospitals, Navi Mumbai",
    languages: "English, Hindi",
    image:
      "https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg",
  },
  {
    name: "Dr. Abhijit Bagde",
    specialty: "Pediatrics, Critical Care",
    experience: "10 years",
    hospital: "Apollo Hospitals, Navi Mumbai",
    languages: "English, Hindi",
    image:
      "https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg",
  },
  {
    name: "Dr. Abhijit Bagde",
    specialty: "Pediatrics, Critical Care",
    experience: "10 years",
    hospital: "Apollo Hospitals, Navi Mumbai",
    languages: "English, Hindi",
    image:
      "https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg",
  },
  {
    name: "Dr. Abhijit Bagde",
    specialty: "Pediatrics, Critical Care",
    experience: "10 years",
    hospital: "Apollo Hospitals, Navi Mumbai",
    languages: "English, Hindi",
    image:
      "https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg",
  },
];

function MainDoctors() {
  return (
    <div>
      <section className="bg-white py-10 px-10">
        <h2 className="text-3xl font-bold text-teal-700 p-4">OUR DOCTORS</h2>
        <div className="flex flex-col gap-6 p-4">
        {doctors.map((doctor, index) => (
    <div 
      key={index} 
      className="bg-white p-6 shadow-lg rounded-lg w-full flex items-center gap-6 hover:scale-105 transition"
    >
      {/* Doctor Image (Left) */}
      <img 
        src={doctor.image} 
        alt={doctor.name} 
        className="rounded-full w-24 h-24 object-cover"
      />

      {/* Doctor Info (Right) */}
      <div className="flex flex-col text-left w-[full]">
        <h3 className="text-teal-700 text-lg font-semibold">{doctor.name}</h3>
        <p className="text-gray-600 text-sm">{doctor.specialty} | {doctor.experience} exp</p>
        <p className="text-gray-600 text-sm">{doctor.hospital}</p>
        <p className="text-gray-600 text-sm">Languages: {doctor.languages}</p>
        <button 
          className="mt-4 bg-teal-700 text-white px-4 py-2 rounded-md hover:bg-white hover:text-teal-700 border-2 border-teal-700 self-start"
        >
          BOOK APPOINTMENT
        </button>
      </div>
    </div>
  ))}
        </div>
      </section>
    </div>
  );
}
export default MainDoctors;
