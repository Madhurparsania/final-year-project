import React from 'react'
import ArtifactCard from '../components/ArtifactCard'
import './MuseumPage.css'

const HALMuseumPage = () => {
  const artifacts = [
    {
      id: 1,
      name: 'MiG-21 Fighter Jet',
      description: 'Iconic Soviet-era fighter aircraft used by Indian Air Force with detailed cockpit access.',
      image: 'https://images.unsplash.com/photo-1587166982691-5d43b4b8d245?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      name: 'Dhruv Helicopter',
      description: 'Indigenous multi-role helicopter developed by HAL with interactive cockpit simulation.',
      image: 'https://images.unsplash.com/photo-1584447125056-9c7892c1a50e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      name: 'Aero Engine Display',
      description: 'Collection of historical aircraft engines with cutaway models and working demonstrations.',
      image: 'https://images.unsplash.com/photo-1580273917936-b1a6b0cf6eb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 4,
      name: 'Flight Simulator',
      description: 'Professional-grade flight simulator offering realistic flying experience for visitors.',
      image: 'https://images.unsplash.com/photo-1578667521409-0c2e3f1c42a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    }
  ]

  const timings = [
    { day: 'Monday', time: '9:00 AM - 5:00 PM' },
    { day: 'Tuesday', time: '9:00 AM - 5:00 PM' },
    { day: 'Wednesday', time: '9:00 AM - 5:00 PM' },
    { day: 'Thursday', time: '9:00 AM - 5:00 PM' },
    { day: 'Friday', time: '9:00 AM - 5:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 5:00 PM' },
    { day: 'Sunday', time: '9:00 AM - 5:00 PM' }
  ]

  return (
    <>
      <div className="museum-header">
        <div className="container">
          <div className="back-home">
            <a href="/" className="btn btn-outline">
              <i className="fas fa-arrow-left"></i> Back to Home
            </a>
          </div>
          <h1>HAL <span>Aerospace Museum</span></h1>
          
          <div className="museum-meta">
            <div className="meta-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>HAL Airport Road, Bangalore - 560017</span>
            </div>
            <div className="meta-item">
              <i className="fas fa-phone"></i>
              <span>+91 80 2232 3030</span>
            </div>
            <div className="meta-item">
              <i className="fas fa-envelope"></i>
              <span>info@halmuseum.org</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="museum-content">
          <div>
            <section className="artifacts-section">
              <h2>Aircraft & Exhibits</h2>
              <p>
                India's first aerospace museum showcasing the glorious history of Indian aviation 
                with actual aircraft, helicopters, engines, and flight simulators.
              </p>
              
              <div className="artifacts-grid">
                {artifacts.map((artifact) => (
                  <ArtifactCard key={artifact.id} artifact={artifact} />
                ))}
              </div>
            </section>
          </div>

          <aside className="museum-sidebar">
            <div className="info-card">
              <h3>
                <i className="fas fa-clock"></i>
                Visiting Hours
              </h3>
              <table className="timing-table">
                <tbody>
                  {timings.map((timing, index) => (
                    <tr key={index}>
                      <td>{timing.day}</td>
                      <td>{timing.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="info-card">
              <h3>
                <i className="fas fa-map-marker-alt"></i>
                Location
              </h3>
              <p>HAL Airport Road, Near HAL Police Station, Bangalore</p>
              <div className="location-map">
                <span>Interactive Map Location</span>
              </div>
            </div>

            <div className="info-card">
              <h3>
                <i className="fas fa-ticket-alt"></i>
                Ticket Information
              </h3>
              <p><strong>Adults:</strong> ₹150</p>
              <p><strong>Children (5-18 years):</strong> ₹75</p>
              <p><strong>Students (with ID):</strong> ₹50</p>
              <p><strong>Photography:</strong> ₹50 (Additional)</p>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}

export default HALMuseumPage
