import React from 'react'

export default function PracticeCardBuild(props) {
  return (
    <div className="card-section">
      <div className="card text-white bg-dark mb-3" id="flashcard" key={props.index}>
        <div className="card-header"></div>
        <div className="card-body">
          <h5 className="card-title">{props.question}</h5>
          {!props.answerIsShown &&
            <i className="fas fa-arrow-circle-right show-answer-icon" onClick={props.handleShowAnswer}><span className="show-answer-label">Show answer</span></i>
          }
          {props.answerIsShown &&
            <React.Fragment>
              <i className="fas fa-arrow-circle-down show-answer-icon" onClick={props.handleShowAnswer}><span className="show-answer-label">Show answer</span></i>
              <p className="card-text" id="practice-answer">{props.answer}</p>
            </React.Fragment>
          }
        </div>
      </div>
    </div>
  )
}
