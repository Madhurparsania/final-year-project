import React from 'react'
import './ArtifactCard.css'

const ArtifactCard = ({ artifact }) => {
  return (
    <div className="artifact-card">
      <div className="artifact-image">
        <img src={artifact.image} alt={artifact.name} />
      </div>
      <div className="artifact-content">
        <h4>{artifact.name}</h4>
        <p>{artifact.description}</p>
      </div>
    </div>
  )
}

export default ArtifactCard
