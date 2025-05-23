import React from "react";
import { useNavigate } from "react-router-dom";

const services = [
  { name: "Find Doctor", icon: "logos/doctor.png",link: "/doctorpage" },
  { name: "Find Hospital", icon: "logos/hospital.png", link: "/hospitalpage" },
  { name:"Testimonials", icon: "logos/checkup.png" ,link: "/testimonials"},
  { name: "Buy Medicine", icon: "logos/medicine.png",link:"/buymedicines" }
];


const Services = () => {
  const navigate = useNavigate(); 
  return (
    <section className="text-center py-10 pb-16">
      <h2 className="text-3xl font-bold text-teal-700 mb-6">OUR SERVICES</h2>
      <div className="flex flex-wrap justify-center gap-12">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 shadow-lg w-[35%] text-center hover:scale-110 transition" onClick={() => service.link && navigate(service.link)} >
            <img src={service.icon} alt={service.name} className="mx-auto mb-4 h-12" />
            <p className="text-gray-700">{service.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;