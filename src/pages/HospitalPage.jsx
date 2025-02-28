import React from "react";
import Header from "./components/Header"; 
import MainHospitals from "./components/MainHospitals";
import NavBar from "./components/NavBar";

function HospitalPage(){
    return(
        <div>
            <Header/>
            <NavBar/>
            <MainHospitals/>
        </div>
    );
}
export default HospitalPage;