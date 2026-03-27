import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>Bangalore Museums</h3>
            <p>Your gateway to exploring the scientific and aviation heritage of Bangalore through immersive museum experiences.</p>
            <div className="social">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/science-gallery">Science Gallery</Link>
            <Link to="/hal-museum">HAL Museum</Link>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <p><i className="fas fa-map-marker-alt"></i> Bangalore, India</p>
            <p><i className="fas fa-phone"></i> +91 80 1234 5678</p>
            <p><i className="fas fa-envelope"></i> info@museums.in</p>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; 2023 Bangalore Museums. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
