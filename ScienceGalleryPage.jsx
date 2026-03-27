import React from 'react'
import ArtifactCard from '../components/ArtifactCard'
import './MuseumPage.css'

const ScienceGalleryPage = () => {
  const artifacts = [
    {
      id: 1,
      name: 'Quantum Computing Exhibit',
      description: 'Interactive display explaining quantum superposition and entanglement with live demonstrations.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 2,
      name: 'Bio-Art Installation',
      description: 'Living artwork exploring the intersection of biology and art through microbial cultures.',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 3,
      name: 'Climate Change Visualization',
      description: 'Real-time data visualization of global climate patterns and environmental changes.',
      image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 4,
      name: 'Neuroscience Lab',
      description: 'Interactive brain scanning and neural activity demonstrations with EEG technology.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    }
  ]

  const timings = [
    { day: 'Monday', time: 'Closed' },
    { day: 'Tuesday - Friday', time: '10:00 AM - 6:00 PM' },
    { day: 'Saturday - Sunday', time: '9:00 AM - 7:00 PM' },
    { day: 'Public Holidays', time: '9:00 AM - 7:00 PM' }
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
          <h1>Science Gallery <span>Bangalore</span></h1>
          
          <div className="museum-meta">
            <div className="meta-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Indian Institute of Science, Bangalore - 560012</span>
            </div>
            <div className="meta-item">
              <i className="fas fa-phone"></i>
              <span>+91 80 2293 2000</span>
            </div>
            <div className="meta-item">
              <i className="fas fa-envelope"></i>
              <span>info@sciencegallerybangalore.org</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="museum-content">
          <div>
            <section className="artifacts-section">
              <h2>Featured Exhibits & Artifacts</h2>
              <p>
                Science Gallery Bangalore brings together the best of science, art, and technology 
                through cutting-edge exhibitions that challenge perceptions and inspire innovation.
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
              <p>Indian Institute of Science Campus, CV Raman Road, Bangalore</p>
              <div className="location-map">
                <span>Interactive Map Location</span>
              </div>
            </div>

            <div className="info-card">
              <h3>
                <i className="fas fa-ticket-alt"></i>
                Ticket Information
              </h3>
              <p><strong>Adults:</strong> ₹200</p>
              <p><strong>Students:</strong> ₹100 (with valid ID)</p>
              <p><strong>Children (under 12):</strong> Free</p>
              <p><strong>Family Pass (4 persons):</strong> ₹500</p>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}

export default ScienceGalleryPage
