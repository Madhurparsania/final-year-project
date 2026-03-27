import React from 'react'
import { Link } from 'react-router-dom'
import './MuseumCard.css'

const MuseumCard = ({ museum }) => {
  return (
    <div className="museum-card">
      <div className="card-image">
        <img src={museum.image} alt={museum.name} />
      </div>
      <div className="card-content">
        <h3>{museum.name}</h3>
        <div className="location">
          <i className="fas fa-map-marker-alt"></i>
          {museum.location}
        </div>
        <p>{museum.description}</p>
        <Link to={museum.link} className="btn btn-outline">
          Explore Museum
        </Link>
      </div>
    </div>
  )
}

export default MuseumCard
