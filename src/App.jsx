import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "./pages/components/Header.jsx";
import HomePage from "./pages/HomePage";
import DoctorPage from "./pages/DoctorPage";
import HospitalPage from "./pages/HospitalPage";
import BookAppointment from "./pages/BookAppointment";
import TestimonialPage from "./pages/TestimonialPage";
import Cart from "./pages/Cart";
import "./index.css";
import HospitalDetailsPage from "./pages/components/HospitalDetailsPage";
import BuyMedicine from "./pages/BuyMedicines";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // On first render, check localStorage
  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    if (storedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Update localStorage when auth state changes
  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);
  return (
    <Router>
      <Header
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctorpage" element={<DoctorPage />} />
        <Route path="/hospitalpage" element={<HospitalPage/>} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/testimonials" element={<TestimonialPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/buymedicines" element={<BuyMedicine />} />
        <Route path="/HospitalsDetailsPage" element={<HospitalDetailsPage/>}/>

      </Routes>
    </Router>
  );
} 

export default App;
