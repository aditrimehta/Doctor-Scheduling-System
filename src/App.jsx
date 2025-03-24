import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";
import DoctorPage from "./pages/DoctorPage";
import HospitalPage from "./pages/HospitalPage";
import BookAppointment from "./pages/BookAppointment";
import TestimonialPage from "./pages/TestimonialPage";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctorpage" element={<DoctorPage />} />
        <Route path="/hospitalpage" element={<HospitalPage/>} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/testimonials" element={<TestimonialPage />} />
      </Routes>
    </Router>
  );
}

export default App;
