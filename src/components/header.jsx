import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [username, setUsername] = useState("User Name");
  const [profileImage, setProfileImage] = useState(null);
  const dropdownRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
    
    // Fetch username from backend if logged in
    if (token) {
      fetchUserData();
    }
    
    // Load saved profile image from localStorage
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
      setProfileImage(savedImage);
    }

    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    // Listen for storage changes (login/logout from other tabs or after navigation)
    const handleStorageChange = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
      if (token) {
        fetchUserData();
      } else {
        setUsername("User Name");
        setProfileImage(null);
      }
    };

    // Listen for custom auth events
    const handleAuthChange = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
      if (token) {
        fetchUserData();
      } else {
        setUsername("User Name");
        setProfileImage(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("authChange", handleAuthChange);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, []);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:3000/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        setUsername(data.username || data.email || "User Name");
      }
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("profileImage");
    setIsLoggedIn(false);
    setShowDropdown(false);
    setProfileImage(null);
    setUsername("User Name");
    window.dispatchEvent(new Event("authChange"));
    navigate("/");
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result;
        setProfileImage(imageData);
        localStorage.setItem("profileImage", imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
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
          justifyContent: "right",
          padding: "0 30px",
          
        }}
      >
        <nav style={{ justifyContent: "right", display: "flex", gap: "30px",marginRight: "50px", }}>
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About Us" },
            { path: "/detection", label: "Detection" },
            { path: "/feedback", label: "Feedback" },
            
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

        {isLoggedIn ? (
          <div style={{ position: "relative" }} ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "8px 16px",
                backgroundColor: "transparent",
                color: "#fff",
                border: "2px solid #4F46E5",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                {profileImage ? (
                  <img src={profileImage} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <span style={{ fontSize: "16px", color: "#4F46E5" }}>👤</span>
                )}
              </div>
              <span>{username}</span>
            </button>

            {showDropdown && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 10px)",
                  right: 0,
                  backgroundColor: "#0a0a2e",
                  border: "2px solid #4F46E5",
                  borderRadius: "12px",
                  padding: "16px",
                  minWidth: "250px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                  zIndex: 1001,
                }}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
                
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px",
                    backgroundColor: "transparent",
                    border: "2px solid #4F46E5",
                    borderRadius: "8px",
                    marginBottom: "12px",
                  }}
                >
                  <div
                    onClick={handleImageClick}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      overflow: "hidden",
                    }}
                  >
                    {profileImage ? (
                      <img src={profileImage} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    ) : (
                      <span style={{ fontSize: "20px", color: "#4F46E5" }}>👤</span>
                    )}
                  </div>
                  <span style={{ color: "#fff", fontWeight: "bold", flex: 1 }}>{username}</span>
                </div>

                <button
                  onClick={() => setShowDropdown(false)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "1px solid #4F46E5",
                    borderRadius: "8px",
                    cursor: "pointer",
                    marginBottom: "8px",
                    fontWeight: "500",
                  }}
                >
                  Switch account(s)
                </button>

                <button
                  onClick={handleImageClick}
                  style={{
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "1px solid #4F46E5",
                    borderRadius: "8px",
                    cursor: "pointer",
                    marginBottom: "8px",
                    fontWeight: "500",
                  }}
                >
                  📷 Upload Profile Picture
                </button>

                <button
                  onClick={handleLogout}
                  style={{
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "1px solid #4F46E5",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                >
                  Log out
                </button>
              </div>
            )}
          </div>
        ) : (
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
        )}
      </div>
    </header>
  );
}

export default Header;