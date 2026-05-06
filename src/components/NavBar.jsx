import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Re-check localStorage on every route change
    const stored = localStorage.getItem("user");
    setUser(stored ? JSON.parse(stored) : null);
  }, [location]); // 👈 runs every time the page changes

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <NavLink to="/">LoanAptech</NavLink>
        </div>
        <ul className="navbar-links">
          <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
          <li><NavLink to="/loans" className={({ isActive }) => isActive ? "active" : ""}>Loans</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>

          {/* 👇 Toggle between Login and Logout */}
          {user ? (
            <li>
              <button onClick={handleLogout} className="nav-logout-btn">Logout</button>
            </li>
          ) : (
            <li>
              <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>Login</NavLink>
            </li>
          )}
        </ul>

        <div className="navbar-cta">
          {/* 👇 Hide Sign Up when logged in */}
          {!user && <NavLink to="/signup" className="btn-signup">Sign Up</NavLink>}
        </div>
      </div>
    </nav>
  );
}