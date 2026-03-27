import React from 'react'
import MuseumCard from '../components/MuseumCard'
import './HomePage.css'

const HomePage = () => {
  const museums = [
    {
      id: 1,
      name: 'Science Gallery Bangalore',
      location: 'Indian Institute of Science, Bangalore',
      description: 'Interactive exhibitions blending science, art, and technology with cutting-edge displays and workshops.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '/science-gallery'
    },
    {
      id: 2,
      name: 'HAL Aerospace Museum',
      location: 'HAL Airport Road, Bangalore',
      description: 'India\'s premier aerospace museum featuring historic aircraft, helicopters, and aviation artifacts.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: '/hal-museum'
    }
  ]

  const features = [
    {
      icon: 'fas fa-microscope',
      title: 'Interactive Exhibits',
      description: 'Hands-on experiences for all ages'
    },
    {
      icon: 'fas fa-plane',
      title: 'Aviation History',
      description: 'Rare aircraft and aviation artifacts'
    },
    {
      icon: 'fas fa-calendar-alt',
      title: 'Events & Workshops',
      description: 'Regular educational programs'
    },
    {
      icon: 'fas fa-map-marked-alt',
      title: 'Easy Access',
      description: 'Convenient locations in Bangalore'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Discover Bangalore's <span className="gold">Cultural Heritage</span></h1>
          <p>Explore world-class museums showcasing science, technology, and aviation history through immersive exhibits and rare artifacts.</p>
          <a href="#museums" className="btn btn-primary">Explore Museums</a>
        </div>
      </section>

      {/* Museums Section */}
      <section className="section-padding" id="museums">
        <div className="container">
          <h2 className="section-title">Featured Museums</h2>
          <div className="museums-grid">
            {museums.map((museum) => (
              <MuseumCard key={museum.id} museum={museum} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section-padding">
        <div className="container">
          <h2 className="section-title">Why Visit Our Museums</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature">
                <i className={feature.icon}></i>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
