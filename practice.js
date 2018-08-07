import React from 'react'
import PracticeCard from './practice-card'
import Controls from './practice-controls'
import ProgressBar from './progress-bar'

export default class Practice extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCard: 0,
      answerIsShown: false
    }
    this.handleShowAnswer = this.handleShowAnswer.bind(this)
    this.handlePrev = this.handlePrev.bind(this)
    this.handleNext = this.handleNext.bind(this)
  }
  handleShowAnswer() {
    this.setState(prevState => {
      return {answerIsShown: !prevState.answerIsShown}
    })
  }
  handlePrev() {
    const {flashcards} = this.props
    const {currentCard} = this.state
    this.setState({
      currentCard: currentCard === 0 ? flashcards.length - 1 : currentCard - 1,
      answerIsShown: false
    })
  }
  handleNext() {
    const {flashcards} = this.props
    const {currentCard} = this.state
    this.setState({
        currentCard: currentCard === flashcards.length - 1 ? 0 : currentCard + 1,
        answerIsShown: false
    })
  }
  render() {
    const {currentCard, answerIsShown} = this.state
    const {flashcards} = this.props
    const currentFlashcard = flashcards[currentCard]
    const topic = currentFlashcard.topic
    const question = currentFlashcard.question
    const answer = currentFlashcard.answer
    const progress = Math.round(((currentCard + 1) / flashcards.length) * 100)
    return (
      <div>
        <PracticeCard topic={topic} question={question} answer={answer} answerIsShown={answerIsShown} handleShowAnswer={this.handleShowAnswer} flashcards={this.props.flashcards}/>
        <Controls handlePrev={this.handlePrev} handleNext={this.handleNext} handleCorrectAttempt={this.props.handleCorrectAttempt}/>
        <ProgressBar progress={progress}/>
      </div>
    )
  }
}
