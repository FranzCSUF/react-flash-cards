import React from 'react'

export default function Controls(props) {
  return (
    <div className="practice-controls">
      <i className="fas fa-angle-left prev-slider" onClick={props.handlePrev}></i>
      <i className="fas fa-times-circle failed-icon" onClick={props.handleFailedAttempt}></i>
      <i className="fas fa-angle-right next-slider" onClick={props.handleNext}></i>
      <i className="fas fa-check-circle correct-icon" onClick={props.handleCorrectAttempt}></i>
    </div>
  )
}
