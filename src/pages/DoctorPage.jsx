import React from "react";
import MainDoctors from "./components/MainDoctors"; 
import NavBar from "./components/NavBar";
function DoctorPage(){
    return(
        <div>
            <NavBar/>
            <MainDoctors/>
        </div>
    );
}
export default DoctorPage;