import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-200  bg-opacity-75 py-10 flex justify-between items-center px-10">
      <div className="w-2/3">
        <h2 className="text-3xl font-bold text-teal-700 mb-4">Why Choose DocMeet?</h2>
        <p className="text-gray-600 text-lg">Established by Selly, Aditri, and Khushi in 2025, DocMeet has a robust presence across the healthcare ecosystem. From routine wellness & preventive health care to innovative life-saving treatments and diagnostic services, Apollo Hospitals has touched more than 200 million lives from over 150 countries.</p>
      </div>
      <div className="w-1/3 flex justify-center">
        <img src="https://thumbs.dreamstime.com/b/d-illustration-three-female-doctors-white-background-d-illustration-three-female-doctors-white-background-257537748.jpg" alt="About Us" className=" w-full max-w-xs" />
      </div>
    </section>
  );
};

export default AboutUs;
