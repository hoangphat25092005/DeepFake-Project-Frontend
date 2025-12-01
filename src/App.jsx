import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/home.jsx";
import AboutUs from "./pages/Aboutus.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Detection from "./pages/detection.jsx";

export default function App() {
  return (
    <Router>
      {/* Header */}
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
          {/* Logo / Name trái */}
          <div style={{ color: "#fff", fontWeight: "bold", fontSize: "20px" }}>
            DeepVision
          </div>

          {/* Menu giữa */}
          <nav style={{ display: "flex", gap: "30px" }}>
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About Us" },
              { path: "/login", label: "Login" },
              { path: "/register", label: "Register" },
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
                  borderBottom: isActive ? "2px solid #4F46E5" : "none", // optional highlight active
                  paddingBottom: "2px",
                })}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Button phải */}
          <button
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

      {/* Main content */}
      <main style={{ padding: "20px" }}>
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
