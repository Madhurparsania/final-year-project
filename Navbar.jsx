import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="logo">
            <i className="fas fa-landmark"></i>
            <span>Bangalore</span>Museums
          </Link>

          <button className="menu-toggle" onClick={toggleMenu}>
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>

          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/" className={isActive('/') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/science-gallery" className={isActive('/science-gallery') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>
              Science Gallery
            </Link>
            <Link to="/hal-museum" className={isActive('/hal-museum') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>
              HAL Museum
            </Link>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
