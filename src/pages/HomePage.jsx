import React  from "react";

import Services from "./components/Services";
import Doctors from "./components/Doctors";
import AboutUs from "./components/AboutUs";


function HomePage (){

    return(
    <div className="bg-gray-100">
      
      <Services />
      <Doctors />
      <AboutUs />
    </div>
    );
}
export default HomePage;