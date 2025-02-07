import React from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import AboutUs from "./components/AboutUs";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <Services />
      <Doctors />
      <AboutUs />
    </div>
  );
}

export default App;
