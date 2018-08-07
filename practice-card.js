import React from 'react'

export default function PracticeCard(props) {
  return (
    <div className="card-container">
      <div className="card text-white bg-dark mb-3 flash-card" id="flashcard" key={props.index}>
        <div className="card-header">{props.topic}</div>
        <div className="card-body practice-card">
          <h5 className="card-title" id='practice-question'>{props.question}</h5>
          {!props.answerIsShown &&
            <i className="fas fa-arrow-circle-right show-answer-icon" onClick={props.handleShowAnswer}><span className="show-answer-label">Show answer</span></i>
          }
          {props.answerIsShown &&
            <React.Fragment>
              <i className="fas fa-arrow-circle-down show-answer-icon" onClick={props.handleShowAnswer}><span className="show-answer-label">Hide answer</span></i>
              <p className="card-text" id="practice-answer">{props.answer}</p>
            </React.Fragment>
          }
        </div>
      </div>
    </div>
  )
}
