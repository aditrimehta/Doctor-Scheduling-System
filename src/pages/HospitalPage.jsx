import React from "react";
import Header from "./components/Header"; 
import MainHospitals from "./components/MainHospitals";
import HospitalFilter from "./components/HospitalFilter";
function HospitalPage(){
    return(
        <div>
            <Header/>
            
            <MainHospitals/>
        </div>
    );
}
export default HospitalPage;