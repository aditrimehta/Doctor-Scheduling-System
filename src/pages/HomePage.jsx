import React ,{useState} from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import AboutUs from "./components/AboutUs";


function HomePage (){
  const [isAuthenticated, setIsAuthenticated] = useState(false);
    return(
    <div className="bg-gray-100">
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Services />
      <Doctors />
      <AboutUs />
    </div>
    );
}
export default HomePage;