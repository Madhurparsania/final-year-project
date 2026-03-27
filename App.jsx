import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav style={styles.nav}>
        <div className="container">
          <div style={styles.navContent}>
            <a href="#" style={styles.logo}>
              <i className="fas fa-landmark"></i>
              <span style={{ color: '#D4AF37' }}>Bangalore</span>Museums
            </a>
            <div style={styles.navLinks}>
              <a href="#home">Home</a>
              <a href="#museums">Museums</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={styles.hero}>
        <div className="container">
          <h1 style={styles.heroTitle}>
            Discover Bangalore's <span style={{ color: '#D4AF37' }}>Cultural Heritage</span>
          </h1>
          <p style={styles.heroSubtitle}>
            Explore world-class museums showcasing science, technology, and aviation history through immersive exhibits.
          </p>
          <a href="#museums" style={styles.btnPrimary}>
            Explore Museums
          </a>
        </div>
      </section>

      {/* Museums Section */}
      <section id="museums" style={styles.section}>
        <div className="container">
          <h2 style={styles.sectionTitle}>Featured Museums</h2>
          
          <div style={styles.museumsGrid}>
            {/* Science Gallery */}
            <div style={styles.museumCard}>
              <div style={styles.cardImage}>
                <img 
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Science Gallery" 
                  style={styles.cardImg}
                />
              </div>
              <div style={styles.cardContent}>
                <h3>Science Gallery Bangalore</h3>
                <div style={styles.location}>
                  <i className="fas fa-map-marker-alt"></i>
                  Indian Institute of Science, Bangalore
                </div>
                <p>Interactive exhibitions blending science, art, and technology with cutting-edge displays.</p>
                <a href="#" style={styles.btnOutline}>
                  Visit Museum
                </a>
              </div>
            </div>

            {/* HAL Museum */}
            <div style={styles.museumCard}>
              <div style={styles.cardImage}>
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="HAL Museum" 
                  style={styles.cardImg}
                />
              </div>
              <div style={styles.cardContent}>
                <h3>HAL Aerospace Museum</h3>
                <div style={styles.location}>
                  <i className="fas fa-map-marker-alt"></i>
                  HAL Airport Road, Bangalore
                </div>
                <p>India's premier aerospace museum featuring historic aircraft and aviation artifacts.</p>
                <a href="#" style={styles.btnOutline}>
                  Visit Museum
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" style={styles.footer}>
        <div className="container">
          <div style={styles.footerGrid}>
            <div style={styles.footerSection}>
              <h3>Bangalore Museums</h3>
              <p>Exploring scientific and aviation heritage through immersive experiences.</p>
            </div>
            <div style={styles.footerSection}>
              <h3>Contact</h3>
              <p><i className="fas fa-map-marker-alt"></i> Bangalore, India</p>
              <p><i className="fas fa-phone"></i> +91 80 1234 5678</p>
              <p><i className="fas fa-envelope"></i> info@museums.in</p>
            </div>
          </div>
          <div style={styles.copyright}>
            <p>&copy; 2023 Bangalore Museums. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Styles object
const styles = {
  nav: {
    backgroundColor: '#0A192F',
    padding: '1rem 0',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(10, 25, 47, 0.2)'
  },
  navContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    color: '#F8FAFC',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  navLinks: {
    display: 'flex',
    gap: '2rem'
  },
  navLinksA: {
    color: '#E2E8F0',
    textDecoration: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px'
  },
  hero: {
    background: 'linear-gradient(rgba(10, 25, 47, 0.9), rgba(10, 25, 47, 0.9))',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#F8FAFC',
    padding: '8rem 0 5rem',
    textAlign: 'center',
    marginTop: '60px'
  },
  heroTitle: {
    fontSize: '3.5rem',
    marginBottom: '1.5rem'
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    maxWidth: '800px',
    margin: '0 auto 2rem',
    color: '#E2E8F0'
  },
  btnPrimary: {
    display: 'inline-block',
    padding: '0.8rem 2rem',
    backgroundColor: '#1E3A8A',
    color: '#F8FAFC',
    textDecoration: 'none',
    borderRadius: '4px',
    fontWeight: '600',
    transition: 'all 0.3s ease'
  },
  section: {
    padding: '5rem 0'
  },
  sectionTitle: {
    textAlign: 'center',
    marginBottom: '3rem',
    fontSize: '2.5rem',
    color: '#0A192F'
  },
  museumsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem'
  },
  museumCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease'
  },
  cardImage: {
    height: '250px',
    overflow: 'hidden'
  },
  cardImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  cardContent: {
    padding: '1.5rem'
  },
  location: {
    color: '#1E3A8A',
    fontWeight: '600',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  btnOutline: {
    display: 'inline-block',
    padding: '0.8rem 2rem',
    backgroundColor: 'transparent',
    color: '#1E3A8A',
    border: '2px solid #1E3A8A',
    textDecoration: 'none',
    borderRadius: '4px',
    fontWeight: '600',
    transition: 'all 0.3s ease'
  },
  footer: {
    backgroundColor: '#0A192F',
    color: '#F8FAFC',
    padding: '4rem 0 2rem',
    marginTop: '4rem'
  },
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '3rem',
    marginBottom: '3rem'
  },
  footerSection: {
    marginBottom: '2rem'
  },
  copyright: {
    textAlign: 'center',
    paddingTop: '2rem',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    color: '#E2E8F0',
    fontSize: '0.9rem'
  }
}

export default App
