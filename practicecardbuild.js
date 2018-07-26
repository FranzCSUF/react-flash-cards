import React from 'react'

export default function PracticeCardBuild(props) {
  return (
    <div className="card-section">
      <div className="card text-white bg-dark mb-3" id="flashcard" key={props.index}>
        <div className="card-header"></div>
        <div className="card-body">
          <h5 className="card-title">{props.question}</h5>
          <p className="card-text">{props.answer}</p>
        </div>
      </div>
    </div>
  )
}
