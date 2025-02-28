import React from "react";
import Header from "./components/Header";
import MainDoctors from "./components/MainDoctors"; 
import NavBar from "./components/NavBar";
function DoctorPage(){
    return(
        <div>
            <Header/>
            <NavBar/>
            <MainDoctors/>
        </div>
    );
}
export default DoctorPage;