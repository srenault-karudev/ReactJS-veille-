import React from 'react'

import './Card.css'

const Card = ({ card, feedback, onClick }) => (
    <div className={`card ${feedback}`} onClick={() => onClick(card)}>
    <span className="symbol">
      {feedback === 'hidden' ? 'tesr' : card}
    </span>
    </div>
)

export default Card




