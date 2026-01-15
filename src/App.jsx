import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/home.jsx";
import AboutUs from "./pages/Aboutus.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Detection from "./pages/detection.jsx";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detection" element={<Detection />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}