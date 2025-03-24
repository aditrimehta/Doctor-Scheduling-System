import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

const medicineSites = [
  {
    name: "Netmeds",
    url: "https://www.netmeds.com/",
    description: "One of India's most trusted online pharmacies with a wide range of medicines and healthcare products.",
  },
  {
    name: "PharmEasy",
    url: "https://pharmeasy.in/",
    description: "Order medicines, healthcare products, and book lab tests online with great discounts.",
  },
  {
    name: "1mg",
    url: "https://www.1mg.com/",
    description: "Comprehensive healthcare platform offering medicines, lab tests, and doctor consultations.",
  },
];

function BuyMedicine() {
  return (
    <>
      <Header />
      <NavBar />
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8 border">
        <h2 className="text-3xl font-bold text-teal-700 mb-4">Buy Medicines Online</h2>
        <p className="text-gray-600 mb-6">Browse through these trusted online pharmacies to purchase medicines and healthcare products.</p>

        {/* Medicine Sites List */}
        <div className="flex flex-col gap-6">
          {medicineSites.map((site, index) => (
            <div key={index} className="bg-white p-6 shadow-lg w-full flex flex-col gap-2 hover:scale-105 transition">
              <h3 className="text-teal-700 text-lg font-semibold">{site.name}</h3>
              <p className="text-gray-600 text-sm">{site.description}</p>
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 bg-teal-700 text-white px-4 py-2 rounded-md hover:bg-white hover:text-teal-700 border-2 border-teal-700 self-start"
              >
                Visit Site →
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BuyMedicine;
