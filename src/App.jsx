import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from "react-router-dom";

import Home from "./pages/home.jsx";
import AboutUs from "./pages/Aboutus.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Detection from "./pages/detection.jsx";
import Feedback from "./pages/feedback.jsx";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";

function AppContent() {
  const location = useLocation();
  const hideFooter = location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detection" element={<Detection />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </main>
      {!hideFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}