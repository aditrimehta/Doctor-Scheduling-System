import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";
import DoctorPage from "./pages/DoctorPage";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctorpage" element={<DoctorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
