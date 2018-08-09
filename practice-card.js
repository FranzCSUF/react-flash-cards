import React from 'react'
import Controls from './practice-controls'
import ProgressBar from './progress-bar'

export default function PracticeCard(props) {
let transitionClass
if (props.transition === 'next') {
  transitionClass = 'slideInLeft'
}
if (props.transition === 'prev') {
  transitionClass = 'slideInRight'
}
if (props.transition === 'transition-prev') {
  transitionClass = 'slideOutRight'
}
if (props.transition === 'transition-next') {
  transitionClass = 'slideOutLeft'
}
  return (
    <div className='card-container container col-md-5'>
      <div className={'card text-white bg-dark mb-3 flash-card ' + transitionClass} id='flashcard' key={props.index}>
        <div className='card-header'>{props.topic}</div>
        <div className='card-body practice-card'>
          <h5 className='card-title' id='practice-question'>{props.question}</h5>
          {!props.answerIsShown &&
          <div className='show-answer-container'>
            <i className='fas fa-arrow-circle-right show-answer-icon show-hidden' onClick={props.handleShowAnswer}></i>
            <h6 className='show-answer-label'>Show answer</h6>
          </div>
          }
          {props.answerIsShown &&
            <div className='show-answer-container'>
              <i className='fas fa-arrow-circle-right show-answer-icon show-active' onClick={props.handleShowAnswer}></i>
              <h6 className='show-answer-label'>Hide answer</h6>
              <p className='card-text' id='practice-answer'>{props.answer}</p>
            </div>
          }
        </div>
      </div>
      <Controls handlePrev={props.handlePrev} handleNext={props.handleNext} handleCorrectAttempt={props.handleCorrectAttempt} handleFailedAttempt={props.handleFailedAttempt}/>
      <ProgressBar progress={props.progress}/>
    </div>
  )
}
