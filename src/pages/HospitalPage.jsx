import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header"; 
import MainHospitals from "./components/MainHospitals";
import NavBar from "./components/NavBar";
import HospitalDetails from "./components/HospitalDetailsPage"; // Import the details page

function HospitalPage() {
    return (
        <>
            <Header />
            <NavBar />
            <Routes>
                <Route path="/" element={<MainHospitals />} />
                <Route path="/hospital/:name" element={<HospitalDetails />} />
            </Routes>
        </>
    );
}

export default HospitalPage;
