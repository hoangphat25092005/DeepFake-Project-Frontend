import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from "react-router-dom";

import Home from "./pages/home.jsx";
import AboutUs from "./pages/Aboutus.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Detection from "./pages/detection.jsx";

// Tạo một component riêng cho Header
function Header() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        height: "77px",
        backgroundColor: "#16145C",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "1920px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
        }}
      >
        <div style={{ color: "#fff", fontWeight: "bold", fontSize: "20px" }}>
          DeepVision
        </div>

        <nav style={{ display: "flex", gap: "30px" }}>
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About Us" },
            { path: "/detection", label: "Detection" },
            
          ].map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                color: "#fff",
                textDecoration: "none",
                borderBottom: isActive ? "2px solid #4F46E5" : "none",
                paddingBottom: "2px",
              })}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={handleLoginClick}
          style={{
            padding: "8px 16px",
            backgroundColor: "#fff",
            color: "#4F46E5",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Login
        </button>
      </div>
    </header>
  );
}

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
    </Router>
  );
}