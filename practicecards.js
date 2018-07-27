import React from 'react'
import PracticeCardBuild from './practicecardbuild'
import Controls from './practicecontrols'
import ProgressBar from './progressbar'

export default class PracticeCards extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flashcards: props.flashcards,
      currentCard: 0,
      answerIsShown: false,
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
        answerIsShown: false,
    })
  }

  render() {
    const {flashcards} = this.state
    const {currentCard} = this.state
    const currentFlashcard = flashcards[this.state.currentCard]
    const question = currentFlashcard.question
    const answer = currentFlashcard.answer
    const {answerIsShown} = this.state
    const progress = Math.round(((currentCard + 1) / flashcards.length) * 100)
    return (
      <div>
        <PracticeCardBuild question={question} answer={answer} answerIsShown={answerIsShown} handleShowAnswer={this.handleShowAnswer}/>
        <Controls handlePrev={this.handlePrev} handleNext={this.handleNext}/>
        <ProgressBar progress={progress}/>
      </div>
    )
  }
}
