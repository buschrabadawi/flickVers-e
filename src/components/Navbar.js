import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logop.jpg";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo + Title */}
      <div className="navbar-left">
        <Link to="/" className="logo-link" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="FlickVerse Logo" className="navbar-logo" />
          <span className="navbar-title">FlickVerse</span>
        </Link>
      </div>

      {/* Hamburger Menu */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Links */}
      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/movies" onClick={() => setMenuOpen(false)}>Movies</Link>
        <Link to="/shows" onClick={() => setMenuOpen(false)}>Shows</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;

