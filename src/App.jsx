import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";
import DoctorPage from "./pages/DoctorPage";
import HospitalPage from "./pages/HospitalPage";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctorpage" element={<DoctorPage />} />
        <Route path="/hospitalpage" element={<HospitalPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
