import React from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import AboutUs from "./components/AboutUs";


function HomePage (){
    return(
    <div>
      <Header />
      <Services />
      <Doctors />
      <AboutUs />
    </div>
    );
}
export default HomePage;