import React from 'react'

export default function Controls(props) {
  return (
  <div className="controls">
    <i className="fas fa-angle-left" onClick={props.handlePrev}></i>
    <i className="fas fa-angle-right" onClick={props.handleNext}></i>
  </div>
  )
}
